import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const MenuPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello!</Text>
      <Image
        source={require('../assets/images/RobotImg.png')}
        style={styles.image}
      />

      <View style={styles.gridContainer}>
        <TouchableOpacity style={styles.gridItem} onPress={() => navigation.navigate('TerminalPage')}>
          <Image
            source={require('../assets/buttons/terminal.png')}
            style={styles.gridItemImage}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItem} onPress={() => navigation.navigate('HowToUsePage')}>
          <Image
            source={require('../assets/buttons/howto.png')}
            style={styles.gridItemImage}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItem} onPress={() => navigation.navigate('BluetoothPage')}>
            <Image
              source={require('../assets/buttons/connect.png')}
              style={styles.gridItemImage}
            />
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItem} onPress={() => navigation.navigate('AboutPage')}>
          <Image
            source={require('../assets/buttons/about.png')}
            style={styles.gridItemImage}
          />
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
    backgroundColor: '#9AD0C2',
  },
  image: {
    width: 320,
    height: 320,
    resizeMode: 'contain',
  },
  text: {
    fontFamily: 'RobotoMono-Bold',
    fontSize: 40,
    color: 'black',
    marginTop: 20,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center', // Center the items horizontally
    marginBottom: 30,
  },
  gridItem: {
    width: 130, // Adjusted size for 2x2 format
    height: 130, // Adjusted size for 2x2 format
    margin: 6,  // Margin between items
  },
  gridItemImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
});

export default MenuPage;
