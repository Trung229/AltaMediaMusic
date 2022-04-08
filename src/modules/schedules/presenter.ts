import moment from 'moment';
import store from '~core/store';
import schedulesStore from './schedulesStore';
import repository, {ISchedules} from './repository';

const schedulesPresenter: any = {...repository};


schedulesPresenter.getListSchedules = async (
    payload : ISchedules
  ) => {
    const promise = await repository.getListSchedules(payload)
    store.dispatch(schedulesStore.actions.updateListSchedules(promise.data))
    return promise;
  }
  

export default schedulesPresenter;