import store from '~core/store';
import profileStore from './profileStore';
import repository, {ILoginDTO} from './repository';

const authPresenter: any = {...repository};

authPresenter.signIn = async (
  payload : ILoginDTO,
  remember = false
) => {
  const token = await authPresenter.login(payload)
  store.dispatch(profileStore.actions.login(token?.deviceToken))
  return token
}

export default authPresenter
