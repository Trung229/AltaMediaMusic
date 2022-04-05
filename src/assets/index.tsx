import {fromPairs} from 'lodash';

const SOURCE = {
  LOGO: require('./logo.png'),
  VCPMC: require('./VCPMC.png'),
  IC_EYES: require('./eyes.png'),
  IC_EYECLOSE: require('./eyem.png'),
};

export const getSource = (source: keyof typeof SOURCE) => {
  return SOURCE[source];
};

export * from './svg';
