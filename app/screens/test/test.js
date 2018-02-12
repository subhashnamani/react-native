import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View , Image,TouchableOpacity} from 'react-native';
import { List , ListItem} from 'react-native-elements';
const styles = StyleSheet.create({
  test_header:{
    paddingTop:20,
    paddingBottom:20,
    paddingLeft:15,
    fontSize:15,
    fontFamily:'aileron_regular',
    backgroundColor:"#EEEEEE",
    color:'#000'
  },
  hamburger: {
    width: 10,
    height: 25,
    resizeMode:'contain',
  },
  hamburgerTouch:{
    marginRight:10
  }
});
export default class test extends React.Component{
  static navigationOptions = ({ navigation }) => {
        return {
    title: 'Mobile Diagnostics',
    headerTitleStyle: {
      fontWeight: '300',
      color: '#000',
      fontFamily: 'aileron_regular',
      fontSize: 18,
      alignSelf: 'center',
    },
    headerRight:(
       <TouchableOpacity style={styles.hamburgerTouch} onPress={
           () => navigation.navigate("First", {})
       }>
          <Image style={styles.hamburger} source={require('../../../assets/img/hamburger.png')}/>
       </TouchableOpacity>
      )
    }
  };
  render(){
    return(
      <View>
      <Text style={styles.test_header}>Pick a test category</Text>
      <List containerStyle={{borderTopWidth:0, borderBottomWidth:0,marginTop:0,marginBottom:0}}>
        <FlatList
            data={[
              {
                testName: 'Battery & Charging',
                testDetails:"Checks the device's battery health and charging capacity.",
                thumbnail:"https://drive.google.com/file/d/1q5ymV15aFPNq9DZ5xyi3sQpyihCu5960/view?usp=sharing"
              },
              {
                testName: 'Freeze & Crash',
                testDetails:'Checks storage space and identify reasons that cause the device to freeze or crash',
                thumbnail:"https://randomuser.me/api/portraits/thumb/men/49.jpg"
              },
              {
                testName: 'Connectivity',
                testDetails:"Checks the status of device's capability to connect to a network, GPS etc.",
                thumbnail:"https://randomuser.me/api/portraits/thumb/men/49.jpg"
              },
              {
                testName: 'Audio & Vibrate',
                testDetails:"Checks the device's audio components.",
                thumbnail:"https://randomuser.me/api/portraits/thumb/men/49.jpg"
              },
              {
                testName: 'Camera',
                testDetails:"Checks the device's front, rear camera, and flash",
                thumbnail:"https://randomuser.me/api/portraits/thumb/men/49.jpg"
              },
              {
                testName: 'Display & Touch',
                testDetails:"Checks the device's display and touch functions",
                "thumbnail":"https://randomuser.me/api/portraits/thumb/men/49.jpg"
              },
            ]}
            renderItem={({ item }) => (
                <ListItem
                    titleNumberOfLines={0}
                    subtitleNumberOfLines={0}
                    roundAvatar
                    title={ item.testName }
                    titleStyle={{marginLeft:20,marginBottom:5,fontSize:17,fontFamily:'aileron_regular'}}
                    subtitle={ item.testDetails }
                    subtitleStyle={{marginLeft:20,fontSize:12,fontWeight:'normal', fontFamily:'aileron_regular'}}
                    avatar={{ uri: item.thumbnail }}
                    containerStyle={{borderBottomWidth:0,marginBottom:10}}
                    rightIcon={{ style: { marginRight: -20,  } }}
                />
            )}
            keyExtractor={item => item.testDetails}
        />
      </List>
      </View>
    );
  }
}
