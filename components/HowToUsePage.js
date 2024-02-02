import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const HowToUsePage = () => {
  return (
    <View style={styles.connectPageContainer}>
      <Text style={styles.connectPageText}>How To Use</Text>

      {/* First set of Image and Text */}
      <View style={styles.rowContainer}>
        <Image source={require('../assets/images/usb.png')} style={styles.image} />
        <Text style={styles.text}>1. Connect the RFID Sensor to the Mobile Device via USB Connection</Text>
      </View>

      {/* Second set of Text and Image */}
      <View style={styles.rowContainer}>
        <Text style={styles.text}>2. Connect the App to the Programmable Robot through Bluetooth Connection</Text>
        <Image source={require('../assets/images/bluetooth.png')} style={styles.image} />
      </View>

      {/* Repeat the pattern for the next sets */}
      {/* Third set of Image and Text */}
      <View style={styles.rowContainer}>
        <Image source={require('../assets/images/rfid.png')} style={styles.image} />
        <Text style={styles.text}>3. Scan the Instruction Cards to the RFID Sensor to Program the Movements of the Robot</Text>
      </View>

      {/* Fourth set of Text and Image */}
      <View style={styles.rowContainer}>
        <Text style={styles.text}>4. Press the Play Button to transmit the Program Instruction to the Robot</Text>
        <Image source={require('../assets/images/play.png')} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  connectPageContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#9AD0C2',
    paddingTop: 30,
  },
  connectPageText: {
    fontSize: 30,
    color: 'black',
    fontFamily: 'RobotoMono-Bold',
    marginBottom: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    width: '80%', // Adjust this width as needed
  },
  text: {
    fontSize: 14,
    color: 'black',
    fontFamily: 'RobotoMono-Bold',
    flex: 1,
    marginRight: 10,
  },
  image: {
    width: 90, // Adjust this width as needed
    height: 90, // Adjust this height as needed
    resizeMode: 'contain',
    margin: 20,
  },
});

export default HowToUsePage;
