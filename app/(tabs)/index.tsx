import { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Linking
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image } from "expo-image";

export default function Index() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFabOpen, setIsFabOpen] = useState(false);
  const router = useRouter();

  const quickActions = [
    {
      id: "bridge",
      title: "Bridge",
      description: "Cross-chain transfers...",
      icon: "git-branch-outline",
      color: "from-purple-500 to-indigo-500",
      onPress: () => {
        router.push("/swap");
      },
    },
    {
      id: "swap",
      title: "Swap",
      description: "Exchange tokens...",
      icon: "swap-horizontal",
      color: "from-blue-500 to-cyan-500",
      onPress: () => {
        router.push("/swap");
      },
    },
    {
      id: "send",
      title: "Send",
      description: "Private transfers...",
      icon: "arrow-up-circle-outline",
      color: "from-pink-500 to-rose-500",
      onPress: () => {
        router.push("/send");
      },
    },
    {
      id: "encrypt",
      title: "Encrypt",
      description: "Wrap your assets...",
      icon: "shield-checkmark-outline",
      color: "from-emerald-500 to-teal-500",
      onPress: () => {
        router.push("/wrap");
      },
    },
  ];

  return (
    <View className="flex-1 bg-gray-50">
      {/* Main Content */}
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        {/* Header */}
        <View className="px-6 pt-16 pb-6">
          <View className="flex-row justify-between items-center mb-6">
            {/* Help Icon */}
            <Image
              source={"https://app.encifher.io/logo-encrypt-trade.svg"}
              style={{ width: 150, height: 40 }}
              contentFit="contain"
              tintColor="#212121"
            />

            {/* Notification Icon with Badge */}
            {/* Connected Wallet Indicator */}
            <TouchableOpacity className="bg-white rounded-full px-3 py-3 shadow-sm border border-gray-200 flex-row items-center">
              <View className="w-2 h-2 bg-green-500 rounded-full mr-2" />
              <Text className="text-[#0c0c0c] text-sm font-jetbrains-medium">
                0x742d...3a9f
              </Text>
              <Ionicons
                name="chevron-down"
                size={15}
                color="#0c0c0c"
                style={{ marginLeft: 4 }}
              />
            </TouchableOpacity>
          </View>

          {/* Greeting */}
          <View className="mb-10 mt-8">
            <Text className="text-gray-500 text-3xl font-jetbrains mb-1">
              {`BRIDGE PRIVATELY TO
ANY CHAIN`}
            </Text>
            <Text className="text-[#0c0c0c] text-4xl font-jetbrains-medium leading-tight">
              {`Your balances,
routes, and intent
stay encrypted`}
            </Text>
          </View>

          {/* Quick Action Cards */}
          <View className="flex-row flex-wrap justify-between">
            {quickActions.map((action) => (
              <TouchableOpacity
                key={action.id}
                onPress={action.onPress}
                className="w-[48%] bg-white rounded-3xl p-8 mb-6 shadow-sm border border-gray-100"
                style={{
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.05,
                  shadowRadius: 8,
                  elevation: 2,
                }}
              >
                {/* Icon Container */}
                <View className="w-14 h-14 bg-gray-100 rounded-2xl items-center justify-center mb-4">
                  <Ionicons
                    name={action.icon as any}
                    size={28}
                    color="#0c0c0c"
                  />
                </View>

                {/* Title */}
                <Text className="text-[#0c0c0c] text-xl font-jetbrains-medium mb-2">
                  {action.title}
                </Text>

                {/* Description */}
                <Text className="text-gray-400 text-sm font-jetbrains leading-5">
                  {action.description}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Left Pill - Navigation Items - Fixed Position */}
      <View className="absolute bottom-10 left-6">
        <View className="flex-row bg-white rounded-full p-3 shadow-lg">
          <TouchableOpacity className="w-14 h-14 bg-[#0c0c0c] rounded-full items-center justify-center">
            <Ionicons name="home" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.push("/portfolio")}
            className="w-14 h-14 bg-white rounded-full items-center justify-center ml-1"
          >
            <Ionicons name="person-outline" size={24} color="#0c0c0c" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Right FAB Menu - Fixed Position */}
      <View className="absolute bottom-10 right-6 items-end">
        {/* Expanded Menu Items */}
        {isFabOpen && (
          <View className="mb-3 gap-3 items-end">
            {/* Talk to Us Button */}
            <TouchableOpacity
              onPress={async () => {
                await Linking.openURL("https://t.me/+ZWHGMW4ZHXQwYTZl");
                setIsFabOpen(false);
              }}
              className="flex-row items-center bg-white rounded-full px-4 py-3 shadow-lg border border-gray-200"
            >
              <View className="w-10 h-10 bg-[#0c0c0c] rounded-full items-center justify-center mr-3">
                <Ionicons name="call" size={18} color="white" />
              </View>
              <Text className="text-[#0c0c0c] font-jetbrains-medium text-sm mr-2">
                Contact
              </Text>
            </TouchableOpacity>

            {/* Refer Button */}
            <TouchableOpacity
              onPress={() => {
                router.push("/refer")
                setIsFabOpen(false);
              }}
              className="flex-row items-center bg-white rounded-full px-4 py-3 shadow-lg border border-gray-200"
            >
              <View className="w-10 h-10 bg-[#0c0c0c] rounded-full items-center justify-center mr-3">
                <Ionicons name="gift" size={18} color="white" />
              </View>
              <Text className="text-[#0c0c0c] font-jetbrains-medium text-sm mr-2">
                Refer
              </Text>
            </TouchableOpacity>

            {/* Watch Demo Button */}
            <TouchableOpacity
              onPress={() => {
                // Handle watch demo action
                setIsFabOpen(false);
              }}
              className="flex-row items-center bg-white rounded-full px-4 py-3 shadow-lg border border-gray-200"
            >
              <View className="w-10 h-10 bg-[#0c0c0c] rounded-full items-center justify-center mr-3">
                <Ionicons name="play-circle" size={18} color="white" />
              </View>
              <Text className="text-[#0c0c0c] font-jetbrains-medium text-sm mr-2">
                Demo
              </Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Main FAB Button */}
        <TouchableOpacity
          onPress={() => setIsFabOpen(!isFabOpen)}
          className="w-16 h-16 bg-[#0c0c0c] rounded-full items-center justify-center shadow-lg self-end"
          style={{
            shadowColor: "#212121",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 8,
            elevation: 8,
          }}
        >
          {isFabOpen ? (
            <Ionicons name="close" size={28} color="white" />
          ) : (
            <Image
              source={require("../../assets/icons/encrypt.svg")}
              style={{ width: 60, height: 60, borderRadius: 30 }}
              contentFit="contain"
              tintColor="#ffffff"
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
