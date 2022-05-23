import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, Image, useWindowDimensions} from 'react-native';
import Logo from '../assets/loginLogo.png';
import CustomInput from '../Components/CustomInput';

const loginScreen = () => {
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState(''); 

  const {height} = useWindowDimensions();
  return (
    <View style={styles.root}>
      <Image source = {Logo} style ={[styles.logo, {height: height * 0.5}]}
      resizeMode = "contain" />

      <CustomInput placeholder= "Email" value ={email} setValue={setEmail} />
      <CustomInput placeholder = "Password" value ={password} setValue={setPassword} secureTextEntry={true}/>
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
