import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartUpPage from './components/StartUpPage';
import TerminalPage from './components/TerminalPage';
import BluetoothPage from './components/BluetoothPage';
import LearningPage from './components/LearningPage';

// Import the new topic pages for Module 1
import ForwardPage from './components/LearningPageModules/ForwardPage';
import BackwardPage from './components/LearningPageModules/BackwardPage';
import LeftPage from './components/LearningPageModules/LeftPage';
import RightPage from './components/LearningPageModules/RightPage';

// Import the new topic page for Looping
import LoopingPage from './components/LearningPageModules/LoopingPage';

// Import the new IntroConditionalPage component
import ConditionalPage from './components/LearningPageModules/ConditionalPage';

// Import the ObstaclePage and Obstacle1Page components
import ObstaclePage from './components/LearningPageModules/ObstaclePage';
import Obstacle1Page from './components/LearningPageModules/Obstacle1Page';

// Import the new ProgrammingPage component
import ProgrammingPage from './components/LearningPageModules/ProgrammingPage';

// Import the new Module4Page component
import Module4Page from './components/LearningPageModules/Module4Page';

// Import the new SquarePage component
import SquarePage from './components/LearningPageModules/SquarePage';

const Stack = createStackNavigator();

const App = () => {
  return (  
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartUpPage">
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

        {/* New screens for the topics in Module 1 */}
        <Stack.Screen
          name="ForwardPage"
          component={ForwardPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BackwardPage"
          component={BackwardPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LeftPage"
          component={LeftPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RightPage"
          component={RightPage}
          options={{ headerShown: false }}
        />

        {/* New screen for the Looping topic */}
        <Stack.Screen
          name="LoopingPage"
          component={LoopingPage}
          options={{ headerShown: false }}
        />

        {/* New screen for the ConditionalPage */}
        <Stack.Screen
          name="ConditionalPage"
          component={ConditionalPage}
          options={{ headerShown: false }}
        />

        {/* New screen for the ObstaclePage */}
        <Stack.Screen
          name="ObstaclePage"
          component={ObstaclePage}
          options={{ headerShown: false }}
        />

        {/* New screen for the Obstacle1Page */}
        <Stack.Screen
          name="Obstacle1Page"
          component={Obstacle1Page}
          options={{ headerShown: false }}
        />

        {/* New screen for the ProgrammingPage */}
        <Stack.Screen
          name="ProgrammingPage"
          component={ProgrammingPage}
          options={{ headerShown: false }}
        />

        {/* New screen for Module 4 */}
        <Stack.Screen
          name="Module4Page"
          component={Module4Page}
          options={{ headerShown: false }}
        />

        {/* New screen for SquarePage */}
        <Stack.Screen
          name="SquarePage"
          component={SquarePage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
