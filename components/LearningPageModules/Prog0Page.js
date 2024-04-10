import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Video from 'react-native-video';
import gifVideo from '../../assets/Video/prog.mp4';

const Prog0Page = () => {
  const navigation = useNavigation();

  const navigateToProgrammingPage = () => {
    navigation.navigate('ProgrammingPage');
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>What is Programming in today's world?</Text>
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
              In today's world, programming is like giving instructions to a robot or a computer. Just like how we tell our toys what to do, programmers use special languages called code to tell computers how to do things.
            </Text>
            <Text style={styles.content}>
              Imagine you have a robot friend called Turtlebyte. You can teach your robot friend to do all sorts of fun and helpful tasks, like playing games, drawing shapes, or even helping with homework! That's what programming is all about making our robot friends, like computers and cellphones, do cool stuff for us.
            </Text>
          </View>
        </ScrollView>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={navigateToProgrammingPage}>
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
    justifyContent: 'flex-end', // Adjusted alignment
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

export default Prog0Page;
