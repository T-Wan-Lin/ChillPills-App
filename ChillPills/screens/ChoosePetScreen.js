import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Input, Image, useWindowDimensions } from 'react-native';

import CustomButton from '../Components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import CasperBadge from '../assets/CasperBadge.png';

const ChoosePetScreen = () => {
  const { height } = useWindowDimensions();
  const onChosen = () => {
    console.warn("Store user choice, nav to choose interval");
    
  };
return (
    <View style={styles.root}>
      <Text> Choose your adorable pet! </Text>
      <Text> </Text>
      <Image
        source={CasperBadge}
        style={[styles.badge, { height: height * 0.5 }]}
        resizeMode="contain"
      />
      <Text> </Text> 
      <Text>Casper, the Curious Prince-in-waiting</Text>
      <Text> </Text> 
      <CustomButton text="Choose" onPress={onChosen} />
    </View>
  );
};


export default ChoosePetScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    //justifyContent: 'center',
    padding: 50,
    backgroundColor: '#FCF6E2',
  },
  badge: {
    width: '70%',
    maxWidth: 150,
    maxHeight: 150,
  },
});