import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator } from '@react-navigation/stack';

import onBoardingScreen from './screens/onBoardingScreen';
import loginScreen from './screens/loginScreen';
import { useEffect } from 'react/cjs/react.production.min';
import AsyncStorage, { AsyncStorageHook } from '@react-native-async-storage/async-storage';

const AppStack = createStackNavigator();
const App = () => {
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if(value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }

    });
  }, []);
  if(isFirstLaunch=== null) {
    return null;
  } else if(isFirstLaunch === true)
  {
    return (
      <NavigationContainer>
        <AppStack.Navigator 
          headerMode = "none"
        >
          <AppStack.Screen name = "onBoarding" component ={onBoardingScreen} />
          <AppStack.Screen name = "Login" component ={loginScreen} /> 
        </AppStack.Navigator>
      </NavigationContainer>
    ); 
  }
  else {
    <loginScreen />
  }
  
}

  

export default App;