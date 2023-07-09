import { StyleSheet } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import Message from './Screens/Message'
import Profile from './Screens/Profile'
import TopSection from './topSection/TopSection';

const Navigation = () => {
  return <Stack.Navigator initialRouteName='TopSection' screenOptions={{headerShown: false}}>
    <Stack.Screen name="topSection" component={TopSection} />
    <Stack.Screen name="Message" component={Message} />
    <Stack.Screen name="Profile" component={Profile} />
  </Stack.Navigator>
}
export default Navigation;
const styles = StyleSheet.create({

})