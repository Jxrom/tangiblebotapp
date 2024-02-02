import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const StartUpPage = ({ navigation }) => {
  useEffect(() => {
    // Navigate to MenuPage after 2000 milliseconds (2 seconds)
    const timeout = setTimeout(() => {
      navigation.navigate('MenuPage');
    }, 2000);

    // Clear the timeout on component unmount
    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tangible Bot</Text>
      <Image
        source={require('../assets/images/RobotImg.png')}
        style={styles.image}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('MenuPage')}
      >
        <Text style={styles.buttonText}>Start Coding</Text>
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
    color: 'black',
  },
  button: {
    backgroundColor: '#2D9596',
    padding: 20,
    borderRadius: 20,
    marginTop: 10,
    width: 200,
  },
  buttonText: {
    fontFamily: 'RobotoMono-Bold',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
});

export default StartUpPage;
