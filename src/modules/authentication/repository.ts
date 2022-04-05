import {get} from '~core/http/axios';
import RNFetchBlob from 'react-native-fetch-blob';
import httpRepository from '~core/http';

export interface ILoginDTO {
  deviceUserName: string;
  devicePassword: string;
}

const login = (payload: ILoginDTO) => {
  return httpRepository.execute({
    path: '/Devices/Login',
    method: 'post',
    payload,
    config: {isPrivate: false},
  });
};

interface IScheduleParam {
  TimeBegin: string;
  TimeEnd: string;
}

const getSchedule = (params: IScheduleParam) => {
  return httpRepository.execute({
    path: '/Schedules/GetSchedulesOfDevice',
    method: 'get',
    params,
  });
};

export default {
  login,
  getSchedule,
};
