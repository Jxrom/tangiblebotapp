import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Video from 'react-native-video';
import gifVideo from '../../assets/Video/creativity.mp4';
import VideoPlayer from 'react-native-video-controls';

const Module3Topic0 = () => {
  const navigation = useNavigation();

  const navigateToA3Page = () => {
    navigation.navigate('A3Page');
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
        <Text style={styles.title}>Module 3: How can be useful looping in everyday task?</Text>
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
              Imagine you have a magical pen that can draw pictures super fast. You want to draw lots of stars, but drawing each one by hand would take forever! That's where looping comes in handy.
            </Text>
            <Text style={styles.content}>
              Looping is like telling your magical pen, "Hey, draw me 10 stars," and poof! It draws them all at once. Instead of repeating the same action over and over, you can use looping to do it quickly and easily.
            </Text>
            <Text style={styles.content}>
              So, looping is important because it saves time and makes things easier. It's like having a magical shortcut to get things done faster and have more fun!
            </Text>
            <Text style={styles.videoTitle}>How to Use Loop</Text>
            <View style={styles.supplementalVideo}>
            <VideoPlayer
            source={require('../../assets/Video/Looping.mp4')}
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
        {/* Only Next Button */}
        <TouchableOpacity style={[styles.button, styles.nextButton]} onPress={navigateToA3Page}>
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

export default Module3Topic0;
