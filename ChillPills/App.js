import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import onBoardingScreen from './screens/onBoardingScreen';
import loginScreen from './screens/loginScreen';
import {useEffect} from 'react';
import AsyncStorage, {
  AsyncStorageHook,
} from '@react-native-async-storage/async-storage';

const AppStack = createStackNavigator();
const App = () => {
  const isFirstLaunch = true; //is this what's causing the hook error?

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        //setIsFirstLaunch(true);
      } else {
        //setIsFirstLaunch(false);
      }
    });
  }, []);
  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch === true) {
    return (
      <NavigationContainer>
        <AppStack.Navigator headerShown="false">
          <AppStack.Screen name="onBoarding" component={onBoardingScreen} />
          <AppStack.Screen name="Login" component={loginScreen} />
        </AppStack.Navigator>
      </NavigationContainer>
    );
  } else {
    <loginScreen />;
  }
};

export default App;
