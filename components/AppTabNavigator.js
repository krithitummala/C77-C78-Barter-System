import React from 'react'
import homeScreen from '../screens/homeScreen'
import exchangeScreen from '../screens/exchangeScreen'
import {createBottomTabNavigator} from 'react-navigation-tabs';

 export const AppTabNavigator = createBottomTabNavigator({
  Home : {
    screen : homeScreen,
    navigationOptions : {
      tabBarLabel : "Home"
    }
  },
 
   Exchange : {
     screen : exchangeScreen,
     navigationOptions : {
       tabBarLabel : "Exchange"
     }
   }
})
