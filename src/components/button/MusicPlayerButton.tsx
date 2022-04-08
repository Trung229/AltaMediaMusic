import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  ImageSourcePropType,
  ImageStyle,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export interface MusicPlayerProps {
  icon_source: ImageSourcePropType;
  icon_style?: ImageStyle;
  conatiner_style?: StyleProp<ViewStyle>;
  switchBool: boolean;
  onPressBoolTrue: () => void;
  onPressBoolFalse: () => void;
}

const _MusicPlayerButton: React.FC<MusicPlayerProps> = props => {
  const {
    switchBool,
    icon_source,
    icon_style,
    conatiner_style,
    onPressBoolTrue,
    onPressBoolFalse,
  } = props;
  return (
    <View style={[styles.container, conatiner_style]}>
      <TouchableOpacity
        onPress={switchBool === true ? onPressBoolTrue : onPressBoolFalse}>
        <Image
          style={[styles.imageIcon, icon_style]}
          source={icon_source}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  imageIcon: {
    width: wp(1.5),
    height: wp(1.5),
  },
});

export const MusicPlayerButton = React.memo(_MusicPlayerButton);
