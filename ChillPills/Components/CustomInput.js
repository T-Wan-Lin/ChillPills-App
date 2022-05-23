import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native'

const CustomInput = () => {
    return (
        <View style = {styles.container}>
            <TextInput placeholder = "placeholder" style ={styles.input} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        height: '7%',
        borderColor: '#8A584C',
        borderWidth: 1,
        borderRadius: 5,

        paddingVertical:10,
        paddingHorizontal: 10,
        marginVertical: 10,

    },
    input: {},
})

export default CustomInput
