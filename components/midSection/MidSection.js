import { StyleSheet } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Chat from '../Chats/Chat'
import Status from '../Status/Status'
import Call from '../Calls/Call'
const Tab = createMaterialTopTabNavigator();
const MidSection = () => {
  return   (
      <Tab.Navigator initialRouteName='Chat'  screenOptions={{
        tabBarActiveTintColor:'#fff',
        tabBarIndicatorStyle:{
          backgroundColor: '#fff'
        },
        tabBarLabelStyle:{
          fontWeight:'bold'
        },
        tabBarStyle:{
          backgroundColor:'#0e806a'
        }
      }}>
        <Tab.Screen name='Chat' component={Chat} />
        <Tab.Screen name='Status' component={Status} />
        <Tab.Screen name='Calls' component={Call} />
      </Tab.Navigator>
  )
      }

export default MidSection;

const styles = StyleSheet.create({})