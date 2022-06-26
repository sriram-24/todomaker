import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import React,{useEffect} from 'react';

import {
  SafeAreaView, Text, View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Home from './Home';
import Settings from './Settings';

import { nav, NavigationTheme } from '../Styles/NavigationStyles';
import { colorPrimary, colorSecondary } from '../Styles/Theme';

function Navigation({setLoginState}) {

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer theme={NavigationTheme} >
      <Tab.Navigator 
      screenOptions={{
        headerShown:false,
        tabBarStyle:nav.bar
      }}

      >
        <Tab.Screen
          name='Home' 
          component={Home}
          options={{
            tabBarShowLabel:false,
            tabBarIcon :({focused,color,size}) => (
              <View>
                <Icon name="home" size={30} color={
                  focused? colorPrimary : colorSecondary
                } />
                <View style={focused ? [nav.bottomLine, focused ? nav.borderPrimary : nav.borderSecondary] : nav.bottomLine}></View>
              </View>
            )
          }}
        />
        <Tab.Screen
          name='Tasks' 
          component={Home}
          options={{
            tabBarShowLabel:false,
            tabBarIcon :({focused,color,size}) => (
              <View>
                <Icon name="profile" size={30} color={
                  focused? colorPrimary : colorSecondary
                } />
                <View style={focused ? [nav.bottomLine, focused ? nav.borderPrimary : nav.borderSecondary] : nav.bottomLine}></View>
              </View>
            )
          }}
        />
        <Tab.Screen
          name='NewTask' 
          component={Home}
          options={{
            tabBarShowLabel:false,
            tabBarIcon :({focused,color,size}) => (
              <View style={nav.newTask}>
                <Icon name="plus" size={30} color="#fff" />
              </View>
            )
          }}
        />
        <Tab.Screen
          name='Activities' 
          component={Home}
          options={{
            tabBarShowLabel:false,
            tabBarIcon :({focused,color,size}) => (
              <View>
                <Icon name="linechart" size={30} color={
                  focused? colorPrimary : colorSecondary
                } />
                <View style={focused ? [nav.bottomLine, focused ? nav.borderPrimary : nav.borderSecondary] : nav.bottomLine}></View>
              </View>
            )
          }}
        />
        <Tab.Screen
          name='settings'
          component={Settings}
          initialParams = {{
            onLogout : () =>{
                setLoginState(false);
            }
          }}
          options={{
            tabBarShowLabel:false,
            tabBarIcon :({focused, color, size}) => (
              <View>
                <Icon name="setting" size={30} color={
                  focused? colorPrimary : colorSecondary
                } />
                <View style={focused ? [nav.bottomLine, focused ? nav.borderPrimary : nav.borderSecondary] : nav.bottomLine}></View>
              </View>
            )
          }}
        />
        
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Navigation