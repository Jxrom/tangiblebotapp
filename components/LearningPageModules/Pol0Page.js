import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Video from 'react-native-video';
import gifVideo from '../../assets/Video/shapes.mp4';

const Pol0Page = () => {
  const navigation = useNavigation();

  const navigateToSquarePage = () => {
    navigation.navigate('SquarePage');
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Different Shapes known as Polygons</Text>
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
              Imagine you have a box of colorful building blocks. Each block has different shapes, like squares, rectangles, triangles, and more. Polygons are just like those shapes but with a fancy name.
            </Text>
            <Text style={styles.content}>
              Polygons are special because they have lots of sides, like a superhero with many powers! Some polygons have three sides, and we call them triangles. Others have four sides, and we call them squares or rectangles.
            </Text>
          </View>
        </ScrollView>
      </View>
      <View style={styles.buttonContainer}>
        {/* Removed TouchableOpacity for the previous button */}
        <TouchableOpacity style={styles.button} onPress={navigateToSquarePage}>
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
    justifyContent: 'flex-end', // Align button to the right
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

export default Pol0Page;
