import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import { Alert, Button } from 'react-native';
//import { useNavigation } from '@react-navigation/native';
import ResultsScreen from './resultScreen';
import { useNavigation } from '@react-navigation/native';

function AddSubtract() {
    const [num1, setNum1] = useState(5);
    const [num2, setNum2] = useState(3);
    const [operator, setOperator] = useState('+');
    const [answer, setAnswer] = useState('');
    const [questionNumber, setQuestionNumber] = useState(0);
    const [score, setScore] = useState(0);
    const navigation = useNavigation();
  
    const generateProblem = () => {
      if (questionNumber < 8) {
        const operators = ['+', '-'];
        const randomOperator = operators[Math.floor(Math.random() * operators.length)];
        const randomNum1 = Math.floor(Math.random() * 10);
        const randomNum2 = Math.floor(Math.random() * 10);
        setNum1(randomNum1);
        setNum2(randomNum2);
        setOperator(randomOperator);
        setAnswer('');
        setQuestionNumber(questionNumber + 1);

      } else {

        
        //Alert.alert('You have completed all 8 questions');
        navigation.navigate('Your Results', { score: score });

      }

      
    };
  
    const checkAnswer = () => {
        if (answer.trim()!==''){
        const expectedAnswer = operator === '+' ? num1 + num2 : num1 - num2;
        if (Number(answer) === expectedAnswer) {
          setScore(questionNumber);
          //Alert.alert('Correct!');
          generateProblem(); // move to the next question
        } else {
          //Alert.alert('Incorrect. Please try again.');
          generateProblem(); // move to the next question
        }
      }
        };
        
  
    useEffect(() => {
      generateProblem();
    }, []);
  
    return (
      <View style={styles.container}>
        <Text style={styles.questionNum}>Question {questionNumber}/8</Text>
        <Text style={styles.problem}>{num1} {operator} {num2} =</Text>
        <TextInput
          style={styles.answerInput}
          onChangeText={setAnswer}
          value={answer}
          keyboardType="numbers-and-punctuation"
          placeholder="Enter your answer here"
        />
        <TouchableOpacity onPress={checkAnswer} style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 100
    },
    problem: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    answerInput: {
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 10,
      marginBottom: 20,
      width: '80%',
      fontSize: 20,
    },
    button: {
      backgroundColor: '#007AFF',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginBottom: 10,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
    },
    questionNum: {
        fontSize: 20,
        marginBottom: 75,
    }
  });
  
  export default AddSubtract;