

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen'


import { useEffect } from 'react'
import Pratik from './Pratik'




const App =() => {
    
  useEffect(() => {
   setTimeout(() => {
     
     SplashScreen.hide();
   },2000);
  },[])  
  
  return (
    <Pratik></Pratik>
  );
};

const styles = StyleSheet.create({
})
export default App;
