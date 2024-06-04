import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Video from 'react-native-video';
import gifVideo from '../../assets/Video/avoid.mp4';
import VideoPlayer from 'react-native-video-controls';

const Obs0Page = () => {
  const navigation = useNavigation();

  const navigateToA4Page = () => {
    navigation.navigate('A4Page');
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
        <Text style={styles.title}>Module 4: Obstacle Detection</Text>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Video
            source={gifVideo}
            style={styles.video}
            resizeMode="cover"
            autoplay={true}
            repeat={true}
          />
          <View style={styles.contentContainer}>
            <Text style={styles.content}>
              Imagine you have a cute little robot friend named Turtlebyte. Turtlebyte loves to explore but needs your help to avoid bumping into things. That's where obstacle detection comes in!
            </Text>
            <Text style={styles.content}>
              Obstacle detection is like giving Turtlebyte special eyes that can see things in its path, just like how you look both ways before crossing the street. With obstacle detection, Turtlebyte can spot objects ahead and decide how to move around them, just like you decide which way to walk to avoid bumping into a tree.
            </Text>
            <Text style={styles.content}>
              In turtlebyte, we use Obstacle Ahead and No obstacle cards that act like the conditional statement. These cards may apply to the robot to see if there's an obstacle in his path and avoid bumping into it.
            </Text>
            <Text style={styles.videoTitle}>Watch Video</Text>
            <View style={styles.supplementalVideo}>
              <VideoPlayer
                source={require('../../assets/Video/detection.mp4')}
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
        <TouchableOpacity style={[styles.button, styles.nextButton]} onPress={navigateToA4Page}>
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

export default Obs0Page;
