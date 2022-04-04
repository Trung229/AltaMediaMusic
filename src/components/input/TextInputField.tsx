import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextInputProps,
  TextStyle,
  ImageSourcePropType,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export interface TextInputFieldProps {
  label: string;
  lableStyle?: TextStyle;
  containerStyle?: StyleProp<ViewStyle>;
  inputProps: TextInputProps;
  isError?: boolean;
  errorLabel?: string;
  suffix?: React.ReactNode;
  suffixIcon?: ImageSourcePropType;
}

const TextInputField: React.FC<TextInputFieldProps> = props => {
  const {
    label,
    lableStyle,
    containerStyle,
    inputProps,
    isError,
    errorLabel,
    suffix,
    suffixIcon,
  } = props;

  const renderSuffix = () => {
    if (suffix) {
      return suffix;
    }
    if (suffixIcon) {
      return <Image source={suffixIcon} />;
    }
    return null;
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.labelStyle, lableStyle]}>{label}</Text>
      <View
        style={
          isError ? [styles.inputField, styles.errorBorder] : styles.inputField
        }>
        <View style={styles.inputContainer}>
          <TextInput
            {...inputProps}
            style={[styles.textInput, inputProps?.style]}
          />
        </View>
        <View style={styles.iconContainer}>{renderSuffix()}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp(35),
  },
  textInputContainer: {
    marginTop: hp(1),
  },
  inputField: {
    backgroundColor: '#2B2B3F',
    borderRadius: wp(1),
    borderWidth: 1,
    borderColor: 'grey',
    height: hp(6),
    flexDirection: 'row',
  },
  inputContainer: {
    flex: 9,
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelStyle: {
    color: 'white',
    fontWeight: '700',
    fontSize: wp(1.2),
  },
  textInput: {
    fontSize: wp(1.2),
    fontWeight: '600',
    color: 'white',
    // textAlignVertical: 'top',
    paddingVertical: 0,
  },
  errorBorder: {
    borderColor: 'red',
    borderWidth: 1,
  },
});

export default TextInputField;
