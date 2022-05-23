import React from 'react';
import {View, Text, Button, StyleSheet, Image, useWindowDimensions} from 'react-native';
import Logo from '../assets/loginLogo.png';
import CustomInput from '../Components/CustomInput';

const loginScreen = () => {
  const {height} = useWindowDimensions();
  return (
    <View style={styles.root}>
      <Image source = {Logo} style ={[styles.logo, {height: height * 0.5}]}
      resizeMode = "contain" />

      <CustomInput />
      <CustomInput />
    </View>
  );
};

export default loginScreen;

const styles = StyleSheet.create({
  root: {
    //flex: 1,
    alignItems: 'center',
    //justifyContent: 'center',
    padding: 50,
    backgroundColor: '#FCF6E2',
  },
  logo: {
    width: '70%',
    maxWidth: 150,
    maxHeight: 150,
  },
});
