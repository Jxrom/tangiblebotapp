import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartUpPage from './components/StartUpPage';
import TerminalPage from './components/TerminalPage';
import BluetoothPage from './components/BluetoothPage';
import LearningPage from './components/LearningPage';
import ForwardPage from './components/LearningPageModules/ForwardPage';
import BackwardPage from './components/LearningPageModules/BackwardPage';
import LeftPage from './components/LearningPageModules/LeftPage';
import RightPage from './components/LearningPageModules/RightPage';
import LoopingPage from './components/LearningPageModules/LoopingPage';
import ConditionalPage from './components/LearningPageModules/ConditionalPage';
import ObstaclePage from './components/LearningPageModules/ObstaclePage';
import Obstacle1Page from './components/LearningPageModules/Obstacle1Page';
import ProgrammingPage from './components/LearningPageModules/ProgrammingPage';
import SquarePage from './components/LearningPageModules/SquarePage';
import A0Page from './components/LearningPageModules/A0Page';
import A1Page from './components/LearningPageModules/A1Page';
import A2Page from './components/LearningPageModules/A2Page';
import A3Page from './components/LearningPageModules/A3Page';
import A4Page from './components/LearningPageModules/A4Page';
import A5Page from './components/LearningPageModules/A5Page';
import IVDPage from './components/LearningPageModules/IVDPage';
import Con0Page from './components/LearningPageModules/Con0Page';
import Prog0Page from './components/LearningPageModules/Prog0Page';
import Loop0Page from './components/LearningPageModules/Loop0Page';
import Obs0Page from './components/LearningPageModules/Obs0Page';
import Pol0Page from './components/LearningPageModules/Pol0Page';
import Module4Page from './components/LearningPageModules/Module4Page';

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

        {/* New screens */}
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
        <Stack.Screen
          name="LoopingPage"
          component={LoopingPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ConditionalPage"
          component={ConditionalPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ObstaclePage"
          component={ObstaclePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Obstacle1Page"
          component={Obstacle1Page}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProgrammingPage"
          component={ProgrammingPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SquarePage"
          component={SquarePage}
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
          name="IVDPage"
          component={IVDPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Con0Page"
          component={Con0Page}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Prog0Page"
          component={Prog0Page}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Loop0Page"
          component={Loop0Page}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Obs0Page"
          component={Obs0Page}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Pol0Page"
          component={Pol0Page}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Module4Page"
          component={Module4Page}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;