import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Video from 'react-native-video';
import gifVideo from '../../assets/Video/rain.mp4';
import VideoPlayer from 'react-native-video-controls';

const Module2Topic0 = () => {
  const navigation = useNavigation();

  const navigateToNextPage = () => {
    navigation.navigate('Module2Topic1');
  };

  const handleCloseButton = () => {
    console.log('Close button pressed');
    navigation.navigate('LearningPage');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleCloseButton} style={styles.closeButton}>
          <Image
            source={require('../../assets/buttons/terminalPageButtons/close.png')}
            style={styles.closeIcon}
          />
        </TouchableOpacity>
      <View style={styles.innerContainer}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Module 2: What is Conditional Statement?</Text>
        <Video
            source={gifVideo}
            style={styles.video}
            resizeMode="cover"
            repeat={true}
          />
          <View style={styles.contentContainer}>
            <Text style={styles.content}>
              Let's imagine you have a robot friend named Turtlebyte. Turtlebyte loves going outside, but only if the sun is shining. So, you tell Turtlebyte, "If the sun is shining, go play outside. But if it's raining, stay indoors and read a book."
            </Text>
            <Text style={styles.content}>
              So, when you use a conditional statement in programming, you're telling the computer to make decisions, just like Turtlebyte does when he decides whether to play outside or read a book.
            </Text>
            <Text style={styles.videoTitle}>Watch Video</Text>
            <View style={styles.supplementalVideo}>
              <VideoPlayer
                source={require('../../assets/Video/IntroToConditionals.mp4')}
                paused={true}
                showOnStart={false}
                disableBack
                disableVolume
              />
            </View> 
          </View>
        </ScrollView>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={navigateToNextPage}>
        <Image
            source={require('../../assets/buttons/terminalPageButtons/nextButton.png')}
            style={styles.button}
          />
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
    backgroundColor: '#9AD0C2',
  },
  innerContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    width: '90%',
    height: '85%',
    borderWidth: 2,
    marginTop: 20,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'RobotoMono-Bold',
    fontSize: 20,
    marginBottom: 10,
    color: 'white',
    alignSelf: 'center',
    backgroundColor: '#265073',
    padding: 20,
    borderRadius: 10,
    width: 320,
  },
  contentContainer: {
    marginTop: 10,
  },
  content: {
    fontFamily: 'RobotoMono-Bold',
    fontSize: 16,
    color: '#000',
    marginBottom: 20,
  },
  video: {
    width: '70%',
    aspectRatio: 1.0,
  },
  supplementalVideo: {
    aspectRatio: 1.0,
    width: '100%',
    backgroundColor: 'black',
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end', // Adjusted alignment
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  button: {
    height: 50,
    width: 50,
  },
  buttonText:{
    fontFamily: 'RobotoMono-Bold',
    color: 'white',
    textAlign: 'center',
  },
  videoTitle:{
    fontFamily: 'RobotoMono-Bold',
    color: 'black',
    fontSize: 20,
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

export default Module2Topic0;
