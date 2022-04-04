import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from './style';

interface propsText {
  text: string,
  size: string
}
export const CustomText: React.FC<propsText> = (props) => {
  const { text, size } = props
  return (
    <>
      {size === "big" ?
        <Text style={[styles.textStyle, styles.big]}>{text}</Text> :
        size === "medium" ? <Text style={[styles.textStyle, styles.medium]}>{text}</Text> :
          <Text style={[styles.textStyle, styles.small]}>{text}</Text>
      }
    </>
  )
}

