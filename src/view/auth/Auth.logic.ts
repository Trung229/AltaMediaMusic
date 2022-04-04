import {useDispatch, useSelector} from 'react-redux';
import {LanguageSelector} from '~modules/setting/settingStore';
export const AuthLogic = () => {
  const {language} = useSelector(LanguageSelector);
  const dispatch = useDispatch();
  return {dispatch, language};
};


export const navigateToMain = (props:any):void =>{
  props.navigation.navigate("MainScreen");
}