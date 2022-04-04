import { StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: "#FFFFFF",
    fontWeight: "700"
  },
  big: {
    fontSize: 30,
  },
  medium: {
    fontSize: 15,
    width: '100%',
    textAlign: 'center'
  },
  small: {
    fontSize: 10
  }
});
