import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  useWindowDimensions,
  Input,
} from 'react-native';
import Logo from '../assets/loginLogo.png';
import CustomInput from '../Components/CustomInput';
import CustomButton from '../Components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

//for users with exisiting accounts

const LoginScreen = () => {
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');
  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    console.log(user);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  // if (initializing) return null;

  const onLoginPressed = async () => {
    //console.warn("Log In");
    //validate user
    try {
      await auth().signInWithEmailAndPassword(email, password);
      //await console.log(auth().currentUser);
      //await console.log(user+5);
      //await console.debug('user+5');
    } catch (e) {
      console.log(e);
    }
    if (user) {
      await console.warn(user);
      navigation.navigate('Home');
    }

    //navigation.navigate('Home');
  };
  const onForgetPressed = () => {
    //console.warn("Forgot Password");
    navigation.navigate('Reset Password');
  };

  const onSignUpPressed = () => {
    //console.warn("Redirecting to Sign Up Page");
    navigation.navigate('Sign Up');
  };

  return (
    <View style={styles.root}>
      <Image
        source={Logo}
        style={[styles.logo, { height: height * 0.5 }]}
        resizeMode="contain"
      />

      <CustomInput placeholder="Email" value={email} setValue={setEmail} />

      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />

      <CustomButton text="Log in" onPress={onLoginPressed} />

      <CustomButton
        text="Forgot Password?"
        onPress={onForgetPressed}
        type="TERTIARY"
      />

      <CustomButton
        text="First-time user? Create an Account!"
        onPress={onSignUpPressed}
        type="TERTIARY"
      />
    </View>
  );
};

export default LoginScreen;

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
