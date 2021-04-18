import React from 'react';
import{ Text, View, TouchableOpacity, Image,} from 'react-native';
import WelcomeScreen from './screens/welcome';
import {AppTabNavigator} from './components/AppTabNavigator'
import {createSwitchNavigator, createAppContainer} from 'react-navigation'

export default class App extends React.Component{

  render(){
    return(
       
          <AppContainer/>
       

    )
  }
  
}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen : {
    screen : WelcomeScreen
  },
  BottomTab : {
    screen : AppTabNavigator
  }
})

const AppContainer = createAppContainer(switchNavigator)