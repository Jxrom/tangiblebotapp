import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';

import _ from 'lodash';
import BluetoothSerial from 'react-native-bluetooth-serial';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class BluetoothPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnabled: false,
      discovering: false,
      devices: [],
      unpairedDevices: [],
      connected: false,
    };
  }

  async componentDidMount() {
    try {
      const isConnected = await AsyncStorage.getItem('bluetoothConnected');
      const connected = isConnected === 'true';
      this.setState({ connected });

      Promise.all([
        BluetoothSerial.isEnabled(),
        BluetoothSerial.list(),
      ])
        .then((values) => {
          const [isEnabled, devices] = values;
          this.setState({ isEnabled, devices });
        })
        .catch((err) => console.log(`Error: ${err.message}`));

      BluetoothSerial.on('bluetoothEnabled', () => {
        Promise.all([
          BluetoothSerial.isEnabled(),
          BluetoothSerial.list(),
        ])
          .then((values) => {
            const [isEnabled, devices] = values;
            this.setState({ devices });
          })
          .catch((err) => console.log(`Error: ${err.message}`));
      });

      BluetoothSerial.on('bluetoothDisabled', () => {
        this.setState({ devices: [] });
      });

      BluetoothSerial.on('error', (err) => console.log(`Error: ${err.message}`));

      BluetoothSerial.on('connectionLost', () => {
        this.setState({ connected: false });
        AsyncStorage.setItem('bluetoothConnected', 'false');
      });

      BluetoothSerial.on('connectionSuccess', () => {
        this.setState({ connected: true });
        AsyncStorage.setItem('bluetoothConnected', 'true');
      });
    } catch (error) {
      console.error('Error loading Bluetooth connection status:', error);
    }
  }

  connect(device) {
    this.setState({ connecting: true });
    BluetoothSerial.connect(device.id)
      .then((res) => {
        console.log(`Connected to device ${device.name}`);
        ToastAndroid.show(
          `Connected to device ${device.name}`,
          ToastAndroid.SHORT
        );

        // Send "I", "W", and "S" letters after a successful connection
        BluetoothSerial.write("I")
          .then(() => console.log("Successfully sent 'I'"))
          .catch((err) => console.log(`Error sending 'I': ${err.message}`));

        setTimeout(() => {
          BluetoothSerial.write("W")
            .then(() => console.log("Successfully sent 'W'"))
            .catch((err) => console.log(`Error sending 'W': ${err.message}`));
        }, 1000); // Delay 1 second before sending "W"

        setTimeout(() => {
          BluetoothSerial.write("S")
            .then(() => console.log("Successfully sent 'S'"))
            .catch((err) => console.log(`Error sending 'S': ${err.message}`));
        }, 2000); // Delay 2 seconds before sending "S"

        // Save the connection status
        this.setState({ connected: true });
        AsyncStorage.setItem('bluetoothConnected', 'true');
      })
      .catch((err) => console.log(err.message));
  }

  _renderItem(item) {
    let deviceName = item.item.name || item.item.id;
    let iconSource = null;

    if (deviceName === 'HC-05') {
      deviceName = 'Robot Device';
      iconSource = require('../assets/images/RobotIcon.png');
    } else {
      iconSource = require('../assets/images/bluetoothIcon.png');
    }

    return (
      <TouchableOpacity onPress={() => this.connect(item.item)}>
        <View style={styles.deviceNameWrap}>
          <Image source={iconSource} style={styles.deviceIcon} />
          <Text style={styles.deviceName}>{deviceName}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  enable() {
    BluetoothSerial.enable()
      .then(() => this.setState({ isEnabled: true }))
      .catch((err) => ToastAndroid.show(err.message, ToastAndroid.SHORT));
  }

  disable() {
    BluetoothSerial.disable()
      .then(() => this.setState({ isEnabled: false }))
      .catch((err) => ToastAndroid.show(err.message, ToastAndroid.SHORT));
  }

  toggleBluetooth(value) {
    if (value === true) {
      this.enable();
    } else {
      this.disable();
    }
  }

  discoverAvailableDevices() {
    if (this.state.discovering) {
      return false;
    } else {
      this.setState({ discovering: true });
      BluetoothSerial.discoverUnpairedDevices()
        .then((unpairedDevices) => {
          const uniqueDevices = _.uniqBy(unpairedDevices, 'id');
          console.log(uniqueDevices);
          this.setState({
            unpairedDevices: uniqueDevices,
            discovering: false,
          });
        })
        .catch((err) => console.log(err.message));
    }
  }

  render() {
    const bluetoothButtonImage = this.state.isEnabled
      ? require('../assets/buttons/bluetoothOn.png')
      : require('../assets/buttons/bluetoothOff.png');

    const leftUpperImageSource = this.state.connected
      ? require('../assets/images/bluetoothIndicatorOn.png')
      : require('../assets/images/bluetoothIndicatorOff.png');

    const handleCloseButton = () => {
      console.log('Close button pressed');
      this.props.navigation.navigate('StartUpPage');
    };

    return (
      <View style={styles.container}>
        <Image
          source={leftUpperImageSource}
          style={styles.leftUpperImage}
        />

        <TouchableOpacity onPress={handleCloseButton} style={styles.closeButton}>
          <Image
            source={require('../assets/buttons/terminalPageButtons/close.png')}
            style={styles.closeIcon}
          />
        </TouchableOpacity>

        <View style={styles.blueBox}>
          <Text style={styles.toolbarTitle}>Connect to Robot</Text>
        </View>

        <View style={styles.whiteBox}>
          <FlatList
            style={{ flex: 1 }}
            data={this.state.devices}
            keyExtractor={(item) => item.id}
            renderItem={(item) => this._renderItem(item)}
          />
        </View>

        <View style={styles.scanButtonContainer}>
          <TouchableOpacity
            onPress={this.discoverAvailableDevices.bind(this)}
            style={{ marginRight: 10 }}
          >
            <Image
              source={require('../assets/buttons/scan.png')}
              style={{ width: 100, height: 100, marginBottom: 30 }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.toggleBluetooth(!this.state.isEnabled)}
          >
            <Image
              source={bluetoothButtonImage}
              style={{ width: 100, height: 100, marginBottom: 30 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9AD0C2',
  },
  blueBox: {
    backgroundColor: '#265073',
    padding: 10,
    marginTop: 30,
    marginLeft: 85,
    borderRadius: 10,
    position: 'absolute',
    zIndex: 1,
    borderWidth: 1,
  },
  toolbarTitle: {
    textAlign: 'center',
    fontFamily: 'RobotoMono-Bold',
    fontSize: 20,
    color: 'white',
  },
  deviceName: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'RobotoMono-Bold',
  },
  deviceIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  deviceNameWrap: {
    marginTop: 20,
    margin: 10,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 2,
  },
  leftUpperImage: {
    position: 'absolute',
    top: 10,
    left: 10,
    width: 24,  // Adjust the width and height according to your image size
    height: 24,
    zIndex: 2,
  },
  whiteBox: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    padding: 10,
    marginTop: 60,
    borderWidth: 1,
  },
  scanButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
});
