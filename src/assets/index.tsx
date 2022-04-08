import {fromPairs} from 'lodash';

const SOURCE = {
  LOGO: require('./logo.png'),
  VCPMC: require('./VCPMC.png'),
  IC_EYES: require('./eyes.png'),
  IC_EYECLOSE: require('./eyem.png'),
  IC_PLAY: require('./play_icon.png'),
  IC_RANDOM: require('./random_icon.png'),
  IC_REPEAT: require('./repeat_icon.png'),
};

export const getSource = (source: keyof typeof SOURCE) => {
  return SOURCE[source];
};

export * from './svg';
