import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartUpPage from './components/StartUpPage';
import TerminalPage from './components/TerminalPage';
import BluetoothPage from './components/BluetoothPage';
import LearningPage from './components/LearningPage';
import Module1Topic1 from './components/LearningPageModules/Module1Topic1';
import Module2Topic1 from './components/LearningPageModules/Module2Topic1';
import A0Page from './components/LearningPageModules/A0Page';
import A1Page from './components/LearningPageModules/A1Page';
import A2Page from './components/LearningPageModules/A2Page';
import A3Page from './components/LearningPageModules/A3Page';
import A4Page from './components/LearningPageModules/A4Page';
import A5Page from './components/LearningPageModules/A5Page';
import Module1Topic0 from './components/LearningPageModules/Module1Topic0';
import Module2Topic0 from './components/LearningPageModules/Module2Topic0';
import Module0Topic0 from './components/LearningPageModules/Module0Topic0';
import Module3Topic0 from './components/LearningPageModules/Module3Topic0';
import Module4Topic0 from './components/LearningPageModules/Module4Topic0';
import Module5Topic0 from './components/LearningPageModules/Module5Topic0';
import SplashScreen from './components/SplashScreen'; // Import the SplashScreen component

const Stack = createStackNavigator();

const App = () => {
  return (  
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {/* SplashScreen */}
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />

        {/* Existing screens */}
        <Stack.Screen
          name="StartUpPage"
          component={StartUpPage}
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
          name="BluetoothPage"
          component={BluetoothPage}
          options={{ headerShown: false }}
        />

        {/* New screens */}
        <Stack.Screen
          name="Module1Topic1"
          component={Module1Topic1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Module2Topic1"
          component={Module2Topic1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="A0Page"
          component={A0Page}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="A1Page"
          component={A1Page}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="A2Page"
          component={A2Page}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="A3Page"
          component={A3Page}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="A4Page"
          component={A4Page}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="A5Page"
          component={A5Page}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Module1Topic0"
          component={Module1Topic0}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Module2Topic0"
          component={Module2Topic0}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Module0Topic0"
          component={Module0Topic0}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Module3Topic0"
          component={Module3Topic0}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Module4Topic0"
          component={Module4Topic0}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Module5Topic0"
          component={Module5Topic0}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
