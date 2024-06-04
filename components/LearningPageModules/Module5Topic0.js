import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Video from 'react-native-video';
import gifVideo from '../../assets/Video/shapes.mp4';
import VideoPlayer from 'react-native-video-controls';

const Pol0Page = () => {
  const navigation = useNavigation();

  const navigateToA5Page = () => {
    navigation.navigate('A5Page');
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
        <Text style={styles.title}>Module 5: What are Polygons?</Text>
          <Video
            source={gifVideo}
            style={styles.video}
            resizeMode="cover"
            autoplay={true}
            repeat={true}
          />
          <View style={styles.contentContainer}>
            <Text style={styles.content}>
              Imagine you have a box of colorful building blocks. Each block has different shapes, like squares, rectangles, triangles, and more. Polygons are just like those shapes but with a fancy name.
            </Text>
            <Text style={styles.content}>
              Polygons are special because they have lots of sides, like a superhero with many powers! Some polygons have three sides, and we call them triangles. Others have four sides, and we call them squares or rectangles.
            </Text>
            <Text style={styles.videoTitle}>Make a Square Polygon</Text>
            <View style={styles.supplementalVideo}>
              <VideoPlayer
              source={require('../../assets/Video/SquarePolygon.mp4')}
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
        {/* Removed TouchableOpacity for the previous button */}
        <TouchableOpacity style={styles.button} onPress={navigateToA5Page}>
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

export default Pol0Page;
