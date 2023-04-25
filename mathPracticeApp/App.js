//import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native/types';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState, useEffect } from 'react';
//import { Alert } from 'react-native/types';
import HomeScreen from './screens/homeScreen.js';
import AddSubtract from './screens/AddSubtract.js';
import MultiplyDivide from './screens/MultiplyDivide.js';
import ResultsScreen from './screens/resultScreen.js';
import LoginScreen from './screens/loginScreen.js';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Mathletics - Home" component={HomeScreen} />
        <Stack.Screen name="Addition & Subtraction" component={AddSubtract}/>
        <Stack.Screen name="Multiplication" component={MultiplyDivide} />
        <Stack.Screen name='Your Results' component={ResultsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;