import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export interface RectangleButtonProps {
  title: string;
  titleStyle?: TextStyle;
  containerStyle?: StyleProp<ViewStyle>;
  onPress: () => void;
}

const _RectangleButton: React.FC<RectangleButtonProps> = props => {
  const {title, titleStyle, containerStyle, onPress} = props;
  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity onPress={onPress}>
        <Text style={[styles.textTitle, titleStyle]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: wp(14),
    height: hp(7),
    borderRadius: wp(0.5),
    backgroundColor: '#FF7506',
    alignSelf: 'center',
    marginTop: hp(2),
  },
  textTitle: {
    fontSize: wp(1.5),
    color: 'white',
    fontWeight: '700',
    textAlign: 'center',
  },
});

export const RectangleButton = React.memo(_RectangleButton);
