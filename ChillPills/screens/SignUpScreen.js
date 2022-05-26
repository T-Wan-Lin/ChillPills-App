import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Input } from 'react-native';
import CustomInput from '../Components/CustomInput';
import CustomButton from '../Components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const navigation = useNavigation();

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    console.warn(user);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const onRegisterPressed = async () => {
    //console.warn("Register");
    try {
      await auth().createUserWithEmailAndPassword(email, password);
    } catch (e) {
      console.log(e);
    }
    navigation.navigate('Choose A Pet!');
  };
  const onLoginPressed = () => {
    //console.warn("Redirecting to Login Page");
    navigation.navigate('Login');
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Create An Account</Text>

      <CustomInput placeholder="Email" value={email} setValue={setEmail} />

      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />

      <CustomButton text="Register" onPress={onRegisterPressed} />

      <CustomButton
        text="Already have an Account? Login!"
        onPress={onLoginPressed}
        type="TERTIARY"
      />
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
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
    color: '#8A584C',
    margin: 10,
  },
});
