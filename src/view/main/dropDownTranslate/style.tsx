import { StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  box: {
    backgroundColor: "transparent",
    borderColor: '#C8C8DB',
    height: 35,
    borderRadius: 4,
  },
  iconNation: {
    width: 20,
    height: 20,
  },
  containerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10
  },
  nameNation: {
    color: '#C8C8DB',
  },
  ArrowUpIcon: {
    width: 20,
    height: 20,
  }
});
