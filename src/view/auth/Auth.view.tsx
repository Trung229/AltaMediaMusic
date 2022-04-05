import React, {useEffect} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {styles} from './Auth.styles';
import {AuthLogic} from './Auth.logic';
import {
  FlatButton,
  FullScreenLoadingIndicator,
  IconImage,
  TextField,
  TextFieldFormik,
} from '~components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useAltaIntl} from '~core/helper/hooks/translate';
import {useDispatch, useSelector} from 'react-redux';
import settingStore from '~modules/setting/settingStore';
import {Image} from 'react-native-animatable';
import {getSource} from '~assets';
import {Formik} from 'formik';
import {values} from 'lodash';
import TextInputField from '~components/input/TextInputField';
import {RectangleButton, TextButton} from '~components';
import CheckBox from '@react-native-community/checkbox';
import {TokenSelector} from '~modules/authentication/profileStore';
import {RootState} from '~modules';

export const Auth: React.FC<any> = props => {
  const {} = props;
  const {formatMessage} = useAltaIntl();
  const {
    dispatch,
    language,
    signInSchema,
    _changeIconHide,
    _changeIconShow,
    showPassword,
    password,
    userName,
    onChangePassword,
    onChangeUserName,
    inputErrors,
    onPressLogin,
    rememberLogin,
    onPressRememberLogin,
    checkBoxColors,
    onPressFocus,
  } = AuthLogic();

  const render_suffix = () => {
    if (password !== '') {
      if (showPassword) {
        return (
          <IconImage
            source={getSource('IC_EYES')}
            size={Platform.OS == 'android' ? 20 : 25}
            onPress={_changeIconShow}
            isTouch={true}
          />
        );
      } else {
        return (
          <IconImage
            source={getSource('IC_EYECLOSE')}
            size={Platform.OS == 'android' ? 20 : 25}
            onPress={_changeIconHide}
            isTouch={true}
          />
        );
      }
    }
  };

  const render_errors = () => {
    if (
      !(
        Object.keys(inputErrors).length === 0 &&
        inputErrors.constructor === Object
      )
    ) {
      return (
        <Text style={styles.textError}>
          {formatMessage('common.authenInputError')}
        </Text>
      );
    }
  };
  const render_checkbox = () => {
    return (
      <View style={styles.checkBoxSection}>
        <CheckBox
          value={rememberLogin}
          onValueChange={onPressRememberLogin}
          tintColors={checkBoxColors}
        />
        <Text style={styles.textCheckBoxDescription}>
          {formatMessage('common.rememberLogin')}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}></View>
      <View style={styles.centerContainer}>
        <View style={styles.imageVNMPCBox}>
          <Image
            source={getSource('VCPMC')}
            style={styles.imageVNMPC}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.textLogin}>{formatMessage('common.login')}</Text>
        <Formik
          initialValues={{userName, password}}
          validationSchema={signInSchema}
          onSubmit={v => {
            // console.log('v: ', v);
          }}>
          {formik => (
            <View>
              <TextInputField
                containerStyle={styles.textInputContainer}
                isError={
                  !(
                    Object.keys(inputErrors).length === 0 &&
                    inputErrors.constructor === Object
                  )
                }
                inputProps={{
                  style: styles.txt,
                  value: formik.values.userName,
                  onChangeText: (value: string) => {
                    formik.setFieldValue('userName', value, true);
                    onChangeUserName(value);
                    console.log(formik.errors);
                  },
                  onFocus: () => {
                    onPressFocus({});
                  },
                }}
                label={formatMessage('common.userName')}
              />
              <TextInputField
                containerStyle={styles.textInputContainer}
                isError={
                  !(
                    Object.keys(inputErrors).length === 0 &&
                    inputErrors.constructor === Object
                  )
                }
                inputProps={{
                  style: styles.txt,
                  value: formik.values.password,
                  secureTextEntry: showPassword,
                  onChangeText: (value: string) => {
                    formik.setFieldValue('password', value, true);
                    onChangePassword(value);
                  },
                  onFocus: () => {
                    onPressFocus({});
                  },
                }}
                label={formatMessage('common.password')}
                suffix={render_suffix()}
              />
              {render_errors()}
              {render_checkbox()}
              <RectangleButton
                title={formatMessage('common.login')}
                onPress={() => {
                  // formik.submitForm();
                  onPressLogin(formik.values.userName, formik.values.password);
                }}
              />
            </View>
          )}
        </Formik>
      </View>
      <View style={styles.bottomContainer}>
        <TextButton
          title={formatMessage('common.forgotPassword')}
          onPress={() => {}}
        />
      </View>
    </View>
  );
};
