import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
export const {{ name }}: React.FC < any > = (props) => {
  const { } = props
  return (
    <View style={styles.container}>
      <Text>{{ name }}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
