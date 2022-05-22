import React from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';

const loginScreen = () => {
  return (
    <View style={styles.container}>
      <Text>LoginScreen</Text>
      <Button title="Click me" onPress={() => alert('Button Clicked!')} />
    </View>
  );
};

export default loginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
