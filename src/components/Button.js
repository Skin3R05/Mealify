import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'



// ===========================
// Main code
// ===========================

const Button = ({ title, onPress, style }) => {
  return (
        <TouchableOpacity style = {styles.button} onPress = {onPress}>
            <Text style = {styles.text}>{title}</Text>
        </TouchableOpacity>
  )
};



// ===========================
// Styles
// ===========================

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#53A161",
        width: '80%',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 18,
        alignItems: 'center',
        marginVertical: 10,
        borderWidth: 0.2,
    },
    text: {
        color: '#fff',
        fontSize: 25,
    }, 
});


export default Button