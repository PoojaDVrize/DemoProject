import { StyleSheet, Text, View, SafeAreaView, Alert, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const Profile = () => {
  const { isLoading, data, error } = useSelector(state => state.profileReducer);

  useEffect(() => {
    if (error) {
      Alert.alert(error);
    }
  }, [error]); 

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Text style={{ fontSize: 26, marginVertical: 10, textAlign: 'center', color: '#000' }}>
        Profile
      </Text>
      <Text style={{ fontSize: 26, marginVertical: 10, textAlign: 'center', color: '#000' }}>
        {data.firstName}
      </Text>
      <Text style={{ fontSize: 26, marginVertical: 10, textAlign: 'center', color: '#000' }}>
        {data.companyAddress[0].city}
      </Text>
      {isLoading &&
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      }
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({})