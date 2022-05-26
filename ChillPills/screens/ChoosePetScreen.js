import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, Input} from 'react-native';

import CustomButton from '../Components/CustomButton';
import { useNavigation } from '@react-navigation/native';


const ChoosePetScreen = () => {
  const navigation = useNavigation();
  const onLogoutPressed = () => {
    //console.warn("Register");
    navigation.navigate('Login');
  };
  return (
    <View>
      <Text>ChoosePetScreen is Under Construction</Text>
      <CustomButton 
      text = "Log Out" 
      onPress ={onLogoutPressed}
      />
    </View>
  );
};

export default ChoosePetScreen