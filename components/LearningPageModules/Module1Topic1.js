import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Video from 'react-native-video';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import VideoPlayer from 'react-native-video-controls';

const Module1Topic1 = () => {
  const navigation = useNavigation();

  const navigateToPreviousPage= () => {
    navigation.navigate('Module1Topic0');
  };

  const navigateToNextPage = () => {
    navigation.navigate('A1Page');
  };

  const handleCloseButton = () => {
    navigation.navigate('LearningPage'); // Navigate to the desired page upon exit
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
      <ScrollView>
      <Text style={styles.title}>Topic 1: Make the Robot Move Forward</Text>
        <View style={styles.videoContainer}>
          <VideoPlayer
            source={require('../../assets/Video/FP.mp4')}
            paused={true}
            showOnStart={false}
            disableBack
            disableVolume
          />
        </View>
      <Text style={styles.title}>Topic 2: Make the Robot Move Backward</Text>
        <View style={styles.videoContainer}>
          <VideoPlayer
            source={require('../../assets/Video/BP.mp4')}
            paused={true}
            showOnStart={false}
            disableBack
            disableVolume
          />
        </View>
        <Text style={styles.title}>Topic 3: Make the Robot Turn Right</Text>
        <View style={styles.videoContainer}>
          <VideoPlayer
            source={require('../../assets/Video/RP.mp4')}
            paused={true}
            showOnStart={false}
            disableBack
            disableVolume
          />
        </View>
        <Text style={styles.title}>Topic 4: Make the Robot Turn Left</Text>
        <View style={styles.videoContainer}>
          <VideoPlayer
            source={require('../../assets/Video/LP.mp4')}
            paused={true}
            showOnStart={false}
            disableBack
            disableVolume
          />
        </View>
        </ScrollView>
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={navigateToPreviousPage}>
        <Image
            source={require('../../assets/buttons/terminalPageButtons/previousButton.png')}
            style={styles.button}
          />
        </TouchableOpacity>
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
    paddingHorizontal: 15,
    paddingVertical: 30,
  },
  title: {
    backgroundColor: '#265073',
    fontSize: 16,
    fontFamily: 'RobotoMono-Bold',
    marginBottom: 10,
    color: 'white',
    alignSelf: 'center',
    padding: 20,
    borderRadius: 10,
    width: 320,
    textAlign: 'center'
  },
  innerContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    width: '100%',
    borderRadius: 20,
    marginBottom: 20,
    borderWidth: 2,
  },
  videoContainer: {
    aspectRatio: 1.0,
    width: '100%',
    backgroundColor: 'black',
    borderRadius: 10,
    marginBottom: 10,
  },
  video: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  additionalTextContainer: {
    marginBottom: 20,
  },
  additionalText: {
    fontFamily: 'RobotoMono-Bold',
    fontSize: 16,
    marginBottom: 5,
    color: 'black',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
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
  closeIcon: {
    width: 30,
    height: 30,
  },
  closeButton: {
    position: 'relative',
    bottom: 10,
    left: 170,
    zIndex: 2,
  },
});

export default Module1Topic1;
