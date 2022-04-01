import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './Splash.styles';
import {SplashLogic} from './Splash.logic';
import {getSource} from '~assets';
import {BuildConfig, env_set} from '~config';
export const Splash: React.FC<any> = props => {
  const {} = props;
  const {} = SplashLogic();
  return (
    <View style={styles.container}>
      <Image source={getSource('LOGO')} style={styles.img} />
      <Text style={styles.txt}>{env_set[BuildConfig.env_key].fvers}</Text>
    </View>
  );
};
