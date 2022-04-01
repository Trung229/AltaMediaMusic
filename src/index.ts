import React from 'react';
import {useSelector} from 'react-redux';
// import { configTranslation } from '~helper/translate';
import {ClientSelector} from '~modules/app/appStore';
import {LanguageSelector} from '~modules/setting/settingStore';
import Crash, {UserConfirmation} from 'appcenter-crashes';
import AppCenter from 'appcenter';
import {requestMultiple, PERMISSIONS} from 'react-native-permissions';
import {config} from '~config';
import {locale} from '~language';

export const load = async () => {
  if (!__DEV__) {
    await Crash.setEnabled(true);
    Crash.notifyUserConfirmation(UserConfirmation.ALWAYS_SEND);
  }
  return AppCenter.getInstallId()
    .then(installId => {
      config.installID = installId;
    })
    .then(() => {
      return requestMultiple([
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
        PERMISSIONS.ANDROID.CAMERA,
        PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
        PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
      ]);
    });
};

export const AppLogic = () => {
  const {clientId} = useSelector(ClientSelector);
  const {language}: any = useSelector(LanguageSelector);

  const will = React.useMemo(() => {
    if (!clientId) {
      return undefined;
    }
    return {
      topic: 'h2/will',
      msg: {status: 0, mgw_id: clientId},
    };
  }, [clientId]);
  const memoLangData = React.useMemo(() => {
    return locale[language || 'en'];
  }, [language]);

  // React.useEffect(() => {
  //   configTranslation(language);
  // }, []);

  return {clientId, will, memoLangData, language};
};
