import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { Alert } from 'react-native';


function ResultsScreen() {

    const route = useRoute();
    const { score } = route.params;
    const navigation = useNavigation();

    const handlehomeScreenPress = () => {
        navigation.navigate('Mathletics - Home');
      };

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Your Score:</Text>
        <Text style={styles.quizScore}>{score}/8</Text>
        <TouchableOpacity style={styles.button} onPress={handlehomeScreenPress}>
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
      paddingBottom: 350
    },
    title: {
      fontSize: 25,
      fontWeight: 'bold',
      marginBottom: 2,
      marginTop: 100,
    },
    quizScore: {
      fontSize: 40,
      fontWeight: 'bold',
      color: '#007AFF',
    },
    button: {
        marginTop: 80,
        padding: 10,
        backgroundColor: '#2196F3',
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,  
    }
  });
  
  export default ResultsScreen;