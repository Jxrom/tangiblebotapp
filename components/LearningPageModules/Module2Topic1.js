import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image} from 'react-native';
import Video from 'react-native-video';
import { useNavigation } from '@react-navigation/native';
import VideoPlayer from 'react-native-video-controls';

const Module2Topic1 = () => {
  const navigation = useNavigation();

  const navigateToPreviousPage = () => {
    navigation.navigate('Module2Topic0');
  };

  const navigateToNextPage = () => {
    navigation.navigate('A2Page');
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
      <View style={[styles.innerContainer, { marginBottom: 20 }]}>
        <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Learn How to Use Conditional Statement</Text>
        <Text style={styles.subTitle}>Using Obstacle Ahead</Text>
        <View style={styles.videoContainer}>
          {/* Local video */}
          <VideoPlayer
            source={require('../../assets/Video/ObstacleAhead.mp4')}
            paused={true}
            showOnStart={false}
            disableBack
            disableVolume
          />
        </View>
          <Text style={styles.subTitle}>Using No Obstacle Ahead</Text>
          <View style={styles.videoContainer}>
          {/* Local video */}
          <VideoPlayer
            source={require('../../assets/Video/NoObstacleAhead.mp4')} // Update the video path
            paused={true}
            showOnStart={false}
            disableBack
            disableVolume
          />
        </View>
        </ScrollView>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={navigateToPreviousPage}>
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
    marginBottom: 20,
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
    marginTop: 5,
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
  subTitle: {
    fontFamily: 'RobotoMono-Bold',
    color: 'black',
    fontSize: 16,
    marginTop: 5,
  }
});

export default Module2Topic1;
