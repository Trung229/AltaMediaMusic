import { StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textStyle: {
    color: "#FFFFFF",
    fontWeight: "700",
  },
  big: {
    fontSize: wp(3),
  },
  medium: {
    fontSize: wp(2),
    width: '100%',
    textAlign: 'center'
  },
  small: {
    fontSize: wp(1),
    fontWeight: "400",
  },
  addMargin: {
    flex: 1,
    height: "100%",
    marginRight: 10,
  },
});
