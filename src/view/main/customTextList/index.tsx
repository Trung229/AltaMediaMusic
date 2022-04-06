import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from './style'
export const CustomTextList: React.FC<any> = (props) => {
  return (
    <Text style={[styles.textStyle]}>{props.text}</Text>
  )
}

