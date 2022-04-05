import { StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  box: {
    backgroundColor: "transparent",
    borderColor: '#C8C8DB',
    height: hp(8),
    borderRadius: 4,
  },
  iconNation: {
    width: wp(2),
    height: wp(2),
  },
  containerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10
  },
  nameNation: {
    fontSize: wp(2),
    color: '#C8C8DB',
  },
  ArrowUpIcon: {
    width: wp(3),
    height: wp(3),
  }
});
