import { StyleSheet} from 'react-native';
module.exports = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'flex-start',
    alignItems:'center',
    flexDirection:'column',
    position:'relative'
  },
  backgroundImage:{
    flex:1,
    position:'absolute',
    width:'100%',
    height:'100%',
    zIndex:-1,
  },
  logo:{
    width:'65%',
    marginTop:20,
    marginRight:'auto',
    marginLeft:'auto',
    marginBottom:10,
    resizeMode:'contain'
  },
  welcome: {
    fontSize: 50,
    height:70,
    textAlign: 'center',
    fontFamily:'aileron_light',
    marginTop:40,
    color:'#696969'

  },
  instructions: {
    textAlign: 'center',
    color: '#696969',
    fontSize:16,
    lineHeight:35,
    width:'80%',
    marginTop:100,
    fontFamily:'aileron_semibold'
  },
  footerButton: {
    alignItems: 'center',
    backgroundColor: '#009bdf',
    padding: 10,
    position:'absolute',
    bottom:40,
    borderRadius:8
  },
  footerText:{
    color:'#fff',
    fontSize:18,
    fontFamily:'aileron_semibold'
  }
});
