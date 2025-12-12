import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Import your screen components
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import RestaurantDetailsScreen from '../screens/RestaurantDetailsScreen';
// DEL LATER
import HomeScreen from '../screens/HomeScreen';
import TabNavigator from './TabNavigator';



// ===========================
// Main code
// ===========================

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          transitionSpec: {
            open: { animation: 'timing', config: { duration: 400 } },
            close: { animation: 'timing', config: { duration: 350 } },
          },
        }}
      >
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="MainTabs" component={TabNavigator} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />        
        <Stack.Screen name="RestaurantDetailsScreen" component={RestaurantDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
