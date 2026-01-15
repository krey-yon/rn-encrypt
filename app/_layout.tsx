import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar"
import { useEffect } from "react";
import "./global.css";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "JetBrainsMono-Regular": require("../assets/font/JetBrainsMono-Regular.ttf"),
    "JetBrainsMono-Medium": require("../assets/font/JetBrainsMono-Medium.ttf"),
    "JetBrainsMonoNL-Regular": require("../assets/font/JetBrainsMonoNL-Regular.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );

}
