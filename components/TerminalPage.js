import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Modal,
  ScrollView,
} from 'react-native';
import BluetoothSerial from 'react-native-bluetooth-serial'; // Import BluetoothSerial

const TerminalPage = () => {
  const [textInputValue, setTextInputValue] = useState('');
  const [instructionImage, setInstructionImage] = useState(null);
  const [rfidInputs, setRfidInputs] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [confirmationModalVisible, setConfirmationModalVisible] = useState(
    false
  );

  const textInputRef = useRef(null);

  const numberTextMapping = {
    '0619291971': {
      text: 'Start program',
      image: require('../assets/instructions/start_program.png'),
    },
    '0296718371': {
      text: 'End program',
      image: require('../assets/instructions/end_program.png'),
    },
    '0619600947': {
      text: 'Loop',
      image: require('../assets/instructions/loop.png'),
    },
    '0617766627': {
      text: 'End Loop',
      image: require('../assets/instructions/end_loop.png'),
    },
    '0619220099': { text: 'If', image: require('../assets/instructions/if.png') },
    '0623298067': {
      text: 'Else',
      image: require('../assets/instructions/else.png'),
    },
    '0619318179': {
      text: 'End If',
      image: require('../assets/instructions/end_if.png'),
    },
    '0618750739': {
      text: 'Forward',
      image: require('../assets/instructions/forward.png'),
    },
    '0435629539': {
      text: 'Backward',
      image: require('../assets/instructions/backward.png'),
    },
    '0624878627': {
      text: 'Turn Right',
      image: require('../assets/instructions/turn_right.png'),
    },
    '0435422851': {
      text: 'Turn Left',
      image: require('../assets/instructions/turn_left.png'),
    },
    '0619293587': { text: 'One', image: require('../assets/instructions/1.png') },
    '0437147523': { text: 'Two', image: require('../assets/instructions/2.png') },
    '0622660643': {
      text: 'Three',
      image: require('../assets/instructions/3.png'),
    },
    '0293694387': {
      text: 'Four',
      image: require('../assets/instructions/4.png'),
    },
    '3996473363': { text: 'Five', image: require('../assets/instructions/5.png') },
  };

  const handleInputChange = (text) => {
    setTextInputValue(text);

    if (numberTextMapping[text]) {
      const { image: instructionImage } = numberTextMapping[text];
      setInstructionImage(instructionImage);

      setRfidInputs((prevInputs) => [...prevInputs, text]);

      setTimeout(() => {
        setTextInputValue('');
        textInputRef.current.focus();
      }, 100);
    } else if (text.length === 10) {
      setTextInputValue('');
    } else {
      setInstructionImage(null);
    }
  };

  useEffect(() => {
    textInputRef.current.focus();
  }, [textInputValue]);

  const handleStopPress = () => {
    console.log('Stop button pressed');
    BluetoothSerial.write('S').then((res) => {
      console.log('Write success:', res);
    }).catch((err) => {
      console.log('Write error:', err);
    });
  };

  const handlePlayPress = async () => {
    console.log('Play button pressed');
    console.log('RFID Inputs:', rfidInputs);
  
    // Mapping of RFID values to characters
    const rfidMapping = {
      '0624878627': 'R',
      '0435422851': 'L',
      '0618750739': 'F',
      '0435629539': 'B',
    };
  
    // Iterate over RFID inputs
    for (const rfidInput of rfidInputs) {
      // Check if the RFID input is in the mapping
      if (rfidMapping.hasOwnProperty(rfidInput)) {
        const characterToWrite = rfidMapping[rfidInput];
  
        // Write character to BluetoothSerial
        try {
          await BluetoothSerial.write(characterToWrite);
          console.log('Write success:', characterToWrite);
        } catch (err) {
          console.log('Write error:', err);
        }
  
        // Delay for 2 seconds
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    }
  };

  const handleVerifyPress = () => {
    console.log('Verify button pressed');
    console.log('RFID Inputs:', rfidInputs);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleClearPress = () => {
    console.log('Clear button pressed');
    setConfirmationModalVisible(true);
  };

  const handleConfirmClear = () => {
    // Clear the RFID inputs
    setRfidInputs([]);
    setConfirmationModalVisible(false);
  };

  return (
    <View style={styles.newPageContainer} keyboardShouldPersistTaps="never">
      <Text style={styles.newPageText}>Terminal</Text>
      <View style={{ opacity: instructionImage ? 0 : 0 }}>
        <TextInput
          style={styles.input}
          placeholder="RFID ID Number"
          onChangeText={handleInputChange}
          value={textInputValue}
          ref={textInputRef}
          autoFocus={false}
          showSoftInputOnFocus={false}
        />
      </View>
      <View style={styles.whiteBox}>
        {instructionImage && (
          <Image source={instructionImage} style={styles.instructionImage} />
        )}
      </View>
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={handleVerifyPress}>
          <Image
            source={require('../assets/buttons/verify.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleClearPress}>
          <Image
            source={require('../assets/buttons/clear.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleStopPress}>
          <Image
            source={require('../assets/buttons/stop.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePlayPress}>
          <Image
            source={require('../assets/buttons/play.png')}
            style={styles.icon}
          />
        </TouchableOpacity>

        {/* Main Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Program Input</Text>
              <ScrollView>
                {rfidInputs.map((input, index) => (
                  <View key={index} style={styles.modalItem}>
                    <Text style={styles.modalItemText}>
                      {numberTextMapping[input].text}
                    </Text>
                  </View>
                ))}
              </ScrollView>
              <TouchableOpacity onPress={closeModal} style={styles.modalButtonBox}>
                <Text style={styles.modalCloseButton}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Confirmation Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={confirmationModalVisible}
          onRequestClose={() => setConfirmationModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Confirmation</Text>
              <Text style={styles.modalItemText}>
                Are you sure you want to clear RFID inputs?
              </Text>
              <View style={styles.modalButtons}>
                <TouchableOpacity onPress={handleConfirmClear}>
                  <Text style={styles.modalButton}>Confirm</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setConfirmationModalVisible(false)}
                >
                  <Text style={[styles.modalButton, styles.cancelButton]}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  newPageContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#9AD0C2',
    paddingTop: 30,
  },
  newPageText: {
    fontSize: 40,
    color: 'black',
    fontFamily: 'RobotoMono-Bold',
    marginBottom: 10,
  },
  whiteBox: {
    height: 500,
    width: 370,
    borderRadius: 10,
    backgroundColor: '#fff',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  input: {
    height: 0,
    width: 0,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 11,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    zIndex: 2,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 1,
  },
  icon: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  instructionImage: {
    width: 700,
    height: 200,
    resizeMode: 'contain',
  },
  // Modal styles
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: 300,
    maxHeight: 400,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 22,
    marginBottom: 10,
    fontFamily: 'RobotoMono-Bold',
    color: 'black',
  },
  modalItem: {
    marginBottom: 10,
    alignItems: 'center',
  },
  modalItemText: {
    fontSize: 18,
    fontFamily: 'RobotoMono-Bold',
  },
  modalButtonBox: {
    marginTop: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: 'blue',
    borderRadius: 5,
    backgroundColor: 'blue',
  },
  modalCloseButton: {
    fontSize: 18,
    fontFamily: 'RobotoMono-Bold',
    color: '#fff',
    textAlign: 'center',
    backgroundColor: 'blue',
  },
  // Confirmation Modal styles
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  modalButton: {
    fontSize: 18,
    fontFamily: 'RobotoMono-Bold',
    color: '#fff',
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  cancelButton: {
    marginLeft: 10,
    backgroundColor: 'blue',
  },
});

export default TerminalPage;
