import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartUpPage from './components/StartUpPage'
import TerminalPage from './components/TerminalPage';
import BluetoothPage from './components/BluetoothPage';
import MenuPage from './components/MenuPage';
import AboutPage from './components/AboutPage';
import LearningPage from './components/LearningPage';

const Stack = createStackNavigator();

const App = () => {
  return (  
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartUpPage">
        <Stack.Screen
          name="StartUpPage"
          component={StartUpPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MenuPage"
          component={MenuPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LearningPage"
          component={LearningPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TerminalPage"
          component={TerminalPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AboutPage"
          component={AboutPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BluetoothPage"
          component={BluetoothPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
