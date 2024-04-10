import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the hook for navigation

const A2Page = () => {
  const navigation = useNavigation(); // Initialize navigation hook

  const [selectedOptions, setSelectedOptions] = useState({});
  const [feedbacks, setFeedbacks] = useState(Array(5).fill(null));
  const [score, setScore] = useState(0); // State to track the user's score

  const questions = [
    {
      question: '1. Based on the topic 2.2, what can the obstacle ahead card do?',
      options: ['a. Can avoid obstacle ahead', 'b. Shapes'],
      correctAnswer: 'a. Can avoid obsstacle ahead', 
    },
    {
      question: '2. Based on module 2, what do you tell computers when you use conditional statements?',
      options: ['a. To make Decisions', 'b. Play'],
      correctAnswer: 'a. To make Decisions', 
    },
    {
      question: '3. Based on module 2, In turtlebyte what do Obstacle Ahead and No Obstacle Ahead cards act like?',
      options: ['a. Conditions', 'b. Conditional Statement'],
      correctAnswer: 'b. Conditional Statement', 
    },
    {
      question: '4. Without an obstacle ahead card, What do you think may happen to the robot when theres an obstacle on its path?',
      options: ['a. The robot will fly', 'b. The robot will bump into the obstacle and may cause damage'],
      correctAnswer: 'b. The robot will bump into the obstacle and may cause damage', 
    },
    {
      question: '5. Based on module 2, what will a robot do if theres an obstacle on his path?',
      options: ['a. The robot will avoid the obstacle', 'b. The robot will transform'],
      correctAnswer: 'a. The robot will avoid the obstacle', 
    },
  ];

  const handleOptionSelect = (questionIndex, optionIndex) => {
    setSelectedOptions({ ...selectedOptions, [questionIndex]: optionIndex });
    const selectedOption = questions[questionIndex].options[optionIndex];
    const correctAnswer = questions[questionIndex].correctAnswer;
    const feedback =
      selectedOption === correctAnswer ? 'Correct!' : 'Wrong, please try again.';
    setFeedbacks((prevFeedbacks) => {
      const newFeedbacks = [...prevFeedbacks];
      newFeedbacks[questionIndex] = feedback;
      return newFeedbacks;
    });
    // Update score if the answer is correct
    if (selectedOption === correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const handleResetAnswers = () => {
    // Reset selected options, feedbacks, and score
    setSelectedOptions({});
    setFeedbacks(Array(5).fill(null));
    setScore(0);
  };

  const handleProceed = () => {
    // Check if the user can proceed to the next module
    if (score >= 3) {
      // Navigate to IVDPage
      navigation.navigate('Loop0Page'); // Replace 'IVDPage' with the name of your target screen in your navigation stack
    } else {
      // Alert the user that they need to score 3 or higher to proceed
      Alert.alert(
        'Score Required',
        'You need to score 3 or higher to proceed to the next module.',
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
      );
    }
  };

  // Check if all questions are answered
  const allQuestionsAnswered = Object.keys(selectedOptions).length === questions.length;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Module 2 - Knowledge Assessment</Text>
      <View style={styles.innerContainer}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {questions.map((q, index) => (
            <View key={index} style={styles.questionContainer}>
              <Text style={styles.question}>{q.question}</Text>
              {q.options.map((option, optionIndex) => (
                <TouchableOpacity
                  key={optionIndex}
                  style={[
                    styles.option,
                    selectedOptions[index] === optionIndex && styles.selectedOption,
                  ]}
                  onPress={() => handleOptionSelect(index, optionIndex)}
                  disabled={feedbacks[index] !== null} // Disable selecting options after feedback is given
                >
                  <Text style={styles.optionText}>{option}</Text>
                </TouchableOpacity>
              ))}
              {feedbacks[index] && (
                <Text
                  style={[
                    styles.feedback,
                    feedbacks[index] === 'Correct!' ? { color: '#00FF00' } : { color: '#FF0000' },
                  ]}
                >
                  {feedbacks[index]}
                </Text>
              )}
            </View>
          ))}
        </ScrollView>
        <TouchableOpacity
          style={[styles.button, allQuestionsAnswered ? null : styles.disabledButton]}
          onPress={handleResetAnswers}
          disabled={!allQuestionsAnswered}
        >
          <Text style={styles.buttonText}>Reset Answers</Text>
        </TouchableOpacity>
        <View style={styles.navigationButtonsContainer}>
          <TouchableOpacity
            style={[styles.navigationButton, styles.previousButton]}
            onPress={() => navigation.navigate('Obstacle1Page')}
          >
            <Text style={styles.navigationButtonText}>Previous</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.navigationButton, styles.proceedButton]}
            onPress={handleProceed}
            disabled={!allQuestionsAnswered}
          >
            <Text style={styles.navigationButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#98FB98',
  },
  innerContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '90%',
    marginTop: 20,
    maxHeight: '80%', // Limit the height of the inner container
  },
  scrollContainer: {
    flexGrow: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
    marginTop: 30,
  },
  questionContainer: {
    marginBottom: 20,
  },
  question: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  option: {
    fontSize: 16,
    color: '#000',
    marginLeft: 20,
    marginBottom: 10,
  },
  optionText: {
    fontSize: 16,
    color: '#000',
  },
  selectedOption: {
    backgroundColor: '#DDDDDD', // Add background color for selected option
  },
  feedback: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: '#AAAAAA', // Disable button color
  },
  navigationButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  navigationButton: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '48%', // Adjust button width if needed
  },
  previousButton: {
    backgroundColor: '#DDDDDD',
  },
  proceedButton: {
    backgroundColor: '#007BFF',
  },
  navigationButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default A2Page;
