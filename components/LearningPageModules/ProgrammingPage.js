import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import { useNavigation } from '@react-navigation/native';

const ProgrammingPage = () => {
  const navigation = useNavigation();

  const navigateToProg0Page = () => {
    navigation.navigate('Prog0Page'); // Navigate to the previous page
  };

  const navigateToA0Page = () => {
    navigation.navigate('A0Page'); // Navigate to the next page
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Module 0</Text>
      <View style={styles.innerContainer}>
        <Text style={styles.innerTitle}>0.1 - Introduction to Programming</Text>
        <View style={styles.videoContainer}>
          {/* Local video */}
          <Video
            source={require('../../assets/Video/IntroProgramming.mp4')}
            style={styles.video}
            resizeMode="contain" // Adjust the video size to fit within the container
            controls={true}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={navigateToProg0Page}>
          <Text>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={navigateToA0Page}>
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
    paddingHorizontal: 15,
    paddingVertical: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
    alignSelf: 'flex-start',
  },
  innerContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    width: '100%',
    borderRadius: 10,
  },
  innerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  videoContainer: {
    aspectRatio: 4 / 3,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  video: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
});

export default ProgrammingPage;
