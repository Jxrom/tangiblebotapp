import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Video from 'react-native-video';

const SplashScreen = ({ navigation }) => {
  const [splashComplete, setSplashComplete] = useState(false);

  // After 3 seconds, navigate to the StartUpPage
  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashComplete(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  // Navigate to StartUpPage when splashComplete is true
  useEffect(() => {
    if (splashComplete) {
      navigation.replace('StartUpPage');
    }
  }, [splashComplete, navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.videoContainer}>
        <Video
          source={require('../assets/Video/moving_turtle_bg.mp4')}
          style={styles.video}
          resizeMode="cover"
          repeat={false}
          muted
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9AD0C2', // Background color set to #9AD0C2
  },
  videoContainer: {
    width: 200, // Adjust the width as needed
    height: 200, // Adjust the height as needed
    backgroundColor: 'transparent',
  },
  video: {
    flex: 1,
  },
});

export default SplashScreen;
