import { useState } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar"
import { Ionicons } from "@expo/vector-icons";
import PrivateTransaction from "@/components/private-transaction";
import WrappedAssets from "@/components/wrap-assests-card";
import { useRouter } from "expo-router";

export default function Portfolio() {
  const [wrappedAssets, setWrappedAssets] = useState<any[]>([]);
  const [transactions, setTransactions] = useState<any[]>([]);
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);
  const router = useRouter();

  const totalBalance = 0.0;

  return (
    <View className="flex-1 bg-[#0c0c0c]">
       <StatusBar style="light" />
      {/* Dark Header Section */}
      <View className="px-6 pt-16 pb-8">
        {/* Back Button */}
        <TouchableOpacity
          className="mb-6"
          onPress={() => router.push("/")}
        >
          <Ionicons name="arrow-back" size={28} color="white" />
        </TouchableOpacity>

        {/* Title */}
        <Text className="text-white text-3xl font-jetbrains-medium mb-8">
          Portfolio
        </Text>

        {/* Total Balance Card */}
        <View className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-3xl p-6 shadow-lg">
          <View className="flex-row items-center justify-between mb-2">
            <Text className="text-purple-200 text-sm font-jetbrains tracking-wider">
              Total Balance
            </Text>
            <TouchableOpacity onPress={() => setIsBalanceVisible(!isBalanceVisible)}>
              <Ionicons 
                name={isBalanceVisible ? "eye-outline" : "eye-off-outline"} 
                size={20} 
                color="#e9d5ff" 
              />
            </TouchableOpacity>
          </View>
          <Text className="text-white text-4xl font-jetbrains-medium">
            {isBalanceVisible 
              ? `$${totalBalance.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}` 
              : "••••••"}
          </Text>
          <Text className="text-purple-200 text-xs font-jetbrains mt-2">
            Across all assets
          </Text>
        </View>
      </View>

      {/* White Content Section */}
      <View className="flex-1 bg-gray-50 rounded-t-[32px] pt-6">
        {/* Handle Bar */}
        <View className="w-12 h-1 bg-gray-300 rounded-full self-center mb-6" />

        {/* Scrollable Content */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          className="flex-1 px-6"
          contentContainerStyle={{ paddingBottom: 24 }}
        >
          {/* Section Title */}
          <Text className="text-[#0c0c0c] text-2xl font-jetbrains-medium mb-6">
            Your Assets
          </Text>

          {/* Components */}
          <WrappedAssets assets={wrappedAssets} />
          <PrivateTransaction transactions={transactions} />
        </ScrollView>
      </View>
    </View>
  );
}
