import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Video from 'react-native-video';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const ConditionalPage = () => {
  const navigation = useNavigation();

  const navigateToCon0Page = () => {
    navigation.navigate('Con0Page');
  };

  const navigateToObstaclePage = () => {
    navigation.navigate('ObstaclePage');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Module 2</Text>
      <View style={[styles.innerContainer, { marginBottom: 20 }]}>
        <Text style={styles.innerTitle}>2.1 - Understanding Conditional Statements</Text>
        <View style={styles.videoContainer}>
          {/* Local video */}
          <Video
            source={require('../../assets/Video/IntroToConditionals.mp4')}
            style={styles.video}
            resizeMode="contain" // Adjust the video size to fit within the container
            controls={true}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={navigateToCon0Page}>
          <Text>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={navigateToObstaclePage}>
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
  },
});

export default ConditionalPage;
