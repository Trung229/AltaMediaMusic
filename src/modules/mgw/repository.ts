import {get} from '~core/http/axios';
import RNFetchBlob from 'react-native-fetch-blob';
import {Media} from './entity';
export const getIp = () => {
  return get('https://ifconfig.me/ip');
};

export const downloadUrl = (url: string) => {
  return RNFetchBlob.config({
    fileCache: true,
  })
    .fetch('GET', url)
    .then(res => {
      return Promise.resolve(res);
    });
};

export const download = (media: Media): Promise<Media> => {
  return Promise.resolve(media);
};
