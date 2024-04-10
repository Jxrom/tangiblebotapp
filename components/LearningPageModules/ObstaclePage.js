import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Video from 'react-native-video';
import { useNavigation } from '@react-navigation/native';

const ObstaclePage = () => {
  const navigation = useNavigation();

  const navigateToConditionalPage = () => {
    navigation.navigate('ConditionalPage');
  };

  const navigateToObstacle1Page = () => {
    navigation.navigate('Obstacle1Page');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Module 2</Text>
      <View style={[styles.innerContainer, { marginBottom: 20 }]}>
        <Text style={styles.innerTitle}>2.2 - Avoiding Objects with Obstacle Ahead function</Text>
        <View style={styles.videoContainer}>
          {/* Local video */}
          <Video
            source={require('../../assets/Video/ObstacleAhead.mp4')}
            style={styles.video}
            resizeMode="contain" // Adjust the video size to fit within the container
            controls={true}
          />
        </View>
        {/* ScrollView for additional text */}
        <ScrollView style={styles.scrollView}>
          <View style={styles.additionalTextContainer}>
            <Text style={styles.additionalText}>1. Scan the Start Program card</Text>
            <Text style={styles.additionalText}>2. Scan the If card</Text>
            <Text style={styles.additionalText}>3. Scan the Obstacle Ahead card</Text>
            <Text style={styles.additionalText}>4. Scan the Move Backward card</Text>
            <Text style={styles.additionalText}>5. Scan the Else card</Text>
            <Text style={styles.additionalText}>6. Scan the Start Loop card</Text>
            <Text style={styles.additionalText}>7. Scan infinity card</Text>
            <Text style={styles.additionalText}>8. Scan the Move Forward card</Text>
            <Text style={styles.additionalText}>9. Scan the End loop card</Text>
            <Text style={styles.additionalText}>10. Scan the End if card</Text>
            <Text style={styles.additionalText}>11. Scan the End program card</Text>
            <Text style={styles.additionalText}>12. Click the play button</Text>
            <Text style={styles.additionalText}>"The robot should move forward infinite, and if there's an obstacle, it should move backward."</Text>
          </View>
        </ScrollView>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={navigateToConditionalPage}>
          <Text>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={navigateToObstacle1Page}>
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
  scrollView: {
    flex: 1,
    marginBottom: 10,
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

export default ObstaclePage;
