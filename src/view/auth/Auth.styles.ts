import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const VCPMC_Logo_width = wp(12);

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E2E',
  },
  topContainer: {
    flex: 1,
  },
  centerContainer: {
    flex: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 1,
    alignItems: 'center',
  },
  imageVNMPCBox: {
    backgroundColor: 'white',
    borderRadius: VCPMC_Logo_width,
  },
  imageVNMPC: {
    width: VCPMC_Logo_width,
    height: VCPMC_Logo_width,
  },
  txt: {
    fontSize: wp(1.5),
    color: 'white',
  },
  textLogin: {
    fontSize: 18,
    color: 'white',
    fontWeight: '700',
    marginTop: hp(5),
  },
  labelStyle: {
    fontSize: wp(1.5),
    color: 'white',
    fontWeight: '600',
    marginLeft: wp(3),
    marginBottom: hp(1),
  },
  textInputContainer: {
    marginTop: hp(2),
  },
  submitButton: {
    backgroundColor: '#FF7506',
  },
  showPasswordIcon: {
    alignSelf: 'flex-end',
  },
  textError: {
    color: 'red',
    fontWeight: '600',
    fontSize: wp(1.5),
  },
  checkBoxSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: -wp(1),
  },
  checkBox: {
    color: 'white',
  },
  textCheckBoxDescription: {
    color: 'white',
    fontSize: wp(1.5),
  },
});
