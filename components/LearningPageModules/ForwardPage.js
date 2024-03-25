import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Video from 'react-native-video';

const ForwardPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Make TurtleBot Go Forward!</Text>
      <View style={styles.innerContainer}>
        <View style={styles.videoContainer}>
          {/* Local video */}
          <Video
            source={require('../../assets/Video/FP.mp4')}
            style={styles.video}
            resizeMode="contain" // Adjust the video size to fit within the container
            controls={true}
          />
        </View>
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
    paddingHorizontal: 15,
    paddingVertical: 30,
  },
  title: {
    fontFamily: 'RobotoMono-Bold',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
    alignSelf: 'center',
  },
  innerContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    width: '100%',
    borderRadius: 10,
  },
  videoContainer: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  video: {
    width: '100%',
    height: '100%',
  },
});

export default ForwardPage;
