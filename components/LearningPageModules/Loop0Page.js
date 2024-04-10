import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Video from 'react-native-video';
import gifVideo from '../../assets/Video/pen.mp4';

const Loop0Page = () => {
  const navigation = useNavigation();

  const navigateToLoopingPage = () => {
    navigation.navigate('LoopingPage');
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>How can be useful looping in everyday task?</Text>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Video
            source={gifVideo}
            style={styles.video}
            resizeMode="cover"
            controls={true}
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
          </View>
        </ScrollView>
      </View>
      <View style={styles.buttonContainer}>
        {/* Only Next Button */}
        <TouchableOpacity style={[styles.button, styles.nextButton]} onPress={navigateToLoopingPage}>
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
  },
  innerContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '90%',
    height: '85%',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
    alignSelf: 'flex-start',
  },
  contentContainer: {
    marginTop: 10,
  },
  content: {
    fontSize: 16,
    color: '#000',
    marginBottom: 20,
  },
  video: {
    width: '70%',
    aspectRatio: 1.0,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end', // Align buttons to the right
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  button: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 5,
  },
  nextButton: {
    marginLeft: 10, // Add some margin between the buttons
  },
});

export default Loop0Page;
