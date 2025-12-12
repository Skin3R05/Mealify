import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';

type TabParamList = {
    Home: undefined;
    Search: undefined;
    Cart: undefined;
    Profile: undefined;
}

// ===========================
// Main code
// ===========================

const Tab = createBottomTabNavigator<TabParamList>();

// Placeholder components
const SearchScreen = () => <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Search Screen</Text></View>
const CartScreen = () => <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Cart Screen</Text></View>
const ProfileScreen = () => <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Profile Screen</Text></View>

export default function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions = {({ route }) => ({
                headerShown: false,
                tabBarShowLabel: true,
                tabBarActiveTintColor: '#2B5E3D',
                tabBarInactiveTintColor: '#aaa',
                tabBarStyle: {
                    backgroundColor: '#fff',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    height: 100,
                    paddingTop: 17,
                },
                tabBarIcon: ({ color, size }) => {
                    let iconName: keyof typeof Ionicons.glyphMap = 'home';
                    if (route.name === 'Home') iconName = 'home';
                    else if (route.name === 'Search') iconName = 'search';
                    else if (route.name === 'Cart') iconName = 'cart';
                    else if (route.name === 'Profile') iconName = 'person';
                    return <Ionicons name = {iconName} size = {30} color = {color} />
                },
            })}
        >
            <Tab.Screen name = "Home" component = {HomeScreen} options={{
                tabBarLabelStyle: { fontSize: 12, paddingTop: 7},
            }}/> 
            <Tab.Screen name = "Search" component = {SearchScreen} options={{
                tabBarLabelStyle: { fontSize: 12, paddingTop: 7},
            }}/>  
            <Tab.Screen name = "Cart" component = {CartScreen} options={{
                tabBarLabelStyle: { fontSize: 12, paddingTop: 7},
            }}/>  
            <Tab.Screen name = "Profile" component = {ProfileScreen} options={{
                tabBarLabelStyle: { fontSize: 12, paddingTop: 7},
            }}/> 

        </Tab.Navigator>

    )
};
