import { StatusBar, View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import Button from '../components/Button.js'
import TextInputField from '../components/TextInputField.js'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Alert } from 'react-native'
import React from 'react'


// ===========================
// Main code
// ===========================


const SignUpScreen = () => {
    const [name, setName] = useState ('');
    const [email, setEmail] = useState('');  
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigation = useNavigation();

  return (
    <View style = {styles.container}>
        <StatusBar barStyle={'dark-content'} />
        <Image source={require('../assets/images/logo.png')} style = {styles.logo}/>
        <Text style = {styles.title}>Mealify</Text>
        <Text style = {styles.login}>Sign Up</Text>
        <TextInputField
            placeholder = "Name"
            value= {name}
            onChangeText={setName}
        />
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
        <TextInputField
            placeholder = "Confirm Password"
            value = {confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
        />        
        <Button
            title = "Sign Up"
            onPress = {() => {
                if (!name || !email || !password || !confirmPassword) {
                    alert('Please fill in all fields');
                }
                else if (!/\S+@\S+\.\S+/.test(email)) {
                    alert('Enter a valid email address');
                }
                else if (password.length < 6) {
                    alert('Password must be at least 6 characters');
                }
                else if (password !== confirmPassword) {
                    alert('Passwords do not match');
                }
                else {
                    Alert.alert(
                        'Signed Up Successfuly'
                    );
                    console.log('Sign Up successful');
                    navigation.navigate('LoginScreen');
                    // Later: connect to backend API
                }
            }}
        />
        <TouchableOpacity style = {styles.link} onPress = {() => {navigation.navigate("LoginScreen")}}>
            <Text style = {styles.link1}>
                Already have an account? 
            </Text>
            <Text style = {styles.link2}>
                Login
            </Text>
        </TouchableOpacity>
    </View>
  )
}



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
        marginTop: 7,
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


export default SignUpScreen