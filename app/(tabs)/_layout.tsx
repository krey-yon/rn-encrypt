import { Tabs } from "expo-router";
import { View, Platform } from "react-native";
import Svg, { Path, Circle, Rect, G, Defs, LinearGradient, Stop } from "react-native-svg";
import { BlurView } from 'expo-blur';

function TabBarIcon({ name, focused }: { name: string; focused: boolean }) {
  const iconColor = focused ? "#5024ff" : "#666";
  const iconSize = 24;

  switch (name) {
    case "index":
      // Swap/Exchange Icon
      return (
        <Svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
          <Path
            d="M7 16V4M7 4L3 8M7 4L11 8"
            stroke={iconColor}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M17 8V20M17 20L21 16M17 20L13 16"
            stroke={iconColor}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {focused && (
            <Circle cx="12" cy="12" r="10" stroke="#5024ff" strokeWidth="1" opacity="0.2" />
          )}
        </Svg>
      );

    case "wrap":
      // Shield/Lock Icon
      return (
        <Svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
          <Path
            d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
            stroke={iconColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill={focused ? "#5024ff26" : "none"}
          />
          <Path
            d="M9 12l2 2 4-4"
            stroke={iconColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      );

    case "portfolio":
      // Portfolio/Chart Icon
      return (
        <Svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
          <Path
            d="M3 3v18h18"
            stroke={iconColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M18 9l-5 5-4-4-4 4"
            stroke={iconColor}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {focused && (
            <>
              <Circle cx="7" cy="14" r="2" fill="#5024ff" />
              <Circle cx="11" cy="10" r="2" fill="#5024ff" />
              <Circle cx="16" cy="14" r="2" fill="#5024ff" />
              <Circle cx="18" cy="9" r="2" fill="#5024ff" />
            </>
          )}
        </Svg>
      );

    case "refer":
      // Network/Users Icon
      return (
        <Svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
          <Circle
            cx="9"
            cy="7"
            r="3"
            stroke={iconColor}
            strokeWidth="2"
            fill={focused ? "#5024ff26" : "none"}
          />
          <Circle
            cx="16"
            cy="7"
            r="3"
            stroke={iconColor}
            strokeWidth="2"
            fill={focused ? "#5024ff26" : "none"}
          />
          <Path
            d="M12 14c-3.5 0-6 2.5-6 5v2h12v-2c0-2.5-2.5-5-6-5z"
            stroke={iconColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill={focused ? "#5024ff26" : "none"}
          />
          {focused && (
            <>
              <Path d="M9 10L12 14" stroke="#5024ff" strokeWidth="1.5" opacity="0.5" />
              <Path d="M16 10L12 14" stroke="#5024ff" strokeWidth="1.5" opacity="0.5" />
            </>
          )}
        </Svg>
      );

    default:
      return null;
  }
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#5024ff",
        tabBarInactiveTintColor: "#666",
        tabBarStyle: {
          backgroundColor: "#0c0c0c",
          borderTopWidth: 1,
          borderTopColor: "#ffffff0d",
          height: 85,
          paddingTop: 10,
          paddingBottom: Platform.OS === "ios" ? 25 : 10,
          position: "absolute",
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontFamily: "JetBrainsMono-Medium",
          fontSize: 11,
          letterSpacing: 1,
          marginTop: 4,
          textTransform: "uppercase",
        },
        tabBarItemStyle: {
          paddingVertical: 4,
        },
        tabBarBackground: () => (
          <View className="flex-1 bg-[#0c0c0c]">
            {/* Top border glow effect */}
            <View 
              className="absolute top-0 left-0 right-0 h-[1px]"
              style={{
                backgroundColor: "#5024ff",
                opacity: 0.3,
                shadowColor: "#5024ff",
                shadowOffset: { width: 0, height: -2 },
                shadowOpacity: 0.5,
                shadowRadius: 8,
              }}
            />
            {/* Gradient overlay */}
            <View 
              className="absolute inset-0"
              style={{
                backgroundColor: "#0c0c0c",
                opacity: 0.95,
              }}
            />
          </View>
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Trade",
          tabBarIcon: ({ focused }) => (
            <View className="items-center justify-center">
              {focused && (
                <View
                  className="absolute w-14 h-14 rounded-full"
                  style={{
                    backgroundColor: "#5024ff26",
                    shadowColor: "#5024ff",
                    shadowOffset: { width: 0, height: 0 },
                    shadowOpacity: 0.5,
                    shadowRadius: 10,
                  }}
                />
              )}
              <TabBarIcon name="index" focused={focused} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="wrap"
        options={{
          title: "Wrap",
          tabBarIcon: ({ focused }) => (
            <View className="items-center justify-center">
              {focused && (
                <View
                  className="absolute w-14 h-14 rounded-full"
                  style={{
                    backgroundColor: "#5024ff26",
                    shadowColor: "#5024ff",
                    shadowOffset: { width: 0, height: 0 },
                    shadowOpacity: 0.5,
                    shadowRadius: 10,
                  }}
                />
              )}
              <TabBarIcon name="wrap" focused={focused} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="portfolio"
        options={{
          title: "Portfolio",
          tabBarIcon: ({ focused }) => (
            <View className="items-center justify-center">
              {focused && (
                <View
                  className="absolute w-14 h-14 rounded-full"
                  style={{
                    backgroundColor: "#5024ff26",
                    shadowColor: "#5024ff",
                    shadowOffset: { width: 0, height: 0 },
                    shadowOpacity: 0.5,
                    shadowRadius: 10,
                  }}
                />
              )}
              <TabBarIcon name="portfolio" focused={focused} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="refer"
        options={{
          title: "Refer",
          tabBarIcon: ({ focused }) => (
            <View className="items-center justify-center">
              {focused && (
                <View
                  className="absolute w-14 h-14 rounded-full"
                  style={{
                    backgroundColor: "#5024ff26",
                    shadowColor: "#5024ff",
                    shadowOffset: { width: 0, height: 0 },
                    shadowOpacity: 0.5,
                    shadowRadius: 10,
                  }}
                />
              )}
              <TabBarIcon name="refer" focused={focused} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
