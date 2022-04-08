import {useDispatch} from 'react-redux';
import {removeProfile} from '~modules/authentication/profileStore';
export const MainLogic = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(removeProfile());
  };
  return {dispatch, handleLogout};
};
