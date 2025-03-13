import { View, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Logout() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      setIsLoading(true);
      await AsyncStorage.removeItem('authToken');
      router.replace('/');
    } catch (error) {
      console.error('Error logging out:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <TouchableOpacity onPress={handleLogout} disabled={isLoading}>
      {isLoading ? (
        <ActivityIndicator size="large" color="white" />
      ) : (
        <Ionicons name="exit-outline" size={24} color="white" />
      )}
    </TouchableOpacity>
  )
}