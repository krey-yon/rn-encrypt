import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { display: "none" }, // Hide the default tab bar
      }}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="portfolio" />
      <Tabs.Screen name="wrap" />
      <Tabs.Screen name="refer" />
    </Tabs>
  );
}
