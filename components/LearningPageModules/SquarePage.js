import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Video from 'react-native-video';
import { useNavigation } from '@react-navigation/native';

const SquarePage = () => {
  const navigation = useNavigation();

  const navigateToPol0Page = () => {
    navigation.navigate('Pol0Page');
  };

  const navigateToA5Page = () => {
    navigation.navigate('A5Page');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Module 5</Text>
      <View style={styles.innerContainer}>
        <Text style={styles.innerTitle}>5.1 - Making the Robot Move in a Square</Text>
        <View style={styles.videoContainer}>
          {/* Local video */}
          <Video
            source={require('../../assets/Video/SquarePolygon.mp4')}
            style={styles.video}
            resizeMode="contain" // Adjust the video size to fit within the container
            controls={true}
          />
        </View>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.scrollText}>
            1. Scan the Start Program card {"\n"}
            2. Scan the Start Loop card {"\n"}
            3. Scan the number card (4) {"\n"}
            4. Scan the Move Forward card {"\n"}
            5. Scan the number card (1) {"\n"}
            6. Scan the Turn Right card {"\n"}
            7. Scan the 90 degrees card {"\n"}
            8. Scan the End Loop card {"\n"}
            9. Scan the End Program card {"\n"}
            10. Click the play button {"\n"}
            
            "The robot should display square polygon"
          </Text>
        </ScrollView>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={navigateToPol0Page}>
          <Text>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={navigateToA5Page}>
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
    marginBottom: 20, // Add marginBottom to inner container
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
  scrollView: {
    flex: 1,
    marginBottom: 10,
  },
  scrollText: {
    fontSize: 16,
    color: 'black',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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

export default SquarePage;
