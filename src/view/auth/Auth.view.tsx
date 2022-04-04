import React from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { styles } from './Auth.styles';
import { AuthLogic, navigateToMain } from './Auth.logic';
import { FlatButton, FullScreenLoadingIndicator } from '~components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import authPresenter from '~modules/authentication/presenter';
import { useSingleAsync } from '~core/helper/hooks/useSingleAsync';
import { useAltaIntl } from '~core/helper/hooks/translate';
export const Auth: React.FC<any> = props => {
  const { } = props;
  const { formatMessage } = useAltaIntl();
  const { login } = authPresenter;
  const signInBySingleAsync = useSingleAsync(login);

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
        title={formatMessage("common.submit")}
        containerStyle={{
          width: wp(30),
          borderRadius: 5,
          borderWidth: 2,
          borderColor: 'orange',
          backgroundColor: 'white',
        }}
      />
      <FlatButton
        onPress={() => {
          navigateToMain(props)
        }}
        title="Navigate"
        containerStyle={{
          width: wp(30),
          borderRadius: 5,
          borderWidth: 2,
          borderColor: 'orange',
          backgroundColor: 'white',
        }}
      />
      <FullScreenLoadingIndicator
        visible={signInBySingleAsync?.status == 'loading'}
      />
    </View>
  );
};
