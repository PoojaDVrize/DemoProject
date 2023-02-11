import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screens/Login';
import Signup from '../Screens/Signup';

const AuthStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }} initialRouteName='Login'>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name='Signup' component={Signup} />
        </Stack.Navigator>
    )
}

export default AuthStack