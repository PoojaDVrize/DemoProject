import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { deleteLoginData, getProfile, logout, setIsLoggedIn } from '../Redux/action';

const Home = ({ navigation }) => {

  const { data } = useSelector(state => state.loginReducer);
  const dispatch = useDispatch();

  const handleLogout = async() => {
    dispatch(logout());
    // dispatch(deleteLoginData());
    // try {
    //   await AsyncStorage.removeItem('token');
    // } catch (error) {
    //   console.log("while removing asyncstorage token ",error);
    // }
    // dispatch(setIsLoggedIn(false));
    //navigation.navigate('Auth');
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 10 }}>
        <Text style={{ fontSize: 26, marginVertical: 10, color: '#000' }}>Hi {data.email}</Text>
        <TouchableOpacity
          onPress={handleLogout}
          style={styles.btn}>
          <Text style={styles.btnTxt}>Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            dispatch(getProfile());
            navigation.navigate('Profile')
          }}
          style={styles.btn}>
          <Text style={styles.btnTxt}>Go to profile</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  btn: {
    width: 200,
    backgroundColor: 'red',
    height: 60,
    borderRadius: 10,
    marginVertical: 10
  },
  btnTxt: {
    color: '#fff',
    fontSize: 26,
    textAlign: 'center',
    padding: 10
  }
})