import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Video from 'react-native-video';

const Module4Page = () => {
  const navigation = useNavigation();

  const navigateToObs0Page = () => {
    navigation.navigate('Obs0Page');
  };

  const navigateToA4Page = () => {
    navigation.navigate('A4Page');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Module 4</Text>
      <View style={styles.innerContainer}>
        <Text style={styles.innerTitle}>4.1 - Avoiding Objects with Obstacle Detection</Text>
        <View style={styles.videoContainer}>
          <Video
            source={require('../../assets/Video/detection.mp4')}
            style={styles.video}
            resizeMode="contain"
            controls={true}
          />
        </View>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.scrollText}>
            Imagine you're walking down the sidewalk, and suddenly you spot a big rock in your path. What would you do? You'd probably move to the side to avoid bumping into it, right? That's exactly what robots do when they're moving around! Robots are like little explorers, and they need to be careful not to bump into things just like we do. So, they have special sensors that act like their eyes and ears. These sensors help the robot see objects, just like you noticed the rock on the sidewalk. 
          </Text>
          <Text style={styles.scrollText}>
            Now, let's say the robot is rolling along and it spots a chair in front of it. The robot doesn't want to crash into the chair, so it needs to figure out how to go around it. This is called obstacle avoidance! The robot might decide to move to the left or right to avoid the chair. It uses its sensors to 'see' the chair and then decides on the best way to move around it, just like you decide how to avoid obstacles.
          </Text>
        </ScrollView>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={navigateToObs0Page}>
          <Text>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={navigateToA4Page}>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#98FB98',
    paddingHorizontal: 15,
    paddingVertical: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
    alignSelf: 'flex-start',
  },
  innerContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    width: '100%',
    borderRadius: 10,
    marginBottom: 20,
  },
  innerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  videoContainer: {
    aspectRatio: 4 / 3,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  video: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  scrollView: {
    flex: 1,
    marginBottom: 10,
  },
  scrollText: {
    fontSize: 16,
    color: 'black',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 5,
  },
});

export default Module4Page;
