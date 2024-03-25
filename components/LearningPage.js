import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProgrammingPage from './LearningPageModules/ProgrammingPage'; // Import the ProgrammingPage component

// Importing Topic pages
import ForwardPage from './LearningPageModules/ForwardPage';
import BackwardPage from './LearningPageModules/BackwardPage';
import LeftPage from './LearningPageModules/LeftPage';
import RightPage from './LearningPageModules/RightPage';
import LoopingPage from './LearningPageModules/LoopingPage'; // Import the LoopingPage component
import ConditionalPage from './LearningPageModules/ConditionalPage'; // Import the ConditionalPage component
import ObstaclePage from './LearningPageModules/ObstaclePage'; // Import the ObstaclePage component
import Obstacle1Page from './LearningPageModules/Obstacle1Page'; // Import the Obstacle1Page component
import Module4Page from './LearningPageModules/Module4Page'; // Import the Module4Page component
import SquarePage from './LearningPageModules/SquarePage'; // Import the SquarePage component

const LearningPage = () => {
  const navigation = useNavigation();
  const [moduleExpanded0, setModuleExpanded0] = useState(false);
  const [moduleExpanded1, setModuleExpanded1] = useState(false);
  const [moduleExpanded2, setModuleExpanded2] = useState(false);
  const [moduleExpanded3, setModuleExpanded3] = useState(false);
  const [moduleExpanded4, setModuleExpanded4] = useState(false);
  const [moduleExpanded5, setModuleExpanded5] = useState(false);

  const toggleModule0 = () => {
    // Navigate to ProgrammingPage when Module 0 is expanded
    if (!moduleExpanded0) {
      navigation.navigate('ProgrammingPage');
    }
    setModuleExpanded0(!moduleExpanded0);
  };
  const toggleModule1 = () => {
    setModuleExpanded1(!moduleExpanded1);
  };
  const toggleModule2 = () => {
    setModuleExpanded2(!moduleExpanded2);
  };
  const toggleModule3 = () => {
    // Navigate to LoopingPage when Module 3 is expanded
    if (!moduleExpanded3) {
      navigation.navigate('LoopingPage');
    }
    setModuleExpanded3(!moduleExpanded3);
  };
  const toggleModule4 = () => {
    // Navigate to Module4Page when Module 4 is expanded
    if (!moduleExpanded4) {
      navigation.navigate('Module4Page');
    }
    setModuleExpanded4(!moduleExpanded4);
  };
  const toggleModule5 = () => {
    setModuleExpanded5(!moduleExpanded5);
  };

  const handleCloseButton = () => {
    console.log('Close button pressed');
    navigation.navigate('StartUpPage');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleCloseButton} style={styles.closeButton}>
        <Image
          source={require('../assets/buttons/terminalPageButtons/close.png')}
          style={styles.closeIcon}
        />
      </TouchableOpacity>
      <View style={styles.whiteBox}>
        <View style={[styles.boxContainer, { position: 'absolute', top: -30, zIndex: 1, left: '10%' }]}>
          <Text style={styles.boxText}>Robot Program Modules</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleModule0}>
            <Text style={styles.buttonText}>Module 0: What is Programming?</Text>
          </TouchableOpacity>
          {moduleExpanded0 && (
            <View>
              {/* Content for Module 0 */}
            </View>
          )}
          <TouchableOpacity style={styles.button} onPress={toggleModule1}>
            <Text style={styles.buttonText}>Module 1: Learn the Basic Movements of the Robot</Text>
          </TouchableOpacity>
          {moduleExpanded1 && (
            <View>
              <TouchableOpacity style={styles.subButton} onPress={() => navigation.navigate('ForwardPage')}>
                <Text style={styles.subButtonText}>Topic 1: Make the Robot Go Forward!</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.subButton} onPress={() => navigation.navigate('BackwardPage')}>
                <Text style={styles.subButtonText}>Topic 2: Make the Robot Go Backward!</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.subButton} onPress={() => navigation.navigate('LeftPage')}>
                <Text style={styles.subButtonText}>Topic 3: Make the Robot Turn Left!</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.subButton} onPress={() => navigation.navigate('RightPage')}>
                <Text style={styles.subButtonText}>Topic 4: Make the Robot Turn Right!</Text>
              </TouchableOpacity>
            </View>
          )}
          <TouchableOpacity style={styles.button} onPress={toggleModule2}>
            <Text style={styles.buttonText}>Module 2: Learning Conditional Statements</Text>
          </TouchableOpacity>
          {moduleExpanded2 && (
            <View>
              <TouchableOpacity style={styles.subButton} onPress={() => navigation.navigate('ConditionalPage')}>
                <Text style={styles.subButtonText}>Topic 1: Introduction to Conditional Statements</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.subButton} onPress={() => navigation.navigate('ObstaclePage')}>
                <Text style={styles.subButtonText}>Topic 2: Obstacle Detection Part 1</Text>
              </TouchableOpacity>
              {/* Update Topic 3 onPress */}
              <TouchableOpacity style={styles.subButton} onPress={() => navigation.navigate('Obstacle1Page')}>
                <Text style={styles.subButtonText}>Topic 3: Obstacle Detection Part 2</Text>
              </TouchableOpacity>
            </View>
          )}
          <TouchableOpacity style={styles.button} onPress={toggleModule3}>
            <Text style={styles.buttonText}>Module 3: What is Looping?</Text>
          </TouchableOpacity>
          {moduleExpanded3 && (
            <View>
              {/* Content for Module 3 */}
            </View>
          )}
          <TouchableOpacity style={styles.button} onPress={toggleModule4}>
            <Text style={styles.buttonText}>Module 4: Avoiding Objects with Obstacle Detection</Text>
          </TouchableOpacity>
          {moduleExpanded4 && (
            <View>
              {/* Content for Module 4 */}
              <TouchableOpacity style={styles.subButton} onPress={() => navigation.navigate('Module4Page')}>
                <Text style={styles.subButtonText}>Topic 1: Obstacle Detection</Text>
              </TouchableOpacity>
              {/* Add more topics for Module 4 if needed */}
            </View>
          )}
          <TouchableOpacity style={styles.button} onPress={toggleModule5}>
            <Text style={styles.buttonText}>Module 5: Creating Polygons using Robot Movements</Text>
          </TouchableOpacity>
          {moduleExpanded5 && (
            <View>
              {/* Content for Module 5 */}
              <TouchableOpacity style={styles.subButton} onPress={() => navigation.navigate('SquarePage')}>
                <Text style={styles.subButtonText}>Topic 1: Draw a Square</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9AD0C2',
  },
  boxContainer: {
    backgroundColor: '#265073',
    padding: 10,
    borderRadius: 10,
    width: 300,
    height: 50,
    borderWidth: 1,
  },
  boxText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  whiteBox: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    width: 380,
    height: 700,
    margin: 10,
    borderWidth: 1,
    position: 'relative',
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: '#2D9596',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'left',
    fontSize: 16,
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  subButton: {
    backgroundColor: '#4EA1D3',
    padding: 10,
    marginVertical: 5,
    marginLeft: 20,
    borderRadius: 5,
    borderWidth: 1,
  },
  subButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 2,
  },
});

export default LearningPage;
