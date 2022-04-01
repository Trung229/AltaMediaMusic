import {Platform} from 'react-native';
export const BuildConfig = {
  env_key: 'vms',
};
export const env_set: any = {
    mqtt: 'mqtt://vernemq.altacloud.biz:1883',
    clientId: '000011113',
    S3: 'https://alta-s3.dev-altamedia.com/vms-mtc/SMediaContentS/1647060724092.txt',
    API_BASE_URL: 'https://vcpmc-api.vcpmc.org/api/',
    APP_NAME: 'MOBILE',
    fvers: '0.0.1',
    vcode: '',
    installID: '',
    codePush: Platform.select({
      ios: {
        staging: '_tykB0FvL2mKAcFML0SXXyPxfew4JZs71I1r1',
        production: 'Niq-KUNKgapnzYLsH_uFqaJK0ROwDijayB9yZ',
      },
      android: {
        staging: '06DP2t3ihvat9iW8j_u6YTHhjp4nTNpWoqMRM',
        production: 'XrUFvbmSjOvWgN_L_IfQU8aOL7fYmEtKipmn0',
      },
    }),
};

export const MIRA_CODE = {
  OPH_ACTIVATE: 1,
  OPH_GROUP_UPDATE: 3,
  OPH_MEDIA_HTTP: 67,
};
