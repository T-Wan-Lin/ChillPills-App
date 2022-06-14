import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Image, useWindowDimensions, ScrollView } from 'react-native';

import CustomButton from '../Components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import CasperBadge from '../assets/CasperBadge.png';
import CamoBadge from '../assets/CamoBadge.png';
import CuincyBadge from '../assets/CuincyBadge.png'; 

const ChoosePetScreen = () => {
  const { height } = useWindowDimensions();
  const onChosen = () => {
    console.warn("Store user choice, nav to choose interval");
    
  };
return (
  <ScrollView>
    <View style={styles.root}>
      <Text style = {styles.title}> Choose your adorable pet! </Text>
      <Text> </Text>
      <Image
        source={CasperBadge}
        style={[styles.badge, { height: height * 0.5 }]}
        resizeMode="contain"
      />
      <Text> </Text> 
      <Text style = {styles.description}>Casper the Curious Prince-in-waiting</Text>
      <Text> </Text> 
      <CustomButton text="Choose" onPress={onChosen} />

      <Text> </Text>
      <Image
        source={CamoBadge}
        style={[styles.badge, { height: height * 0.5 }]}
        resizeMode="contain"
      />
      <Text> </Text> 
      <Text style = {styles.description}>Camo the Cloudchaser</Text>
      <Text> </Text> 
      <CustomButton text="Choose" onPress={onChosen} />

      <Text> </Text>
      <Image
        source={CuincyBadge}
        style={[styles.badge, { height: height * 0.5 }]}
        resizeMode="contain"
      />
      <Text> </Text> 
      <Text style = {styles.description}>Cuincy the Creative Conceptualizer</Text>
      <Text> </Text> 
      <CustomButton text="Choose" onPress={onChosen} />

    </View>
    </ScrollView>
  );
};


export default ChoosePetScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontFamily: "Futura",
  },
  description: {
    fontFamily: "Futura",
    fontStyle: 'italic',
  },

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