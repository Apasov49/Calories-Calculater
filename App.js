// App.js

import React from 'react'
import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DropDownPicker from 'react-native-dropdown-picker'

import { SafeAreaView, StatusBar } from 'react-native';
import CalorieCalculator from './src/CalorieCalculator';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <CalorieCalculator />
    </SafeAreaView>
  );
};

export default App;
