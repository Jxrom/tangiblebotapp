// AboutPage.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About App</Text>
      <Text style={styles.description}>
        A Terminal App for the Design of Tangible Input System for a Primary-Level Education Programmable Robot Learning Tool
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#fff',
      alignItems: 'center', // Center content horizontally
      justifyContent: 'center', // Center content vertically
      backgroundColor: '#9AD0C2',
    },
    title: {
      fontSize: 24,
      fontFamily: 'RobotoMono-Bold',
      marginBottom: 16,
      color: 'black'
    },
    description: {
      fontSize: 16,
      marginBottom: 24,
      fontFamily: 'RobotoMono-Bold',
      textAlign: 'justify',
    },
  });

export default AboutPage;
