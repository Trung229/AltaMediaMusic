import { StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  textStyle: {
    fontSize: wp(1),
    color: "#FFAC69",
    fontWeight: "bold",
    flex: 1
  },
});
