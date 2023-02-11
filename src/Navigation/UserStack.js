import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';

const UserStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }} initialRouteName='Home'>

            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Profile' component={Profile} />
        </Stack.Navigator>
    )
}

export default UserStack;             