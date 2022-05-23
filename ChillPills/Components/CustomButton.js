import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'


const CustomButton = () => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.text}> Button </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0095AB',
        width: '100%',
        padding: 20,
        marginVertical: 20,
        alignItems: 'center',
        borderRadius: 5,


    },
    text: {
        fontWeight: 'bold',
        color: '#FFFFFF',
    }
});

export default CustomButton