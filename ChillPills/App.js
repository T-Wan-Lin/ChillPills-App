import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import onBoardingScreen from './screens/onBoardingScreen';
import loginScreen from './screens/loginScreen';
import SignUpScreen from './screens/SignUpScreen';
import ChoosePetScreen from './screens/ChoosePetScreen';
import HomeScreen from './screens/HomeScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';

const AppStack = createStackNavigator();
const App = () => {
    return (
      <NavigationContainer>
        <AppStack.Navigator headerShown="false">
          <AppStack.Screen name="OnBoarding" component={onBoardingScreen} />
          <AppStack.Screen name="Login" component={loginScreen} />
          <AppStack.Screen name="Sign Up" component={SignUpScreen} />
          <AppStack.Screen name="Reset Password" component={ResetPasswordScreen} />  
          <AppStack.Screen name="Choose A Pet!" component={ChoosePetScreen} /> 
          <AppStack.Screen name="Home" component={HomeScreen} />   
        </AppStack.Navigator>
      </NavigationContainer>
    );
};

export default App;
