import {Platform} from 'react-native';

export const env_set: any = {
  mqtt: 'mqtt://vernemq.altacloud.biz:1883',
  clientId: '000011113',
  S3: 'https://alta-s3.dev-altamedia.com/vms-mtc/SMediaContentS/1647060724092.txt',
  // API_BASE_URL: 'https://vcpmc-api.vcpmc.org/api/',
  API_BASE_URL: 'https://vcpmc-api.dev-altamedia.com/api',
  APP_NAME: 'MOBILE',
  fvers: '0.0.1',
  vcode: '',
  installID: '',
  codePush: Platform.select({
    ios: {
      staging: '',
      production: '',
    },
    android: {
      staging: '',
      production: '',
    },
  }),
};

export const MIRA_CODE = {
  OPH_ACTIVATE: 1,
  OPH_GROUP_UPDATE: 3,
  OPH_MEDIA_HTTP: 67,
};
