import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Importing Topic pages
import ForwardPage from './LearningPageModules/ForwardPage';
import BackwardPage from './LearningPageModules/BackwardPage';
import LeftPage from './LearningPageModules/LeftPage';
import RightPage from './LearningPageModules/RightPage';
import LoopingPage from './LearningPageModules/LoopingPage';
import ConditionalPage from './LearningPageModules/ConditionalPage';
import ObstaclePage from './LearningPageModules/ObstaclePage'; 
import Obstacle1Page from './LearningPageModules/Obstacle1Page'; 
import Module4Page from './LearningPageModules/Module4Page'; 
import SquarePage from './LearningPageModules/SquarePage'; 
import A0Page from './LearningPageModules/A0Page';
import A1Page from './LearningPageModules/A1Page';
import A2Page from './LearningPageModules/A2Page';
import A3Page from './LearningPageModules/A3Page';
import A4Page from './LearningPageModules/A4Page';
import A5Page from './LearningPageModules/A5Page';
import IVDPage from './LearningPageModules/IVDPage';
import Con0Page from './LearningPageModules/Con0Page';
import Prog0Page from './LearningPageModules/Prog0Page';
import Loop0Page from './LearningPageModules/Loop0Page';
import Obs0Page from './LearningPageModules/Obs0Page';
import Pol0Page from './LearningPageModules/Pol0Page';

const LearningPage = () => {
  const navigation = useNavigation();
  const scrollViewRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);
  const [moduleCompleted0, setModuleCompleted0] = useState(false);
  const [moduleCompleted1, setModuleCompleted1] = useState(false);
  const [moduleCompleted2, setModuleCompleted2] = useState(false);
  const [moduleCompleted3, setModuleCompleted3] = useState(false);
  const [moduleCompleted4, setModuleCompleted4] = useState(false);
  const [moduleCompleted5, setModuleCompleted5] = useState(false);
  const [moduleExpanded0, setModuleExpanded0] = useState(false);
  const [moduleExpanded1, setModuleExpanded1] = useState(false);
  const [moduleExpanded2, setModuleExpanded2] = useState(false);
  const [moduleExpanded3, setModuleExpanded3] = useState(false);
  const [moduleExpanded4, setModuleExpanded4] = useState(false);
  const [moduleExpanded5, setModuleExpanded5] = useState(false);

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd();
    }
  }, [contentHeight]);

  const handleCloseButton = () => {
    console.log('Close button pressed');
    navigation.navigate('StartUpPage');
  };

  const handleModule1Click = () => {
    if (moduleCompleted0) {
      navigation.navigate('IVDPage');
    } else {
      Alert.alert('Module Locked', 'Please complete Module 0 first.');
    }
  };

  const handleModule2Click = () => {
    if (moduleCompleted1) {
      navigation.navigate('Con0Page');
    } else {
      Alert.alert('Module Locked', 'Please complete Module 1 first.');
    }
  };

  const handleModule3Click = () => {
    if (moduleCompleted2) {
      navigation.navigate('Loop0Page');
    } else {
      Alert.alert('Module Locked', 'Please complete Module 2 first.');
    }
  };

  const handleModule4Click = () => {
    if (moduleCompleted3) {
      navigation.navigate('Obs0Page');
    } else {
      Alert.alert('Module Locked', 'Please complete Module 3 first.');
    }
  };

  const handleModule5Click = () => {
    if (moduleCompleted4) {
      navigation.navigate('Pol0Page');
    } else {
      Alert.alert('Module Locked', 'Please complete Module 4 first.');
    }
  };

  const handleExpandAllModules = () => {
    setModuleExpanded0(true);
    setModuleExpanded1(true);
    setModuleExpanded2(true);
    setModuleExpanded3(true);
    setModuleExpanded4(true);
    setModuleExpanded5(true);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
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
          <ScrollView style={styles.innerScrollView}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity 
                style={styles.button} 
                onPress={() => navigation.navigate('Prog0Page')}
                disabled={moduleCompleted0}
              >
                <Text style={styles.buttonText}>Module 0: What is Programming?</Text>
              </TouchableOpacity>
              {moduleExpanded0 && (
                <View>
                  <TouchableOpacity style={styles.subButton} onPress={() => navigation.navigate('Prog0Page')}>
                    <Text style={styles.subButtonText}>Topic 0: Importance of Programming</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.subButton} onPress={() => navigation.navigate('ProgrammingPage')}>
                    <Text style={styles.subButtonText}>Topic 1: Introduction to Programming</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.subButton} onPress={() => navigation.navigate('A0Page')}>
                    <Text style={styles.subButtonText}>Knowledge Assessment</Text>
                  </TouchableOpacity>
                </View>
              )}
              <TouchableOpacity 
                style={styles.button} 
                onPress={handleModule1Click}
                disabled={!moduleCompleted0}
              >
                <Text style={styles.buttonText}>Module 1: Learn the Basic Movements of the Robot</Text>
              </TouchableOpacity>
              {moduleExpanded1 && (
                <View>
                  <TouchableOpacity style={styles.subButton} onPress={() => navigation.navigate('IVDPage')}>
                    <Text style={styles.subButtonText}>Topic 0: Introduction to variable declaration</Text>
                  </TouchableOpacity>
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
                  <TouchableOpacity style={styles.subButton} onPress={() => navigation.navigate('A1Page')}>
                    <Text style={styles.subButtonText}>Knowledge Assessment</Text>
                  </TouchableOpacity>
                </View>
              )}
              <TouchableOpacity 
                style={styles.button} 
                onPress={handleModule2Click}
                disabled={!moduleCompleted1}
              >
                <Text style={styles.buttonText}>Module 2: Learning Conditional Statements</Text>
              </TouchableOpacity>
              {moduleExpanded2 && (
                <View>
                  <TouchableOpacity style={styles.subButton} onPress={() => navigation.navigate('Con0Page')}>
                    <Text style={styles.subButtonText}>Topic 0: What is Conditional Statement?</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.subButton} onPress={() => navigation.navigate('ConditionalPage')}>
                    <Text style={styles.subButtonText}>Topic 1: Introduction to Conditional Statements</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.subButton} onPress={() => navigation.navigate('ObstaclePage')}>
                    <Text style={styles.subButtonText}>Topic 2: Obstacle Detection part 1</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.subButton} onPress={() => navigation.navigate('Obstacle1Page')}>
                    <Text style={styles.subButtonText}>Topic 3: Obstacle Detection part 2</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.subButton} onPress={() => navigation.navigate('A2Page')}>
                    <Text style={styles.subButtonText}>Knowledge Assessment</Text>
                  </TouchableOpacity>
                </View>
              )}
              <TouchableOpacity 
                style={styles.button} 
                onPress={handleModule3Click}
                disabled={!moduleCompleted2}
              >
                <Text style={styles.buttonText}>Module 3: What is Looping?</Text>
              </TouchableOpacity>
              {moduleExpanded3 && (
                <View>
                  <TouchableOpacity style={styles.subButton} onPress={() => navigation.navigate('Loop0Page')}>
                    <Text style={styles.subButtonText}>Topic 0: The usefullness of Looping</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.subButton} onPress={() => navigation.navigate('LoopingPage')}>
                    <Text style={styles.subButtonText}>Topic 1: How to use Looping</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.subButton} onPress={() => navigation.navigate('A3Page')}>
                    <Text style={styles.subButtonText}>Knowledge Assessment</Text>
                  </TouchableOpacity>
                </View>
              )}
              <TouchableOpacity 
                style={styles.button} 
                onPress={handleModule4Click}
                disabled={!moduleCompleted3}
              >
                <Text style={styles.buttonText}>Module 4: Avoiding Objects with Obstacle Detection</Text>
              </TouchableOpacity>
              {moduleExpanded4 && (
                <View>
                  <TouchableOpacity style={styles.subButton} onPress={() => navigation.navigate('Obs0Page')}>
                    <Text style={styles.subButtonText}>Topic 0: What is Obstacle Detection</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.subButton} onPress={() => navigation.navigate('Module4Page')}>
                    <Text style={styles.subButtonText}>Topic 1: Understanding Obstacle Detection</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.subButton} onPress={() => navigation.navigate('A4Page')}>
                    <Text style={styles.subButtonText}>Knowledge Assessment</Text>
                  </TouchableOpacity>
                </View>
              )}
              <TouchableOpacity 
                style={styles.button} 
                onPress={handleModule5Click}
                disabled={!moduleCompleted4}
              >
                <Text style={styles.buttonText}>Module 5: Creating Polygons using Robot Movements</Text>
              </TouchableOpacity>
              {moduleExpanded5 && (
                <View>
                  <TouchableOpacity style={styles.subButton} onPress={() => navigation.navigate('Pol0Page')}>
                    <Text style={styles.subButtonText}>Topic 0: Introduction of Polygons</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.subButton} onPress={() => navigation.navigate('SquarePage')}>
                    <Text style={styles.subButtonText}>Topic 1: Making Square Polygon using Robot</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.subButton} onPress={() => navigation.navigate('A5Page')}>
                    <Text style={styles.subButtonText}>Knowledge Assessment</Text>
                  </TouchableOpacity>
                </View>
              )}
              <TouchableOpacity 
                style={styles.expandButton} 
                onPress={handleExpandAllModules}
              >
                <Text style={styles.expandButtonText}>Expand All Modules</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
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
  closeIcon: {
    width: 30,
    height: 30,
  },
  innerScrollView: {
    height: 600, // Set the height to control scrolling
  },
  expandButton: {
    backgroundColor: '#265073',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
  },
  expandButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default LearningPage;
