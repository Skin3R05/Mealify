import { View, Text, TextInput, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'

// ===========================
// Main code
// ===========================

const SearchBar = ({ placeholder, value, onChangeText }) => {
  return (
    <View style = {styles.searchBar}>
        <Ionicons name="search" size = {20} color="#888" style = {{ marginRight: 8 }} />
        <TextInput
        placeholder = {placeholder}
        placeholderTextColor= '#888'
        style = {styles.searchInput}
        value = {value}
        onChangeText = {onChangeText}
        />
    </View>
  )
}

export default SearchBar

// ===========================
// Styles
// ===========================

const styles = StyleSheet.create ({
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        width: '100%',
        height: '8%',
        borderRadius: 14,
        paddingVertical: 12,
        paddingHorizontal: 20,
        marginVertical: 10,
        fontSize: 16,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    searchInput: {
        flex: 1,
        fontSize: 18,
        color: '#333',
    },
});