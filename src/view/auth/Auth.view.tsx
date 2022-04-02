import React from 'react';
import {View, Text, ActivityIndicator, TouchableOpacity} from 'react-native';
import {styles} from './Auth.styles';
import {AuthLogic} from './Auth.logic';
import {FlatButton, FullScreenLoadingIndicator} from '~components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import authPresenter from '~modules/authentication/presenter';
import {useSingleAsync} from '~core/helper/hooks/useSingleAsync';
import {useAltaIntl} from '~core/helper/hooks/translate';
import {useDispatch} from 'react-redux';
import settingStore from '~modules/setting/settingStore';
export const Auth: React.FC<any> = props => {
  const {} = props;
  const {translate} = useAltaIntl();
  const {dispatch, language} = AuthLogic();
  const {login} = authPresenter;
  const signInBySingleAsync = useSingleAsync(login);
  const a = () => {
    dispatch(
      settingStore.actions.updateLanguage(language == 'vi' ? 'en' : 'vi'),
    );
  };
  return (
    <View style={styles.container}>
      <FlatButton
        onPress={() => {
          signInBySingleAsync
            ?.execute({
              deviceUserName: 'ALTA_A1',
              devicePassword: 'Alta@2021',
            })
            ?.then(res => {
              console.log('res', res, signInBySingleAsync.status);
            })
            .catch(err => console.log('err', err));
        }}
        title="SUBMIT"
        containerStyle={{
          width: wp(30),
          borderRadius: 5,
          borderWidth: 2,
          borderColor: 'orange',
          backgroundColor: 'white',
        }}
      />
      <TouchableOpacity onPress={() => console.log('Hi')}>
        <Text>Translate</Text>
      </TouchableOpacity>

      <Text style={styles.txt}>{translate('welcome')}</Text>
      <FullScreenLoadingIndicator
        visible={signInBySingleAsync?.status == 'loading'}
      />
    </View>
  );
};
