import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './src/navigation/navigator';  // Import navigator.js

export default function App() {
  return (
    <NavigationContainer>
      <Navigator />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
