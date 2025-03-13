import { Stack, useRouter, usePathname } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function RootLayout() {
  const router = useRouter();
  const pathname = usePathname();

  const protectedRoutes = ['/home', '/settings'];
  const isProtectedRoute = (path) => protectedRoutes.includes(path);

  useEffect(() => {
    const checkAuth = async () => {
      const authToken = await AsyncStorage.getItem("authToken");
      if (!authToken && isProtectedRoute(pathname)) {
        router.replace("/");
      }
    };

    checkAuth();
  }, [pathname]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="login" options={{ headerShown: false }} />
          <Stack.Screen name="signup" options={{ headerShown: false }} />
          <Stack.Screen name="home" options={{ headerShown: false }} />
          <Stack.Screen name="settings" options={{ headerShown: false }} />
        </Stack>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
