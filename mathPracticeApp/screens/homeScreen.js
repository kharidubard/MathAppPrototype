import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';


function HomeScreen() {

    const navigation = useNavigation();
    const [score, setScore] = useState(0);
  const handleAddSubtractPress = () => {
    navigation.navigate('Addition & Subtraction');
  };

  const handleMultiplyDividePress = () => {
    navigation.navigate('Multiplication');
  };

  const handleyourResultsPress = () => {
    navigation.navigate('Your Results', {score: 0});
  };

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Mathletics,</Text>
        <Text style={styles.subTitle}>select an option below to start</Text>
        <TouchableOpacity style={styles.button} onPress={handleAddSubtractPress}>
        <Text style={styles.buttonText}>Addition & Subtraction</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleMultiplyDividePress}>
        <Text style={styles.buttonText}>Multiplication</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleyourResultsPress}>
        <Text style={styles.buttonText}>Results</Text>
      </TouchableOpacity>
      <Image source={require('../images/mathSymbols.png')} style={styles.image} />
      
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 150,
      backgroundColor: 'white'
    },
    button: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#2196F3',
        borderRadius: 5,
      },
      buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
      },
      title: {
        marginTop: 140,
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
      },
      subTitle: {
        fontStyle: 'italic',
        margin: 10,
      },
      image: {
        width: 200,
        height: 200,
        marginTop: 30,
      }
  });

  export default HomeScreen;