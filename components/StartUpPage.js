import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const StartUpPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tangible Bot</Text>
      <Image
        source={require('../assets/images/RobotImg.png')}
        style={styles.image}
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
        <Text style={styles.buttonText}>Connect Robot</Text>
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
  image: {
    width: 350,
    height: 350,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  text: {
    fontFamily: 'RobotoMono-Bold',
    fontSize: 35,
    color: 'white',
    backgroundColor: '#265073', // Add this line to set the background color
    padding: 10, // Add padding if needed
    borderRadius: 10,
    textShadowColor: 'black',  // Outline color
    textShadowOffset: { width: 1, height: 1 },  // Outline offset
    textShadowRadius: 2,  // Outline radius
    borderWidth: 1,
    borderColor: 'black',
  },
  
  button: {
    backgroundColor: '#2D9596',
    padding: 20,
    borderRadius: 20,
    marginTop: 10,
    width: 230,
    borderWidth: 1,  // Border width for the outline
    borderColor: 'black',  // Border color for the outline
  },
  
  buttonText: {
    fontFamily: 'RobotoMono-Bold',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    textShadowColor: 'black',  // Outline color
    textShadowOffset: { width: 1, height: 1 },  // Outline offset
    textShadowRadius: 2,  // Outline radius
  },
  
});

export default StartUpPage;
