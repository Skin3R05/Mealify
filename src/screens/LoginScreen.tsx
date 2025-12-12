import { StatusBar, View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import Button from '../components/Button';
import TextInputField from '../components/TextInputField';
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
  MainTabs: undefined;
};

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'LoginScreen'
>;

// ===========================
// Main code
// ===========================

const LoginScreen = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();    
  const [email, setEmail] = useState('');  
  const [password, setPassword] = useState('');

  return (
    <View style = {styles.container}>
        <StatusBar barStyle={'dark-content'} />
        <Image source={require('../assets/images/logo.png')} style = {styles.logo}/>
        <Text style = {styles.title}>Mealify</Text>
        <Text style = {styles.login}>Login</Text>
        <TextInputField
            placeholder = "Email"
            value = {email}
            onChangeText={setEmail}
        />
        <TextInputField 
            placeholder= "Password"
            value= {password}
            onChangeText={setPassword}
            secureTextEntry
        />
        <Button
            title = "Login"
            onPress = {() => {
                if (!email || !password) {
                    alert('Please fill in all fields');
                }
                else if (!/\S+@\S+\.\S+/.test(email)) {
                    alert('Please enter a valid email address');
                } 
                else {
                    navigation.navigate('MainTabs')
                    // Later: connect to backend API
                }
            }}
        />
        <TouchableOpacity style = {styles.link} onPress = {() => {navigation.navigate("SignUpScreen")}}>
            <Text style = {styles.link1}>
                Don't have an account? 
            </Text>
            <Text style = {styles.link2}>
                Sign Up
            </Text>
        </TouchableOpacity>
    </View>

  )
};


// ===========================
// Styles
// ===========================

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        paddingTop: 155,
        alignItems: 'center',
        backgroundColor: "#EFFCF1",
    },
    logo: {
        width: 90,
        height: 90,
        marginBottom: 10,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 70,
        marginBottom: 26,
        color: '#1A482F',
    },
    login: {
        fontSize: 40,
        marginBottom: 10,
        color: '#2B5E3D',
    },
    link: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 18,
    },
    link1: {
        marginRight: 5,
        fontSize: 18,
    },
    link2: {
        fontSize: 18,
        color: '#2B5E3D',
    },
});

export default LoginScreen