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
    zIndex:10,
  },
  center:{
    flex: 0.1,
    width:"100%",
    backgroundColor: '#1E1E2E',
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  body: {
    padding:10,
    flex: 0.7,
    width:"100%",
    backgroundColor: '#1E1E2E',
    zIndex:-1,
    flexDirection:"row",
    justifyContent: 'space-between',
  },
  headerLeft:{
    flex:0.65,
    alignItems:"flex-start",
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
    maxHeight: 30
  },
  textRed:{
    color:"#B65100",
    fontSize:10,
    fontWeight:"500"
  },
  musicInfo:{
    alignItems:"center",
    flex:0.2,
    maxHeight: 250
  },
  containerListMusic:{
    flex:0.4,
    marginLeft:10,
    marginRight:10
  },
  containerListPlayList:{
    flex:0.3,
    position: "relative",
  },
  actions:{
    flex:0.1,
    backgroundColor:"#2F2F41",
    maxHeight:hp(30),
    marginLeft:wp(2),
    borderRadius:10,
    alignItems:"center",
    justifyContent:"space-around",
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
  },
  listMusicHeader:{
    flexDirection:"row",
    justifyContent:"space-between",
  },
  containerItemMusic:{
    backgroundColor:"#2F2F41B2",
    borderRadius:16,
    padding:14
  },
  containerItem:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems: 'flex-end',
    marginTop:10,
    marginBottom:10
  },
  textSchedule:{
    color:"#FFF",
    marginRight:wp(14),
    maxWidth:wp(100),
    fontSize:wp(2)
  },
  imagesRight:{
    width:wp(2),
    height:wp(2)
  },
  circle:{
    width:wp(4),
    height:wp(4),
    borderRadius:wp(4),
    backgroundColor:"#72728880",
    justifyContent: "center",
    alignItems: "center"
  }
});
