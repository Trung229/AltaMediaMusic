import {useDispatch, useSelector} from 'react-redux';
import {LanguageSelector} from '~modules/setting/settingStore';
import * as Yup from 'yup';
import {useState} from 'react';

export const AuthLogic = () => {
  const {language} = useSelector(LanguageSelector);
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [inputErrors, setInputErrors] = useState({});
  const [rememberLogin, setRememberLogin] = useState(false);

  const checkBoxColors = {false: '#347AFF', true: '#FF7506'};

  const onChangeUserName = (text: string) => setUserName(text?.trim());
  const onChangePassword = (text: string) => setPassword(text);
  const onPressLogin = (errors: any) => setInputErrors(errors);
  const onPressRememberLogin = () => setRememberLogin(!rememberLogin);

  const signInSchema = Yup.object({
    userName: Yup.string().required('require username'),
    password: Yup.string().required('require password'),
  });

  const _changeIconShow = () => {
    setShowPassword(false);
  };

  const _changeIconHide = () => {
    setShowPassword(true);
  };

  return {
    dispatch,
    _changeIconShow,
    _changeIconHide,
    password,
    showPassword,
    language,
    signInSchema,
    onChangeUserName,
    onChangePassword,
    inputErrors,
    onPressLogin,
    rememberLogin,
    onPressRememberLogin,
    checkBoxColors,
  };
};
