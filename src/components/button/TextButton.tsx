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

export interface TextButtonProps {
  title: string;
  titleStyle?: TextStyle;
  containerStyle?: StyleProp<ViewStyle>;
  onPress: () => void;
}

const _TextButton: React.FC<TextButtonProps> = props => {
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
    borderBottomColor: '#FF7506',
    borderBottomWidth: 1,
  },
  textTitle: {
    fontSize: wp(1.5),
    color: '#FF7506',
    fontWeight: '600',
  },
});

export const TextButton = React.memo(_TextButton);
