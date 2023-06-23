import { StyleSheet } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Chat from '../Chats/Chat'
import Status from '../Status/Status'
import Call from '../Calls/Call'
import { View,Text} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Tab = createMaterialTopTabNavigator();

const MidSection = () => {
  return (
      <Tab.Navigator initialRouteName='Status' 
      screenOptions={{
      tabBarActiveTintColor:'white',
      tabBarIndicatorStyle:{
        backgroundColor:'white',
      },
      tabBarLabelStyle:{
        fontWeight:'bold',
      },
      tabBarStyle:{
        backgroundColor:'#0e806a'
      }
      }}>
        <Tab.Screen name='Chats' component={Chat} />
        <Tab.Screen name='Status' component={Status} />
        <Tab.Screen name='Calls' component={Call} />
      </Tab.Navigator>
        )
}

export default MidSection;

const styles = StyleSheet.create({})