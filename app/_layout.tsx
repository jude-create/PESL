// app/_layout.tsx
import { Stack } from "expo-router";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import "./global.css";

import {
  useFonts,
  Manrope_400Regular,
  Manrope_700Bold,
} from "@expo-google-fonts/manrope";
import {
  Dosis_400Regular,
  Dosis_700Bold,
} from "@expo-google-fonts/dosis";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // ✅ Load fonts
  const [fontsLoaded] = useFonts({
    Manrope_400Regular,
    Manrope_700Bold,
    Dosis_400Regular,
    Dosis_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null; // Wait until fonts load before rendering

  return (
    <SafeAreaProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="(tabs)" />
        {/* Auth screens show first */}
        <Stack.Screen name="(auth)" />

        {/* Tabs (home) screens */}
        
      </Stack>
      <StatusBar />
    </SafeAreaProvider>
  );
}
