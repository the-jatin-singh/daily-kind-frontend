import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from "expo-router";
import { styles } from '../styles/login.styles';
import { ActivityIndicator } from 'react-native-web';

export default function Login() {
    const router = useRouter();
    const [isLoginFocused, setIsLoginFocused] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async () => {
        setIsLoading(true);
        setError('');
        
        try {
            const response = await fetch('http://localhost:8080/auth/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (response.ok) {
                await AsyncStorage.setItem('authToken', data.token);
                router.push('/home');
            } else {
                setError('Invalid username or password');
                setTimeout(() => setError(''), 3000);
            }
        } catch (err) {
            setError('Connection error. Please try again.');
            setTimeout(() => setError(''), 3000);
        } finally {
            setIsLoading(false);
        }
    }

    const handleSignup = () => {
        router.push('/signup');
    }

    return (
        <View style={styles.container}>
            <Image
                source={require("../assets/images/Dailykind-gradiant.svg")}
            />
            <View style={styles.inputsContainer}>
                <TextInput
                    style={[styles.loginInput, isLoginFocused && styles.inputFocused]}
                    onFocus={() => setIsLoginFocused(true)}
                    onBlur={() => setIsLoginFocused(false)}
                    placeholder="Enter Username"
                    placeholderTextColor="#A5A5A5"
                    value={username}
                    onChangeText={setUsername}
                />
                <TextInput
                    style={[styles.passwordInput, isPasswordFocused && styles.inputFocused]}
                    onFocus={() => setIsPasswordFocused(true)}
                    onBlur={() => setIsPasswordFocused(false)}
                    placeholder="Enter Password"
                    placeholderTextColor="#A5A5A5"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                />
            </View>
            <TouchableOpacity 
                style={[styles.button, isLoading && styles.buttonDisabled]} 
                onPress={handleLogin}
                disabled={isLoading}
            >
                <Text style={styles.buttonText}>
                    {isLoading ? <ActivityIndicator size="small" color="white" /> : 'Login'}
                </Text>
            </TouchableOpacity>

            {error && (
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>{error}</Text>
                </View>
            )}
            
            <View style={styles.bottomDes}>
                <Text style={styles.bottomDesText}>Dont have an account?</Text>
                <TouchableOpacity onPress={handleSignup}>
                    <Text style={styles.bottomDesButton}>Sign up</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerText}>Made with love by</Text>
                <TouchableOpacity onPress={handleLogin}>
                    <Text style={styles.footerButton}>Apple&Banana</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
