import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import onBoardingScreen from './screens/onBoardingScreen';
import loginScreen from './screens/loginScreen';
import SignUpScreen from './screens/SignUpScreen';



const AppStack = createStackNavigator();
const App = () => {
    return (
      <NavigationContainer>
        <AppStack.Navigator headerShown="false">
          <AppStack.Screen name="onBoarding" component={onBoardingScreen} />
          <AppStack.Screen name="Login" component={loginScreen} />
        </AppStack.Navigator>
      </NavigationContainer>
    );
};

export default App;
