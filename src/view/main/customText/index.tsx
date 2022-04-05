import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from './style';

interface propsText {
  text: string,
  size: string,
  isMinWidth?: boolean,
}
export const CustomText: React.FC<propsText> = (props) => {
  const { text, size, isMinWidth } = props
  return (
    <View style={styles.container}>
      {size === "big" ?
        <Text style={[styles.textStyle, styles.big, isMinWidth ? styles.addMargin : null]}>{text}</Text> :
        size === "medium" ? <Text style={[styles.textStyle, styles.medium, isMinWidth ? styles.addMargin : null]}>{text}</Text> :
          <Text style={[styles.textStyle, styles.small, isMinWidth ? styles.addMargin : null]}>{text}</Text>
      }
    </View>
  )
}

