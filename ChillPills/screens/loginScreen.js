import React from 'react';
import {View, Text, Button, StyleSheet, Image, useWindowDimensions} from 'react-native';
import Logo from '../assets/loginLogo.png';

const loginScreen = () => {
  const {height} = useWindowDimensions();
  return (
    <View style={styles.root}>
      <Image source = {Logo} style ={[styles.logo, {height: height * 0.3}]}
      resizeMode = "contain" />
    </View>
  );
};

export default loginScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    //justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 100,
    maxHeight: 100,
  },
});
