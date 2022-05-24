import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, Input} from 'react-native';
import CustomInput from '../Components/CustomInput';
import CustomButton from '../Components/CustomButton';


const SignUpScreen = () => {
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState(''); 
  const[passwordRepeat,setPasswordRepeat] = useState('');
  const onRegisterPressed = () => {
    console.warn("Register");
  };
  const onSignUpGoogle= () => {
    console.warn("Google Sign Up");
  };
  const onLoginPressed= () => {
    console.warn("Redirecting to Login Page");
  };

  return (
    <View style={styles.root}>
      <Text style = {styles.title}>Create An Account</Text>

      <CustomInput 
      placeholder= "Email" 
      value ={email} 
      setValue={setEmail} 
      />
      
      <CustomInput 
      placeholder = "Password" 
      value ={password} 
      setValue={setPassword} 
      secureTextEntry={true}
      />
      <CustomInput 
      placeholder = "Repeat Password" 
      value ={passwordRepeat} 
      setValue={setPasswordRepeat} 
      secureTextEntry={true}
      />
      
      <CustomButton 
      text = "Register" 
      onPress ={onRegisterPressed}
      />
      
      <CustomButton 
      text = "Sign Up with Google" 
      onPress ={onSignUpGoogle}
      bgColor = "#FAE9EA"
      fgColor="#DD4D44"
      />

      <CustomButton 
      text = "Already have an Account? Login!" 
      onPress ={onLoginPressed} 
      type ="TERTIARY"
      />
    </View>
  );
};

export default SignUpScreen;

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
  title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: "#8A584C",
      margin: 10,
  },
});