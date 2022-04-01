import moment from 'moment';
import store from '~core/store';
import {Media} from './entity';
import mgwStore from './mgwStore';
import * as repository from './repository';

const mwgPresenter: any = {...repository};

mwgPresenter.getIp = () => {
  return repository.getIp().then(ip => {
    store.dispatch(mgwStore.actions.setIp({ip}));
    return Promise.resolve(ip);
  });
};
mwgPresenter.download = (media: Media) => {
  return repository.downloadUrl(media.url || '').then(rs => {
    media.path = rs.path();
    store.dispatch(mgwStore.actions.pushMedia(media));
    return Promise.resolve(media);
  });
};

mwgPresenter.cleanMemory = () => {
  const nowUnix = moment().unix();
  store.dispatch(mgwStore.actions.cleanMedias(nowUnix));
};

export default mwgPresenter;
