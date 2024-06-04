import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Video from 'react-native-video';
import gifVideo from '../../assets/Video/treasure.mp4';

const Module1Topic0 = () => {
  const navigation = useNavigation();

  const navigateToModule1Topic1 = () => {
    navigation.navigate('Module1Topic1');
  };

  const handleCloseButton = () => {
    navigation.navigate('LearningPage'); // Navigate to the desired page upon exit
  };

  const navigateToA0Page = () => {
    navigation.navigate('A0Page');
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
        <Text style={styles.title}>Module 1: What is variable declaration?</Text>
          <Video
            source={gifVideo}
            style={styles.video}
            resizeMode="cover"
            repeat={true}
          />
          <View style={styles.contentContainer}>
            <Text style={styles.content}>
              Now, imagine you have a magic box, and you want to tell it to remember a special number, like the number of cookies you have. But to do that, you need to speak the language of the magic box.
              So, you say, "Hey, magic box! Remember the number of cookies for me. We'll call it 'CookieCount'.”
              And then you tell the magic box, "CookieCount will be a special kind of number, a whole number, like in Turtlebyte we use 1 to 5, with no half numbers allowed.
            </Text>
            <Text style={styles.content}>
              And just like that, you've declared your special number to the magic box! So now, the magic box acts like the variable and the whole number that is numbers 1 to 5 acts like the value that you declared as the number of your cookies you have.
            </Text>
          </View>
        </ScrollView>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={navigateToModule1Topic1}>
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
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 2,
  },
  exitIcon: {
    width: 30,
    height: 30,
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

export default Module1Topic0;
