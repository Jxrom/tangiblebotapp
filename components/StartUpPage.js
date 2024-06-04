import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Image } from 'react-native';
import Video from "react-native-video";
import gifVideo from '../assets/Video/moving_turtle_bg.mp4';

const StartUpPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Video
        repeat
        source={gifVideo}
        resizeMode="cover"
        style={styles.video}
      />
      <Text style={styles.text}>TurtleByte</Text>
      <Text style={styles.subText}>"Learn Programming Logic One Bite A Time"</Text>
      <TouchableHighlight
        style={styles.button}
        activeOpacity={0.6} // Adjust the opacity when pressed
        underlayColor="#1F7676" // Change color when pressed
        onPress={() => navigation.navigate('TerminalPage')}
      >
        <Text style={styles.buttonText}>Start Terminal</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.button}
        activeOpacity={0.6} // Adjust the opacity when pressed
        underlayColor="#1F7676" // Change color when pressed
        onPress={() => navigation.navigate('LearningPage')}
      >
        <Text style={styles.buttonText}>Modules</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.button}
        activeOpacity={0.6} // Adjust the opacity when pressed
        underlayColor="#1F7676" // Change color when pressed
        onPress={() => navigation.navigate('BluetoothPage')}
      >
        <Text style={styles.buttonText}>Connect Turtle Bot</Text>
      </TouchableHighlight>
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
    marginBottom: 10,
    borderRadius: 20,
  },
  text: {
    fontFamily: 'RobotoMono-Bold',
    fontSize: 40,
    color: 'black',
    padding: 10,
  },
  subText: {
    fontFamily: 'RobotoMono-Bold',
    fontSize: 12,
    color: 'black',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#2D9596',
    padding: 20,
    borderRadius: 10,
    marginTop: 10,
    width: 280,
    elevation: 5, // Increase elevation for darker shadow effect
    margin: 5,
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
