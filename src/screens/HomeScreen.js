import { View, Text, StyleSheet, Image } from 'react-native'
import SearchBar from '../components/SearchBar.js';
import React from 'react'


// ===========================
// Main code
// ===========================

const HomeScreen = () => {
  return (
    <View style = {styles.container}>
      <View style = {styles.header}>
        <View>
          <Text style = {styles.greeting}>Hi, Saba  👋</Text>
          <Text style = {styles.subtitle}>Find your favorite meal</Text>
        </View>
        <Image source={require('../assets/images/avatar.jpg')} style = {styles.avatar}></Image>        
      </View>
      <SearchBar placeholder = {'Search'} />
    </View>
  )
};



// ===========================
// Styles
// ===========================

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFFCF1',
        paddingHorizontal: 25,
        paddingTop: 80,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 15,
    },
    greeting: {
        fontSize: 30,
        fontWeight: '600',
        color: '#1A482F',
    },
    subtitle: {
        fontSize: 16,
        color: '#2B5E3D',
        marginTop: 5,
    },
    avatar: {
      width: 60,
      height: 60,
      borderRadius: 30,
      borderWidth: 2,
      borderColor: '#2B5E3D',
    },
});

export default HomeScreen