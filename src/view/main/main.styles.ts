import {StyleSheet} from 'react-native';
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
  header:{
    padding:10,
    flex: 0.2,
    width:"100%",
    backgroundColor: '#1E1E2E',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  body: {
    padding:10,
    flex: 0.8,
    width:"100%",
    backgroundColor: '#1E1E2E',
    zIndex:-1,
    flexDirection:"row",
    justifyContent: 'space-between'
  },
  headerLeft:{
    flex:0.65
  },
  headerRight:{
    flex:0.35,
    flexDirection:"row",
  },
  avatar:{
    width:30,
    height:30,
    borderRadius:30
  },
  containerRight:{
    flexDirection: 'row',
    flex:0.5,
    alignItems: 'center',
    justifyContent:'space-evenly',
  },
  containerInfo:{
    marginRight:4,
  },
  textRed:{
    color:"#B65100",
    fontSize:10,
    fontWeight:"500"
  },
  musicInfo:{
    alignItems:"center",
    flex:0.2
  },
  containerListMusic:{
    flex:0.3
  },
  containerListPlayList:{
    flex:0.3
  },
  actions:{
    flex:0.2
  },
  imageInfoMusic:{
    width:"100%",
    height:"50%",
    marginBottom:8,
    borderRadius:8
  },
  line:{
    width:"100%",
    borderBottomColor: 'white',
    borderBottomWidth: .5,
    marginTop: 8,
    marginBottom: 8
  },
  containerText:{
    justifyContent:"space-between",
    flexDirection:"row",
    width:"100%",
    alignItems:"center"
  },
  textLight:{
    fontWeight:"300",
    color:"#FFFFFF",
    opacity: 0.5,
  }
});
