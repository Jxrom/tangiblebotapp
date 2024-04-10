import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Video from 'react-native-video';
import gifVideo from '../../assets/Video/avoid.mp4';

const Obs0Page = () => {
  const navigation = useNavigation();

  const navigateToModule4Page = () => {
    navigation.navigate('Module4Page');
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>The Obstacle Detection</Text>
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
              Imagine you have a cute little robot friend named Turtlebyte. Turtlebyte loves to explore but needs your help to avoid bumping into things. That's where obstacle detection comes in!
            </Text>
            <Text style={styles.content}>
              Obstacle detection is like giving Turtlebyte special eyes that can see things in its path, just like how you look both ways before crossing the street. With obstacle detection, Turtlebyte can spot objects ahead and decide how to move around them, just like you decide which way to walk to avoid bumping into a tree.
            </Text>
            <Text style={styles.content}>
              In turtlebyte, we use Obstacle Ahead and No obstacle cards that act like the conditional statement. These cards may apply to the robot to see if there's an obstacle in his path and avoid bumping into it.
            </Text>
          </View>
        </ScrollView>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.nextButton]} onPress={navigateToModule4Page}>
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
    marginRight: 0, // Remove margin for the next button
  },
});

export default Obs0Page;
