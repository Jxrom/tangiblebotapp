import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Video from 'react-native-video';
import { useNavigation } from '@react-navigation/native';

const LoopingPage = () => {
  const navigation = useNavigation();

  const navigateToLoop0Page = () => {
    navigation.navigate('Loop0Page');
  };

  const navigateToA3Page = () => {
    navigation.navigate('A3Page');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Module 3</Text>
      <View style={[styles.innerContainer, { marginBottom: 20 }]}>
        <Text style={styles.innerTitle}>3.1 - Learning the importance of Looping</Text>
        <View style={styles.videoContainer}>
          <Video
            source={require('../../assets/Video/Looping.mp4')}
            style={styles.video}
            resizeMode="contain"
            controls={true}
          />
        </View>
        {/* ScrollView for additional text */}
        <ScrollView style={styles.scrollView}>
          <View style={styles.additionalTextContainer}>
            <Text style={styles.additionalText}>1. Scan the Start Program card</Text>
            <Text style={styles.additionalText}>2. Scan the Start Loop card</Text>
            <Text style={styles.additionalText}>3. Scan the number card Ex. 3</Text>
            <Text style={styles.additionalText}>4. Scan the Move Forward card</Text>
            <Text style={styles.additionalText}>5. Scan the number card Ex. 1</Text>
            <Text style={styles.additionalText}>6. Scan the End Loop card</Text>
            <Text style={styles.additionalText}>7. Scan the End Program card</Text>
            <Text style={styles.additionalText}>8. Click the Play Button</Text>
            <Text style={styles.additionalText}>"The robot will move forward 1 second 3 times"</Text>
          </View>
        </ScrollView>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={navigateToLoop0Page}>
          <Text>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={navigateToA3Page}>
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

export default LoopingPage;
