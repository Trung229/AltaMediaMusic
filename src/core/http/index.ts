import {env_set} from '~config/index';
import axios, {AxiosInstance} from 'axios';
import {removeProfile} from '~modules/authentication/profileStore';
import store from '~core/store';
import {RootState} from '~modules';
import lodash from 'lodash';
import Toast from 'react-native-toast-message';
import {locale} from '~language';

export interface IParamsHTTP {
  method?: 'get' | 'post' | 'delete' | 'put';
  path: string;
  payload?: any;
  params?: any;
  config?: {
    headers?: any;
    isPrivate?: boolean;
    isFormData?: boolean;
  };
  showSuccess?: boolean;
  showError?: boolean;
  convert?: (res: any) => any;
}

export class HTTPRepository {
  public service: AxiosInstance;

  public language: string = 'en';

  constructor(baseURL?: string, rootStore?: any) {
    this.service = axios.create({
      baseURL: baseURL || env_set.API_BASE_URL,
      withCredentials: false,
    });
    this.setStore(rootStore);
  }

  setStore(s: any) {
    const state: RootState = s.getState();
    const token = state?.profileStore?.token;
    if (!lodash.isEmpty(token)) {
      this.service.defaults.headers.common.Authorization = `Bearer ${token}`;
    }

    this.language = state.settingStore.language;
    s.subscribe(() => {
      const newState = s.getState();
      const newToken = newState?.profileStore?.token;
      if (!lodash.isEmpty(newToken)) {
        this.service.defaults.headers.common.Authorization = `Bearer ${newToken}`;
      }
      this.language = newState.settingStore.language;
    });
  }

  private handleSuccess(
    response: any,
    convert: (data: any) => any,
    showSuccess: boolean,
  ) {
    if (showSuccess) {
      // console.log('response', response);

      Toast.show({
        type: 'success',
        text1: locale[this.language][response?.data?.message],
      });
    }
    if (convert !== undefined) {
      return Promise.resolve(convert(response.data?.data));
    }
    return Promise.resolve(response);
  }

  private showError(showError: boolean, response: any) {
    if (showError && response?.data) {
      console.log('response', response);
      Toast.show({
        type: 'error',
        text1: locale[this.language][response?.data?.message],
      });
    }
  }

  private handleError(error: any, showError: boolean) {
    const status = error.response?.status;

    switch (status) {
      case 500:
      case 400: {
        this.showError(showError, error.response);
        break;
      }
      case 401: {
        store.dispatch(removeProfile());
        break;
      }
      default: {
        if (showError) {
        }
        break;
      }
    }
    return Promise.reject(error);
  }

  private getDefaultConfig({isFormData}: any = {}) {
    const config = {
      headers: {},
    };
    if (isFormData) {
      Object.assign(config.headers, {
        'Content-Type': 'multipart/form-data',
      });
    }
    return config;
  }

  private toFormData(payload: any): FormData {
    if (payload == null) {
      return new FormData();
    }
    const arrKey = Object.getOwnPropertyNames(payload);
    return arrKey.reduce((form, item) => {
      if (payload[item] !== undefined) {
        const value = payload[item];
        if (Array.isArray(value)) {
          for (let i = 0; i < value.length; i++) {
            const it = value[i];
            if (typeof it === 'string') {
              form.append(`${item}[${i}]`, it);
            } else {
              Object.keys(it).forEach((f: any) => {
                form.append(`${item}[${i}].${f}`, it[f]);
              });
            }
          }
        } else {
          form.append(item, value);
        }
      }
      return form;
    }, new FormData());
  }

  private toArgs(path: string, params: any, data?: any): any[] {
    let args: any = [];
    if (params) {
      if (data) {
        args = [path, {...this.getDefaultConfig(), data, params}];
      } else {
        args = [path, {...this.getDefaultConfig(), params}];
      }
    } else {
      args = [path, {...this.getDefaultConfig(), data}];
    }
    return args;
  }

  execute({
    method = 'get',
    path = '',
    payload,
    config = {},
    params,
    showSuccess = true,
    showError = true,
    convert = res => res,
  }: IParamsHTTP) {
    let args: any = [];
    const {isFormData = false} = config;

    switch (method) {
      case 'get':
        args = this.toArgs(path, params);
        break;

      case 'delete':
        args = this.toArgs(path, params, payload);
        break;
      case 'post':
      case 'put':
        let data = payload;
        if (isFormData) {
          data = this.toFormData(payload);
        }
        args = [path, data, this.getDefaultConfig({isFormData})];
        break;
    }
    const funMethod: any = this.service[method];
    return funMethod(...args)
      .then((response: any) => {
        return this.handleSuccess(response, convert, showSuccess);
      })
      .catch((error: any) => this.handleError(error, showError));
  }
}
const httpRepository = new HTTPRepository(env_set.API_BASE_URL, store);
export default httpRepository;
