import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';

function HomeScreen({ navigation }) {
  const handleAddSubPress = () => {
    navigation.navigate('AddSubProblems');
  };
  const handleMulDivPress = () => {
    navigation.navigate('MulDivProblems')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello,</Text>
      <Text style={styles.subtitle}>Welcome to Math Practice</Text>
      <Text>...</Text>
      <Text>Select an option below to get started</Text>
      <TouchableOpacity onPress={handleAddSubPress} style={styles.button}>
        <Text style={styles.buttonText}>Addition & Subtraction</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleMulDivPress} style={styles.button}>
        <Text style={styles.buttonText}>Multiplication & Division</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

//ADDITION AND SUBTRACTION SCREEN 

function AddProblemsScreen() {
  
  const [num1, setNum1] = useState(5);
  const [num2, setNum2] = useState(3);
  const [operator, setOperator] = useState('+');
  const [answer, setAnswer] = useState('');

  const generateProblem = () => {
    const operators = ['+', '-'];
    const randomOperator = operators[Math.floor(Math.random() * operators.length)];
    const randomNum1 = Math.floor(Math.random() * 10);
    const randomNum2 = Math.floor(Math.random() * 10);
    setNum1(randomNum1);
    setNum2(randomNum2);
    setOperator(randomOperator);
    setAnswer('');
  };

  const checkAnswer = () => {
    const expectedAnswer = operator === '+' ? num1 + num2 : num1 - num2;
    if (Number(answer) === expectedAnswer) {
      Alert.alert('Correct!');
    } else {
      Alert.alert('Incorrect. Please try again.');
    }
  };

  useEffect(() => {
    generateProblem();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.problem}>{num1} {operator} {num2} =</Text>
      <TextInput
        style={styles.answerInput}
        onChangeText={setAnswer}
        value={answer}
        keyboardType="numbers-and-punctuation"
        placeholder="Enter your answer here"
      />
      <TouchableOpacity onPress={checkAnswer} style={addStyles.button}>
        <Text style={addStyles.buttonText}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={generateProblem} style={addStyles.button}>
        <Text style={addStyles.buttonText}>Next Problem</Text>
      </TouchableOpacity>
    </View>
  );
}

const addStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
});

//MULTIPLICATION AND DIVISION SCREEN

function MulProblemsScreen() {
  const navigation = useNavigation();

  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState({});

  const handleAnswerChange = (value) => {
    setAnswers({ ...answers, [currentQuestion]: value });
  };

  useEffect(() => {
    if (currentQuestion > 5) {
      navigation.navigate('Results', { answers });
    }
  }, [currentQuestion]);

  const renderQuestion = (questionNumber) => {
    switch (questionNumber) {
      case 1:
        return (
          <View>
            <Text>What is 2 + 2?</Text>
            <TextInput
              keyboardType="numbers-and-punctuation"
              onChangeText={handleAnswerChange}
            />
          </View>
        );
      case 2:
        return (
          <View>
            <Text>What is 5 - 3?</Text>
            <TextInput
              keyboardType="numbers-and-punctuation"
              onChangeText={handleAnswerChange}
            />
          </View>
        );
      case 3:
        return (
          <View>
            <Text>What is 4 + 6?</Text>
            <TextInput
              keyboardType="numbers-and-punctuation"
              onChangeText={handleAnswerChange}
            />
          </View>
        );
      case 4:
        return (
          <View>
            <Text>What is 9 - 2?</Text>
            <TextInput
              keyboardType="numbers-and-punctuation"
              onChangeText={handleAnswerChange}
            />
          </View>
        );
      case 5:
        return (
          <View>
            <Text>What is 7 + 3?</Text>
            <TextInput
              keyboardType="numbers-and-punctuation"
              onChangeText={handleAnswerChange}
            />
          </View>
        );
    }
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <View>
      {renderQuestion(currentQuestion)}
      <TouchableOpacity onPress={handleNextQuestion}>
        <Text>Next Question</Text>
      </TouchableOpacity>
    </View>
  );
}






//RESULTS SCREEN

function getResults() {
  return (
    <View>
      <Text>Your Results</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddSubProblems" component={AddProblemsScreen} />
        <Stack.Screen name="MulDivProblems" component={MulProblemsScreen} />
        <Stack.Screen name="Results" component={getResults} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },

title: {
  fontSize: 35,
},

subtitle: {
  fontSize: 20,
},
  button: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#007AFF',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 25,
  },
});