import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the hook for navigation

const A4Page = () => {
  const navigation = useNavigation(); // Initialize navigation hook

  const [selectedOptions, setSelectedOptions] = useState({});
  const [feedbacks, setFeedbacks] = useState(Array(5).fill(null));
  const [score, setScore] = useState(0); // State to track the user's score

  const questions = [
    {
      question: '1. Based on the video, What will the robot do if there is an obstacle ahead?',
      options: ['a. The robot will avoid the obstacle', 'b. The robot will crash on it'],
      correctAnswer: 'a. The robot will avoid the obstacle', 
    },
    {
      question: '2. Choose the most correct phrase for obstacle detection?',
      options: ['a. Seeing the obstacle and avoid it', 'b. Seeing the obstacle and destroy it'],
      correctAnswer: 'a. Seeing the obstacle and avoid it', 
    },
    {
      question: '3. Based on topic 0 of module 4, what help can you offer to the robot to avoid bumping into things?',
      options: ['a. Just drag them', 'b. Offer them obstacle detection'],
      correctAnswer: 'b. Offer them obstacle detection', 
    },
    {
      question: '4. Based on topic 0 of module 4, what obstacle detection can give to the robot?',
      options: ['a. the ability to fly', 'b. special eyes that can see things in its path'],
      correctAnswer: 'b. special eyes that can see things in its path', 
    },
    {
      question: '5. Based on topic 0 of module 4, what word that applies Turtlebyte can spot objects ahead?',
      options: ['a. obstacle detection', 'b. obstacle avoidance'],
      correctAnswer: 'a. obstacle detection', 
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
      navigation.navigate('Module5Topic0'); // Replace 'IVDPage' with the name of your target screen in your navigation stack
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
      <Text style={styles.title}>Module 4 - Knowledge Assessment</Text>
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
            onPress={() => navigation.navigate('Module4Topic0')}
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
    backgroundColor: '#9AD0C2',
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
    padding: 10,
    borderBottomWidth: 2,
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
    backgroundColor: '#2D9596',
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
    backgroundColor: '#2D9596',
  },
  proceedButton: {
    backgroundColor: '#2D9596',
  },
  navigationButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  closeIcon: {
    width: 30,
    height: 30,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 2,
  },
});

export default A4Page;
