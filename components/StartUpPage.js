import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Video from "react-native-video";
import gifVideo from '../assets/Video/moving_turtle_bg.mp4'

const StartUpPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>TurtleByte</Text>
      <Video
        repeat
        source={gifVideo}
        resizeMode="cover"
        style={styles.video}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('TerminalPage')}
      >
        <Text style={styles.buttonText}>Start Terminal</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('LearningPage')}
      >
        <Text style={styles.buttonText}>Tutorial</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('BluetoothPage')}
      >
        <Text style={styles.buttonText}>Connect Turtle Bot</Text>
      </TouchableOpacity>
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
  video: {
    marginTop: 10,
    width: 300, // set your desired width
    height: 250, // set your desired height
    marginBottom: 30,
    borderRadius: 20,
  },
  text: {
    fontFamily: 'RobotoMono-Bold',
    fontSize: 35,
    color: 'white',
    backgroundColor: '#265073',
    padding: 10,
    borderRadius: 10,
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 20
  },
  button: {
    backgroundColor: '#2D9596',
    padding: 20,
    borderRadius: 20,
    marginTop: 10,
    width: 280,
    borderWidth: 1,
    borderColor: 'black',
  },
  buttonText: {
    fontFamily: 'RobotoMono-Bold',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});

export default StartUpPage;
