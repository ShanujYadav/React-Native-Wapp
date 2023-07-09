import { StyleSheet } from 'react-native';
import React from 'react';
import TopSection from './components/topSection/TopSection';
import MidSection from './components/midSection/MidSection';
import { NavigationContainer } from '@react-navigation/native'
import Navigation from './components/Navigation';

export default function App() {
  return (
   <NavigationContainer>
  <Navigation/>
   </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
  },
});
