import { View, Text, StatusBar, Image, StyleSheet } from 'react-native'
import Button from '../components/Button'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  WelcomeScreen: undefined;
  LoginScreen: undefined;
  SignUpScreen: undefined;
  MainTabs: undefined;
};

type WelcomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'WelcomeScreen'
>;

// ===========================
// Main code
// ===========================

const WelcomeScreen = () => {
  const navigation = useNavigation<WelcomeScreenNavigationProp>();

  return (
    <View style = {styles.container}>
      <StatusBar barStyle = {"dark-content"} />
      <Image source={require('../assets/images/logo.png')} style = {styles.logo}/>
      <Text style = {styles.title}>Mealify</Text>
      <Text style = {styles.tagline}>Freash meals, fast delivery</Text>
      <Button
        title = "Get Started"
        onPress = { () => navigation.navigate('LoginScreen') }
      />
    </View>
  )
};



// ===========================
// Styles
// ===========================

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 155,
        alignItems: 'center',
        backgroundColor: '#EFFCF1',
    },
    logo: {
        width: 90,
        height: 90,
        marginBottom: 10,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 70,
        marginBottom: 12,
        color: '#1A482F',
    },
    tagline: {
        fontSize: 23,
        marginBottom: 265,
        color: '#255B31',
    },
});

export default WelcomeScreen