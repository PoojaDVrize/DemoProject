import { ActivityIndicator, Alert, Keyboard, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, setIsLoggedIn } from '../Redux/action';
//import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { isLoading, data, error } = useSelector(state => state.loginReducer);
    // {
    //     "email" : "pooja@gmail.com",
    //     "password" : "pooja12"
    // }

    useEffect(() => {
        if (error) {
            Alert.alert(error);
        }else if(data){
            //  AsyncStorage.setItem('token','abacjklfjsj');
            //  dispatch(setIsLoggedIn(true));
            //navigation.navigate('User');
        }
    }, [error,data]);
 
    const submitForm = () => {
        Keyboard.dismiss();
        //console.log(email,password);
        dispatch(loginUser(email, password));
        // .then(() => {
        //     AsyncStorage.setItem('token','abacjklfjsj');
        //     dispatch(setIsLoggedIn(true));
        // })

        setEmail('');
        setPassword('');
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <Text style={{ fontSize: 26, marginVertical: 10, textAlign: 'center', color: '#000' }}>Login</Text>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 10 }}>
                <TextInput
                    value={email}
                    onChangeText={(val) => setEmail(val)}
                    placeholder='Email'
                    style={styles.input}
                />
                <TextInput
                    value={password}
                    onChangeText={(val) => setPassword(val)}
                    placeholder='Password'
                    style={styles.input}
                />
                <TouchableOpacity
                    onPress={submitForm}
                    style={{
                        width: 200,
                        backgroundColor: 'red',
                        height: 60,
                        borderRadius: 10,

                    }}>
                    <Text style={{ color: '#fff', fontSize: 26, textAlign: 'center', padding: 10 }}>Login</Text>
                </TouchableOpacity>
                {isLoading &&
                    <View style={{flex:1,justifyContent:'center'}}>
                        <ActivityIndicator size="large" color="#00ff00" />
                    </View>
                }
            </View>
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    input: {
        width: 300,
        height: 60,
        borderWidth: 2,
        borderRadius: 8,
        padding: 10,
        color: '#000',
        fontSize: 22,
        margin: 15
    }
})