import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Video from 'react-native-video';
import gifVideo from '../../assets/Video/codingRobot.mp4';
import IntroVideo from '../../assets/Video/IntroProgramming.mp4';
import VideoPlayer from 'react-native-video-controls';

const Module0Topic0 = () => {
  const navigation = useNavigation();

  const navigateToA0Page = () => {
    navigation.navigate('A0Page');
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
        <Text style={styles.title}>Module 0: What is Programming in today's world?</Text>
          <Video
            source={gifVideo}
            style={styles.aniVideo}
            resizeMode="cover"
            repeat={true}
          />
          <View style={styles.contentContainer}>
            <Text style={styles.content}>
              In today's world, programming is like giving instructions to a robot or a computer. Just like how we tell our toys what to do, programmers use special languages called code to tell computers how to do things.
            </Text>
            <Text style={styles.content}>
              Imagine you have a robot friend called Turtlebyte. You can teach your robot friend to do all sorts of fun and helpful tasks, like playing games, drawing shapes, or even helping with homework! That's what programming is all about making our robot friends, like computers and cellphones, do cool stuff for us.
            </Text>
            <Text style={styles.videoTitle}>Watch Video</Text>
            <View>
            <View style={styles.supplementalVideo}> 
            <VideoPlayer 
            source={IntroVideo} 
            paused={true}
            showOnStart={false}
            disableBack
            disableVolume
            />
            </View>
            </View>
            
          </View>
        </ScrollView>
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={navigateToA0Page}>
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
  aniVideo: {
    width: '70%',
    aspectRatio: 1.0,
  },
  video: {
    width: '100%',
    aspectRatio: 1.0,
  },
  supplementalVideo: {
    aspectRatio: 1.0,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: 10,
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

export default Module0Topic0;
