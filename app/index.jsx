import { Image, Text } from "react-native";
import { styles } from '../styles/initialLoader.styles';
import { useRouter } from "expo-router";
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Index() {
  const [fontsLoaded] = useFonts({
    'Roboto': require('../assets/fonts/Roboto.ttf'),
  });
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Wait for 2 seconds to show the loader
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // const authToken = true;
        const authToken = await AsyncStorage.getItem('authToken');
        if (authToken) {
          router.replace('/home');
        } else {
          router.replace('/login');
        }
      } catch (error) {
        console.error('Error checking auth:', error);
        router.replace('/login');
      }
    };

    checkAuth();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <LinearGradient
      colors={['#01B2A9', '#001645']}
      style={styles.mainContainer}
    >
      <Image 
        style={styles.mainLogo} 
        source={require("../assets/images/dailykind-white.svg")} 
        resizeMode="contain"
      />
      <Text style={styles.salogan}>Welcome to DailyKind</Text>
      <Image 
        style={styles.mainLogo} 
        source={require("../assets/images/loader.svg")} 
        resizeMode="contain"
      />
    </LinearGradient>
  );
}
