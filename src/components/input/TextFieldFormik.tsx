import React from 'react';
import {
  View,
  Image,
  ImageSourcePropType,
  TextInputProps,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {TextView} from '../label';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export interface TextFieldFormikProps {
  containerStyle?: StyleProp<ViewStyle>;

  prefix?: React.ReactNode;
  prefixIcon?: ImageSourcePropType;

  suffix?: React.ReactNode;
  suffixIcon?: ImageSourcePropType;

  inputProps?: TextInputProps;
  field?: any;
  form?: any;
  label?: string;
  lableStyle?: TextStyle;
  positionLabel?: 'top' | 'left';
}

export const TextFieldFormik: React.FC<TextFieldFormikProps> = props => {
  const {
    containerStyle,
    prefix,
    prefixIcon,
    suffix,
    suffixIcon,
    label,
    lableStyle,
    field: {name, value, onChange, onBlur},
    form: {errors, touched, setFieldTouched},
    inputProps,
    positionLabel,
  } = props;

  const renderPrefix = () => {
    if (prefix) {
      return prefix;
    }
    if (prefixIcon) {
      return <Image source={prefixIcon} />;
    }
    return null;
  };

  const renderSuffix = () => {
    if (suffix) {
      return suffix;
    }
    if (suffixIcon) {
      return <Image source={suffixIcon} />;
    }
    return null;
  };

  const colorLine = errors[name] && touched[name] ? 'red' : '#d2d6dc';

  const _onBlur = () => {
    setFieldTouched(name);
    onBlur(name);
  };

  return (
    <View style={[_styles.container, containerStyle]}>
      {!!label && positionLabel == 'top' && (
        <TextView style={[_styles.label, lableStyle]} text={label} />
      )}
      <View style={_styles.content}>
        {renderPrefix()}
        {!!label && positionLabel == 'left' && (
          <TextView style={[_styles.label, lableStyle]} text={label} />
        )}
        <View style={_styles.padding} />
        <View style={_styles.inputField}>
          <TextInput
            {...inputProps}
            onBlur={_onBlur}
            value={value}
            onChangeText={onChange(name)}
            style={[_styles.input, inputProps?.style]}
          />
        </View>
        {renderSuffix()}
      </View>
      <View style={[_styles.divider, {backgroundColor: colorLine}]} />
    </View>
  );
};

const _styles = StyleSheet.create({
  container: {},
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: '#d2d6dc',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    paddingVertical: hp(0.5),
    fontSize: wp(2),
  },
  padding: {width: wp(3)},
  errorText: {
    fontSize: wp(2),
    color: 'red',
  },
  label: {
    fontSize: wp(3.5),
    fontWeight: '700',
  },
  inputField: {
    backgroundColor: '#2B2B3F',
    borderRadius: wp(1),
    borderWidth: 1,
    borderColor: 'white',
    width: wp(30),
    height: hp(8),
    justifyContent: 'center',
  },
});
