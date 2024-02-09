import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, FlatList, Animated } from 'react-native';

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
  '0619220099': {
    text: 'If',
    image: require('../assets/instructions/if.png'),
  },
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
  '0619293587': {
    text: 'One',
    image: require('../assets/instructions/1.png'),
  },
  '0437147523': {
    text: 'Two',
    image: require('../assets/instructions/2.png'),
  },
  '0622660643': {
    text: 'Three',
    image: require('../assets/instructions/3.png'),
  },
  '0293694387': {
    text: 'Four',
    image: require('../assets/instructions/4.png'),
  },
  '3996473363': {
    text: 'Five',
    image: require('../assets/instructions/5.png'),
  },
};

const HowToUsePage = () => {
  const [textBoxContent, setTextBoxContent] = useState('');
  const [allInputValues, setAllInputValues] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Add new state variable
  const textInputRef = useRef(null);

  useEffect(() => {
    // Focus on the text input when the component mounts
    textInputRef.current.focus();
  }, []);

  useEffect(() => {
    // Log the array whenever it changes
    console.log('All Input Values:', allInputValues);

    // Update the currentImageIndex when allInputValues changes
    setCurrentImageIndex(allInputValues.length - 1);
  }, [allInputValues]);

  const handleTextInputChange = (text) => {
    setTextBoxContent(text);

    // Check if the input text is one of the recognized commands
    if (numberTextMapping[text]) {
      // Update the state variable with the complete input value
      setAllInputValues((prevValues) => [...prevValues, text]);

      // Automatically remove the input text after 1 second
      setTimeout(() => {
        // Only clear the input if it's not a start or end command
        if (!isStartEndCommand(text)) {
          setTextBoxContent('');
        }
        // Focus on the text input again
        textInputRef.current.focus();
      }, 1000);
    }
  };

  const isStartEndCommand = (text) => {
    return text === 'Start program' || text === 'End program';
  };

  const flatListRef = useRef(null);
  const shakeAnimationValue = useRef(new Animated.Value(0)).current;

  const animateShaking = () => {
    Animated.sequence([
      Animated.timing(shakeAnimationValue, {
        toValue: 10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimationValue, {
        toValue: -10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimationValue, {
        toValue: 10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimationValue, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const getImageStyles = (text, index) => {
    const isStartEnd = isStartEndCommand(text);
    const isSpecificCommands = ['0619291971', '0296718371'].includes(text);

    return [
      styles.commandImage,
      {
        opacity: shakeAnimationValue.interpolate({
          inputRange: [-10, 10],
          outputRange: isStartEnd || isSpecificCommands ? [0.5, 1] : [0.5, 0.5],
        }),
        transform: [
          {
            translateX: shakeAnimationValue,
          },
        ],
      },
      index === currentImageIndex ? { opacity: 1 } : { opacity: 0.5 },
      isStartEnd || isSpecificCommands ? { marginLeft: 10 } : { marginLeft: 0 },
    ];
  };

  useEffect(() => {
    // Scroll to the end of the list whenever allInputValues changes
    flatListRef.current.scrollToEnd({ animated: true });

    // Animate the shaking
    animateShaking();
  }, [allInputValues]);


  return (
    <View style={styles.connectPageContainer}>
      <Text style={styles.connectPageText}>How To Use</Text>
      <TextInput
        style={styles.textBox}
        value={textBoxContent}
        onChangeText={handleTextInputChange}  
        ref={textInputRef}
        showSoftInputOnFocus={false}
      />
      <View style={styles.whiteBox}></View>
      <View style={styles.bottomContainer}>
      <View style={styles.programTerminalBox}>
        {/* Use a FlatList for top-to-bottom scrolling */}
        <FlatList
          ref={flatListRef} // Create a reference to the FlatList
          data={allInputValues}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <Animated.Image
              source={numberTextMapping[item].image}
              style={getImageStyles(item, index)}
            />
          )}
          horizontal={false} // Set to false for vertical scrolling
          showsVerticalScrollIndicator={false} // Optional: Hide vertical scrollbar
          contentContainerStyle={{ flexGrow: 1 }} // Ensure content expands to fill available space
        />
      </View>
        <View style={styles.buttonsBox}>
          <TouchableOpacity style={styles.buttonImageContainer}>
            <Image
              source={require('../assets/buttons/verify.png')}
              style={styles.buttonImage}
            />
          </TouchableOpacity>
            <TouchableOpacity style={styles.buttonImageContainer}>
              <Image
                source={require('../assets/buttons/clear.png')}
                style={styles.buttonImage}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonImageContainer}>
              <Image
                source={require('../assets/buttons/stop.png')}
                style={styles.buttonImage}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonImageContainer}>
              <Image
                source={require('../assets/buttons/play.png')}
                style={styles.buttonImage}
              />
            </TouchableOpacity>
          </View>
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
    marginBottom: 1,
  },
  textBox: {
    width: '90%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
    marginTop: 1,
    paddingHorizontal: 10,
  },
  whiteBox: {
    width: '95%',
    height: 290,
    backgroundColor: 'white',
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
  },
  bottomContainer: {
    flexDirection: 'row',
    width: '95%',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  programTerminalBox: {
    width: '70%',
    height: 360,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden', // Clip content that goes beyond the container
  },
  scrollViewContent: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  commandImage: {
    margin: 3, // Adjust margin between images
  },
  buttonsBox: {
    width: '25%',
    height: 360,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
    flexDirection: 'column',
  },
  buttonImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonImage: {
    width: '92%',
    height: '91%',
    resizeMode: 'contain',
    borderRadius: 10,
  },
});

export default HowToUsePage;
