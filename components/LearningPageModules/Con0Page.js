import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Video from 'react-native-video';
import gifVideo from '../../assets/Video/weather.mp4';

const Con0Page = () => {
  const navigation = useNavigation();

  const navigateToConditionalPage = () => {
    navigation.navigate('ConditionalPage');
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>What is Conditional Statement?</Text>
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
              Let's imagine you have a robot friend named Turtlebyte. Turtlebyte loves going outside, but only if the sun is shining. So, you tell Turtlebyte, "If the sun is shining, go play outside. But if it's raining, stay indoors and read a book."
            </Text>
            <Text style={styles.content}>
              So, when you use a conditional statement in programming, you're telling the computer to make decisions, just like Turtlebyte does when he decides whether to play outside or read a book.
            </Text>
          </View>
        </ScrollView>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={navigateToConditionalPage}>
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
});

export default Con0Page;
