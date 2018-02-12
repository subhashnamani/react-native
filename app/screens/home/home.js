import React from 'react';
import {Platform, Text, View, Image, Button} from 'react-native';
var styles = require('../../../assets/css/style');
export default class home extends React.Component{
  render(){
    var {navigate} = this.props.navigation;
    return(
      <View style={styles.container}>
        <Image style={styles.backgroundImage} source={require('../../../assets/img/welcomescreen.png')}/>
        <Image style={styles.logo} source={require('../../../assets/img/pervacio_logo_and.png')}/>
        <Text style={styles.welcome}>
          Diagnostics
        </Text>
        <Text style={styles.instructions}>
          Pervacio Diagnostics allows you to troubleshoot your mobile device,
          identify any issues, and optimize its overall performance.
        </Text>
        <Button onPress={
            () => navigate("Second", {})
        }
        title = 'Let&apos;s get started!'
        />
      </View>
    );
  }
}
