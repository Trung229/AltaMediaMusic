import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './main.styles';
import { mainLogic} from './main.logic';
export const Main: React.FC<any> = (props) => {
  const {} = props;
  const {} = mainLogic();
  return (
    <View style={styles.container}>
      <Text>main</Text>
    </View>
  )
}
