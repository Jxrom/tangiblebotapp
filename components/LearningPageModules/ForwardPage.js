import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Video from 'react-native-video';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const ForwardPage = () => {
  const navigation = useNavigation();

  const navigateToIVDPage = () => {
    navigation.navigate('IVDPage');
  };

  const navigateToBackwardPage = () => {
    navigation.navigate('BackwardPage');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Module 1</Text>
      <View style={styles.innerContainer}>
        <Text style={styles.innerTitle}>1.1 - Make the Robot Go Forward!</Text>
        <View style={styles.videoContainer}>
          <Video
            source={require('../../assets/Video/FP.mp4')}
            style={styles.video}
            resizeMode="contain"
            controls={true}
          />
        </View>
        {/* Add the additional text here */}
        <View style={styles.additionalTextContainer}>
          <Text style={styles.additionalText}>1. Scan the Start Program Card</Text>
          <Text style={styles.additionalText}>2. Scan the Forward Card</Text>
          <Text style={styles.additionalText}>3. Scan the number Card</Text>
          <Text style={styles.additionalText}>4. Scan the End Program Card</Text>
          <Text style={styles.additionalText}>5. Click the Play Button</Text>
          <Text style={styles.additionalText}>"The robot will move forward"</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={navigateToIVDPage}>
          <Text>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={navigateToBackwardPage}>
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
    marginBottom: 20,
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
  additionalTextContainer: {
    marginBottom: 20,
  },
  additionalText: {
    fontSize: 16,
    marginBottom: 5,
    color: 'black',
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

export default ForwardPage;
