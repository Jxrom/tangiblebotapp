import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Video from 'react-native-video';
import gifVideo from '../../assets/Video/box.mp4';

const IVDPage = () => {
  const navigation = useNavigation();

  const navigateToForwardPage = () => {
    navigation.navigate('ForwardPage');
  };

  const handleCloseButton = () => {
    navigation.navigate('LearningPage'); // Navigate to the desired page upon exit
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleCloseButton} style={styles.closeButton}>
        <Image source={require('../../assets/buttons/close.png')} style={styles.exitIcon} />
      </TouchableOpacity>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>The Variable declaration</Text>
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
        <TouchableOpacity style={styles.button} onPress={navigateToForwardPage}>
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

export default IVDPage;
