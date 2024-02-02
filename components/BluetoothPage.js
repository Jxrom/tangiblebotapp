import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  Switch,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';

import _ from 'lodash';
import BluetoothSerial from 'react-native-bluetooth-serial';

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

  componentDidMount() {
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
        // Navigate to MenuPage
        this.props.navigation.navigate('MenuPage');
      })
      .catch((err) => console.log(err.message));
  }

  _renderItem(item) {
    return (
      <TouchableOpacity onPress={() => this.connect(item.item)}>
        <View style={styles.deviceNameWrap}>
          <Text style={styles.deviceName}>
            {item.item.name ? item.item.name : item.item.id}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  enable() {
    BluetoothSerial.enable()
      .then((res) => this.setState({ isEnabled: true }))
      .catch((err) => ToastAndroid.show(err.message, ToastAndroid.SHORT));
  }

  disable() {
    BluetoothSerial.disable()
      .then((res) => this.setState({ isEnabled: false }))
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
    return (
      <View style={styles.container}>
        <View style={styles.toolbar}>
          <Image
            source={require('../assets/buttons/bluetooth.png')}
            style={{ width: 90, height: 90, marginRight: 1, marginLeft: 10, }}
          />
          <Text style={styles.toolbarTitle}>Bluetooth Device List</Text>
          <View style={styles.toolbarButton}>
            <Switch
              value={this.state.isEnabled}
              onValueChange={(val) => this.toggleBluetooth(val)}
            />
          </View>
        </View>

        <FlatList
          style={{ flex: 1 }}
          data={this.state.devices}
          keyExtractor={(item) => item.id}
          renderItem={(item) => this._renderItem(item)}
        />
        <TouchableOpacity
          onPress={this.discoverAvailableDevices.bind(this)}
          style={styles.scanButtonContainer}
        >
          <Image
            source={require('../assets/buttons/scan.png')}
            style={{ width: 100, height: 100, marginBottom: 30}}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9AD0C2',
  },
  toolbar: {
    paddingTop: 30,
    paddingBottom: 30,
    flexDirection: 'row',
  },
  toolbarButton: {
    width: 50,
    marginTop: 30,
    marginRight: 25,
  },
  toolbarTitle: {
    textAlign: 'left',
    fontFamily: 'RobotoMono-Bold',
    fontSize: 30,
    flex: 1,
    marginTop: 6,
    color: 'black',
  },
  deviceName: {
    fontSize: 20,
    color: 'black',
  },
  deviceNameWrap: {
    margin: 10,
    borderBottomWidth: 1,
  },
  scanButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
});
