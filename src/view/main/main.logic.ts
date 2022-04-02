import {useDispatch} from 'react-redux';
export const mainLogic = () => {
  const dispatch = useDispatch();
  return {dispatch};
}
