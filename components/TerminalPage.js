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
    import BluetoothSerial from 'react-native-bluetooth-serial';
    import { useNavigation } from '@react-navigation/native';


    const TerminalPage = () => {
      const [textInputValue, setTextInputValue] = useState('');
      const [rfidInputs, setRfidInputs] = useState([]);
      const [modalVisible, setModalVisible] = useState(false);
      const [confirmationModalVisible, setConfirmationModalVisible] = useState(false);
      const [startEndProgramModalVisible, setStartEndProgramModalVisible] = useState(false);
      const navigation = useNavigation();
      const scrollViewRef = useRef(null);
      const [selectedImageToRemove, setSelectedImageToRemove] = useState(null);
      const [clearConfirmationModalVisible, setClearConfirmationModalVisible] = useState(false);
      const lastClickTimeRef = useRef(null);


      
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
          setRfidInputs((prevInputs) => [...prevInputs, text]);

          setTimeout(() => {
            setTextInputValue('');
            textInputRef.current.focus();
          }, 100);
        } else if (text.length === 10) {
          setTextInputValue('');
        }
        // After adding a new image, scroll to the bottom
        if (scrollViewRef.current) {
          scrollViewRef.current.scrollToEnd({ animated: true });
        }
      };

      useEffect(() => {
        const focusInterval = setInterval(() => {
          textInputRef.current.focus();
        }, 100); // Adjust the interval as needed (e.g., every 5 seconds)
      
        // Clear the interval when the component is unmounted
        return () => clearInterval(focusInterval);
      }, []); // Empty dependency array means the effect runs once after the initial render
      

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
      
        // Check if the start program RFID value is at the first index
        if (rfidInputs.length === 0 || rfidInputs[0] !== '0619291971') {
          // Display modal with alert
          setStartEndProgramModalVisible(true);
          return;
        }
      
        // Check if the end program RFID value is at the last index
        if (rfidInputs.length === 0 || rfidInputs[rfidInputs.length - 1] !== '0296718371') {
          // Display modal with alert
          setStartEndProgramModalVisible(true);
          return;
        }
      
        // Mapping of RFID values to characters
        const rfidMapping = {
          '0624878627': 'R',
          '0435422851': 'L',
          '0618750739': 'F',
          '0435629539': 'B',
        };
      
        // Iterate over RFID inputs
        let delay = 0;
        for (const rfidInput of rfidInputs) {
          // Check if the RFID input is in the mapping
          if (rfidMapping.hasOwnProperty(rfidInput)) {
            const characterToWrite = rfidMapping[rfidInput];
      
            // Set a fixed delay for 'Turn Right' and 'Turn Left' commands
            if (characterToWrite === 'R' || characterToWrite === 'L') {
              delay = 600; //  for turn commands
            } else {
              // Find the parameter value for core movements
              const parameterIndex = rfidInputs.indexOf(rfidInput) + 1;
              if (parameterIndex < rfidInputs.length && typeof rfidInputs[parameterIndex] === 'number') {
                // Calculate the delay based on the parameter value (assuming each unit is 1 second)
                delay = rfidInputs[parameterIndex] * 1000;
              } else {
                delay = 2000; // Default delay if no parameter is provided
              }
            }
      
            // Write character to BluetoothSerial
            try {
              await BluetoothSerial.write(characterToWrite);
              console.log('Write success:', characterToWrite);
            } catch (err) {
              console.log('Write error:', err);
            }
      
            // Delay for the specified duration
            await new Promise(resolve => setTimeout(resolve, delay));
      
            // After the delay, send the character 'S'
            await BluetoothSerial.write('S');
            console.log('Write success: S');
      
            // Reset delay for the next iteration
            delay = 0;
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
        setClearConfirmationModalVisible(true);
      };
      
    

      const handleConfirmClear = () => {
        // Clear the RFID inputs
        setRfidInputs([]);
        // Close the confirmation modal
        setClearConfirmationModalVisible(false);
      };
      

      const determineAlignment = (input) => {
        const controlInstructions = ['If', 'End If', 'Else', 'Loop', 'End Loop'];
      
        if (controlInstructions.includes(numberTextMapping[input].text)) {
          return 'center';
        } else if (input === '0619291971' || input === '0296718371') {
          return 'flex-start';
        } else {
          return 'flex-end';
        }
      };

      // New Modal for Start and End Program Alert
    const closeStartEndProgramModal = () => {
      setStartEndProgramModalVisible(false);
    };

    const handleCloseButton = () => {
      // Add your logic for the top-right button press
      console.log('Close button pressed');
      navigation.navigate('StartUpPage')
      // ...
    };

    const handleMoveUp = () => {
      // Add your logic for the top-right button press
      console.log('Up button pressed');
      // ...
    };

    const handleMoveDown = () => {
      // Add your logic for the top-right button press
      console.log('Down button pressed');
      // ...
    };

    const handleImageClick = (index) => {
      const clickedInput = rfidInputs[index];
  
      // Get the current timestamp
      const currentTime = new Date().getTime();
  
      // Check if the image was clicked again within 500 milliseconds
      if (lastClickTimeRef.current && currentTime - lastClickTimeRef.current < 500) {
        // Set the selected image to be removed
        setSelectedImageToRemove(clickedInput);
  
        // Show the confirmation modal
        setConfirmationModalVisible(true);
      }
  
      // Update the last click time
      lastClickTimeRef.current = currentTime;
    };
  
    const handleConfirmRemove = () => {
      // Remove the selected RFID input and its corresponding image
      setRfidInputs((prevInputs) => prevInputs.filter((input) => input !== selectedImageToRemove));
  
      // Hide the confirmation modal
      setConfirmationModalVisible(false);
    };
  
    const handleCancelRemove = () => {
      // Clear the selected image to be removed
      setSelectedImageToRemove(null);
  
      // Hide the confirmation modal
      setConfirmationModalVisible(false);
    };
    
    return (
      <View style={styles.newPageContainer} keyboardShouldPersistTaps="never">
        <Text style={[styles.newPageText, { position: 'absolute', top: 30, zIndex: 1, left: '20%' }]}>Program Terminal</Text>
        {/* Add the touchable opacity button in the top-right corner */}
        <TouchableOpacity onPress={handleCloseButton} style={styles.closeButton}>
          <Image
            source={require('../assets/buttons/terminalPageButtons/close.png')} // Update with your button image
            style={styles.closeIcon}
          />
        </TouchableOpacity>
        <View style={{ opacity: rfidInputs.length ? 0 : 0 }}>
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
        <ScrollView style={styles.whiteBox} ref={scrollViewRef} onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}>
        {rfidInputs.map((input, index) => (
          <TouchableOpacity key={index} onPress={() => handleImageClick(index)}>
            <View style={{ alignItems: determineAlignment(input) }}>
              <Image
                source={numberTextMapping[input].image}
                style={styles.instructionImage}
              />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
        <View style={styles.buttonContainer}>
          {/* Existing four buttons */}
          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={handleMoveUp}>
              <Image
                source={require('../assets/buttons/terminalPageButtons/moveUp.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleMoveDown}>
              <Image
                source={require('../assets/buttons/terminalPageButtons/moveDown.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleClearPress}>
              <Image
                source={require('../assets/buttons/terminalPageButtons/delete.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleVerifyPress}>
              <Image
                source={require('../assets/buttons/terminalPageButtons/compile.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>

          {/* New two buttons below the existing four */}
          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={handleStopPress}>
              <Image
                source={require('../assets/buttons/terminalPageButtons/stop.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePlayPress}>
              <Image
                source={require('../assets/buttons/terminalPageButtons/start.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </View>
    
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
    
        {/* Start and End Program Alert Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={startEndProgramModalVisible}
          onRequestClose={closeStartEndProgramModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Alert</Text>
              <Text style={styles.modalItemText}>
                Creating a Program requires Start and End!
              </Text>
              <TouchableOpacity onPress={closeStartEndProgramModal} style={styles.modalButtonBox}>
                <Text style={styles.modalCloseButton}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
    
        {/* Specific Confirmation Modal */}
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
              Are you sure you want to remove this input?
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity onPress={handleConfirmRemove}>
                <Text style={styles.modalButton}>Confirm</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleCancelRemove}>
                <Text style={[styles.modalButton, styles.cancelButton]}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
  animationType="slide"
  transparent={true}
  visible={clearConfirmationModalVisible}
  onRequestClose={() => setClearConfirmationModalVisible(false)}
>
  <View style={styles.modalContainer}>
    <View style={styles.modalContent}>
      <Text style={styles.modalTitle}>Confirmation</Text>
      <Text style={styles.modalItemText}>
        Are you sure you want to clear all RFID inputs?
      </Text>
      <View style={styles.modalButtons}>
        <TouchableOpacity onPress={handleConfirmClear}>
          <Text style={styles.modalButton}>Confirm</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setClearConfirmationModalVisible(false)}>
          <Text style={[styles.modalButton, styles.cancelButton]}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
</Modal>

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
        fontSize: 20,
        color: 'white',
        fontFamily: 'RobotoMono-Bold',
        marginBottom: 1,
        padding: 5,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 10,
        backgroundColor: '#265073',
        borderWidth: 1,
        textShadowColor: 'black',  // Outline color
        textShadowOffset: { width: 1, height: 1 },  // Outline offset
        textShadowRadius: 2,  // Outline radius,
      },
      whiteBox: {
        height: 500,
        width: 370,
        borderRadius: 10,
        backgroundColor: '#fff',
        marginBottom: 30,
        paddingTop: 30,
        borderWidth: 1,
      },
      // Add a new style for the container of all buttons
      buttonContainer: {
      flexDirection: 'column',
      alignItems: 'center',
      },

      // Modify the existing styles for the buttonRow and icon
      buttonRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 15,
      },
      icon: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
        margin: 1,
      },
      instructionImage: {
        margin: 5,
      },
      input: {
        height: 0,
        width: 0,
        borderRadius: 10,
        backgroundColor: '#fff',
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
      // Add this style in your StyleSheet.create block
      closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 2,
      },
      closeIcon: {
        width: 43,
        height: 43,
        resizeMode: 'contain',
        margin: 1,
      },

    });

    export default TerminalPage;