
import React from 'react';
import {Text, View} from 'react-native';

import { StackNavigator } from 'react-navigation';
import home from '../screens/home/home';
import test from '../screens/test/test';

const Navigation = StackNavigator(
  {
    First:{
      screen:home,
      // Optional: Override the `navigationOptions` for the screen
      navigationOptions: ({navigation}) => ({
        header: false
      })
    },
    Second:{screen:test}
  }
);
export default Navigation; // Export your root navigator as the root component
