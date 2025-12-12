import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'



// ===========================
// Main code
// ===========================

type TextInputFieldProps = {
    placeholder?: string;
    secureTextEntry?: boolean;
    value: string;
    onChangeText: (text: string) => void
}

const TextInputField: React.FC<TextInputFieldProps> = ({ placeholder, secureTextEntry, value, onChangeText }) => {
  return (

        <TextInput
            style = {styles.input}
            placeholder = {placeholder}
            placeholderTextColor = "#888"
            secureTextEntry = {secureTextEntry}
            value = {value}
            onChangeText= {onChangeText}
        />

  )
};



// ===========================
// Styles
// ===========================

const styles = StyleSheet.create ({
    input: {
        backgroundColor: '#fff',
        width: '80%',
        height: '8%',
        borderRadius: 16,
        paddingVertical: 12,
        paddingHorizontal: 20,
        marginVertical: 10,
        fontSize: 16,
    },
});

export default TextInputField