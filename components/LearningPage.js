import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Importing Topic pages
import ObstaclePage from './LearningPageModules/Module2Topic1'; 
import A0Page from './LearningPageModules/A0Page';
import A1Page from './LearningPageModules/A1Page';
import A2Page from './LearningPageModules/A2Page';
import A3Page from './LearningPageModules/A3Page';
import A4Page from './LearningPageModules/A4Page';
import A5Page from './LearningPageModules/A5Page';
import Module1Topic0 from './LearningPageModules/Module1Topic0';
import Module2Topic0 from './LearningPageModules/Module2Topic0';
import Module0Topic0 from './LearningPageModules/Module0Topic0';
import Module3Topic0 from './LearningPageModules/Module3Topic0';
import Module4Topic0 from './LearningPageModules/Module4Topic0';
import Module5Topic0 from './LearningPageModules/Module5Topic0';

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
  const [expandButtonIcon, setExpandButtonIcon] = useState(require('../assets/buttons/terminalPageButtons/unlockButton.png'));

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
      navigation.navigate('Module1Topic0');
    } else {
      Alert.alert('Module Locked', 'Please complete Module 0 first.');
    }
  };

  const handleModule2Click = () => {
    if (moduleCompleted1) {
      navigation.navigate('Module2Topic0');
    } else {
      Alert.alert('Module Locked', 'Please complete Module 1 first.');
    }
  };

  const handleModule3Click = () => {
    if (moduleCompleted2) {
      navigation.navigate('Module3Topic0');
    } else {
      Alert.alert('Module Locked', 'Please complete Module 2 first.');
    }
  };

  const handleModule4Click = () => {
    if (moduleCompleted3) {
      navigation.navigate('Module4Topic0');
    } else {
      Alert.alert('Module Locked', 'Please complete Module 3 first.');
    }
  };

  const handleModule5Click = () => {
    if (moduleCompleted4) {
      navigation.navigate('Module5Topic0');
    } else {
      Alert.alert('Module Locked', 'Please complete Module 4 first.');
    }
  };

  const handleExpandAllModules = () => {
    if (moduleExpanded0 || moduleExpanded1 || moduleExpanded2 || moduleExpanded3 || moduleExpanded4 || moduleExpanded5) {
      setModuleExpanded0(false);
      setModuleExpanded1(false);
      setModuleExpanded2(false);
      setModuleExpanded3(false);
      setModuleExpanded4(false);
      setModuleExpanded5(false);
      setExpandButtonIcon(require('../assets/buttons/terminalPageButtons/lockButton.png'));
    } else {
      setModuleExpanded0(true);
      setModuleExpanded1(true);
      setModuleExpanded2(true);
      setModuleExpanded3(true);
      setModuleExpanded4(true);
      setModuleExpanded5(true);
      setExpandButtonIcon(require('../assets/buttons/terminalPageButtons/unlockButton.png'));
    }
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
            <Text style={styles.boxText}>Learning Modules</Text>
          </View>
          <ScrollView style={styles.innerScrollView}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity 
                style={styles.button} 
                onPress={() => navigation.navigate('Module0Topic0')}
                disabled={moduleCompleted0}
              >
                <Text style={styles.buttonText}>Module 0: What is Programming?</Text>
              </TouchableOpacity>
              {moduleExpanded0 && (
                <View>
                  <TouchableOpacity style={styles.subButton} onPress={() => navigation.navigate('Module0Topic0')}>
                    <Text style={styles.subButtonText}>Topic 0: Introduction to Programming</Text>
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
                  <TouchableOpacity style={styles.subButton} onPress={() => navigation.navigate('Module1Topic0')}>
                    <Text style={styles.subButtonText}>Topic 0: Introduction to variable declaration</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.subButton} onPress={() => navigation.navigate('Module1Topic1')}>
                    <Text style={styles.subButtonText}>Topic 1: Robot Cardinal Movement</Text>
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
                  <TouchableOpacity style={styles.subButton} onPress={() => navigation.navigate('Module2Topic0')}>
                    <Text style={styles.subButtonText}>Topic 0: What is Conditional Statement?</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.subButton} onPress={() => navigation.navigate('Module2Topic1')}>
                    <Text style={styles.subButtonText}>Topic 1: How to Use Conditional Statement</Text>
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
                  <TouchableOpacity style={styles.subButton} onPress={() => navigation.navigate('Module3Topic0')}>
                    <Text style={styles.subButtonText}>Topic 0: Importance of Looping</Text>
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
                  <TouchableOpacity style={styles.subButton} onPress={() => navigation.navigate('Module4Topic0')}>
                    <Text style={styles.subButtonText}>Topic 0: What is Obstacle Detection</Text>
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
                  <TouchableOpacity style={styles.subButton} onPress={() => navigation.navigate('Module5Topic0')}>
                    <Text style={styles.subButtonText}>Topic 0: Introduction of Polygons</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.subButton} onPress={() => navigation.navigate('A5Page')}>
                    <Text style={styles.subButtonText}>Knowledge Assessment</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </ScrollView>
          
        </View>

        <View>
          <TouchableOpacity onPress={handleExpandAllModules}>
            <Image
              source={expandButtonIcon}
              style={styles.expandButton}/>
          </TouchableOpacity>
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
    fontSize: 20,
    fontFamily: 'RobotoMono-Bold',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  whiteBox: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    width: 380,
    height: 620,
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
    borderRadius: 10,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'left',
    fontSize: 18,
    fontFamily: 'RobotoMono-Bold',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  subButton: {
    backgroundColor: '#2d6096',
    padding: 10,
    marginVertical: 5,
    marginLeft: 20,
    borderRadius: 5,
  },
  subButtonText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'RobotoMono-Bold',
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
    height: 50,
    width: 50,
  },
  expandButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'RobotoMono-Bold',
    textAlign: 'center',
  },
  unlockButtonContainer: {
    marginBottom: 1
  },

});

export default LearningPage;