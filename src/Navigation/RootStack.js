import { View, Text, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import UserStack from './UserStack';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux'
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { setIsLoggedIn } from '../Redux/action';

const RootStack = () => {
    const Stack = createNativeStackNavigator();
    //const dispatch = useDispatch();

    const { isLoggedIn, isLoading } = useSelector(state => state.loginReducer);
    //const [isLoading, setIsLoading] = useState(true);

    // const checkLoginStatus = async () => {
    //     const token = await AsyncStorage.getItem('token');
    //     console.log(token);
    //     if (token) {
    //         dispatch(setIsLoggedIn(true));
    //         console.log("token is there");
    //     }
    //     else
    //         dispatch(setIsLoggedIn(false));
    //     setIsLoading(false);
    // }

    // useEffect(() => {
    //     //checkLoginStatus();
    //     console.log("isLoggedIn: ", isLoggedIn);
    // }, [isLoggedIn]);

    if (isLoading)
        return <View style={{ flex: 1, justifyContent: 'center' }}>
            <ActivityIndicator size="large" color="#00ff00" />
        </View>

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                {isLoggedIn ? (
                    <Stack.Screen name='User' component={UserStack} />
                ) : (
                    <Stack.Screen name='Auth' component={AuthStack} />
                )}

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStack;             