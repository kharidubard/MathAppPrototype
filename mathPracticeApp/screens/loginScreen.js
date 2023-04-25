import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import { Alert, Button } from 'react-native';
//import { useNavigation } from '@react-navigation/native';
import ResultsScreen from './resultScreen';
import { useNavigation } from '@react-navigation/native';

function LoginScreen() {

    const navigation = useNavigation();


    
    const handleLogin = () => {
        navigation.navigate("Mathletics - Home");
      };

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    
    

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome, Login</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={setPassword}
            value={password}
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  };
 
  return (
    <View>
        <LoginForm />
    </View>
  )
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f2f2f2',
      padding: 50,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      marginTop: 200,
    },
    inputContainer: {
      width: '80%',
      marginBottom: 20,
    },
    input: {
      backgroundColor: '#fff',
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
    },
    button: {
      backgroundColor: '#2196F3',
      borderRadius: 5,
      padding: 10,
      marginTop: 50
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
  
 
  export default LoginScreen;