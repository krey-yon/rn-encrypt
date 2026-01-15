import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image } from "expo-image";

export default function Swap() {
  const [fromAmount, setFromAmount] = useState("0");
  const [toAmount, setToAmount] = useState("0");
  const [recipientAddress, setRecipientAddress] = useState("");
  const [selectedTab, setSelectedTab] = useState<"BRIDGE" | "SWAP" | "SEND">("BRIDGE");
  const router = useRouter();

  return (
    <View className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="px-6 pt-16 pb-6">
        {/* Back Button */}
        <TouchableOpacity
          className="mb-6"
          onPress={() => router.push("/")}
        >
          <Ionicons name="arrow-back" size={28} color="#0c0c0c" />
        </TouchableOpacity>

        {/* Title */}
        <Text className="text-[#0c0c0c] text-3xl font-jetbrains-medium mb-6">
          Bridge & Swap
        </Text>

        {/* Tab Selector */}
        <View className="flex-row mb-6 bg-white rounded-2xl p-2 shadow-sm border border-gray-100">
          <TouchableOpacity
            onPress={() => setSelectedTab("BRIDGE")}
            className={`flex-1 py-3 rounded-xl ${
              selectedTab === "BRIDGE" ? "bg-[#0c0c0c]" : "bg-white"
            }`}
          >
            <Text
              className={`text-center text-sm font-jetbrains-medium tracking-wider ${
                selectedTab === "BRIDGE" ? "text-white" : "text-gray-400"
              }`}
            >
              BRIDGE
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setSelectedTab("SWAP")}
            className={`flex-1 py-3 rounded-xl ${
              selectedTab === "SWAP" ? "bg-[#0c0c0c]" : "bg-white"
            }`}
          >
            <Text
              className={`text-center text-sm font-jetbrains-medium tracking-wider ${
                selectedTab === "SWAP" ? "text-white" : "text-gray-400"
              }`}
            >
              SWAP
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setSelectedTab("SEND")}
            className={`flex-1 py-3 rounded-xl ${
              selectedTab === "SEND" ? "bg-[#0c0c0c]" : "bg-white"
            }`}
          >
            <Text
              className={`text-center text-sm font-jetbrains-medium tracking-wider ${
                selectedTab === "SEND" ? "text-white" : "text-gray-400"
              }`}
            >
              SEND
            </Text>
          </TouchableOpacity>
        </View>

        {/* Encrypted Balance Card */}
        <View className="bg-white rounded-2xl p-4 mb-4 shadow-sm border border-gray-100">
          <Text className="text-gray-500 text-xs font-jetbrains mb-3 tracking-wider">
            ENCRYPTED BALANCE
          </Text>
          <View className="flex-row items-center gap-2 mb-3">
            <View className="bg-gray-100 px-3 py-2 rounded-lg flex-row items-center gap-2">
              <Image
                source={require("../../assets/icons/encrypt.svg")}
                style={{ width: 14, height: 14 }}
                contentFit="contain"
                tintColor="#0c0c0c"
              />
              <Text className="text-[#0c0c0c] font-jetbrains-medium text-sm">0.0000</Text>
            </View>
            <TouchableOpacity className="bg-gray-100 px-3 py-2 rounded-lg">
              <Text className="text-gray-500 font-jetbrains-medium text-sm">50%</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-gray-100 px-3 py-2 rounded-lg">
              <Text className="text-gray-500 font-jetbrains-medium text-sm">MAX</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity className="bg-[#0c0c0c] py-3 rounded-xl">
            <Text className="text-white text-center font-jetbrains-medium text-xs tracking-wider">
              ADD ENCRYPTED ASSET
            </Text>
          </TouchableOpacity>
        </View>

        {/* From Token Card */}
        <View className="bg-white rounded-2xl p-4 mb-3 shadow-sm border border-gray-100">
          <Text className="text-gray-400 text-xs font-jetbrains mb-2 tracking-wider">
            FROM
          </Text>
          <View className="flex-row justify-between items-center">
            <View className="flex-1">
              <TextInput
                value={fromAmount}
                onChangeText={setFromAmount}
                placeholder="0.0"
                placeholderTextColor="#d1d5db"
                keyboardType="numeric"
                className="text-3xl font-jetbrains-medium text-[#0c0c0c]"
              />
              <Text className="text-gray-400 text-xs font-jetbrains mt-1">$0.00</Text>
            </View>
            <TouchableOpacity className="bg-gray-100 px-3 py-2 rounded-lg flex-row items-center gap-2 ml-3">
              <Image
                source={"https://solana.com/src/img/branding/solanaLogoMark.svg"}
                style={{ width: 18, height: 18 }}
                contentFit="contain"
              />
              <Text className="text-[#0c0c0c] font-jetbrains-medium text-sm">SOL</Text>
              <Ionicons name="chevron-down" size={14} color="#6b7280" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Swap Icon */}
        <View className="items-center -my-2 z-10">
          <TouchableOpacity className="bg-white p-2 rounded-full shadow-md border-2 border-gray-200">
            <Ionicons name="swap-vertical" size={20} color="#0c0c0c" />
          </TouchableOpacity>
        </View>

        {/* To Token Card */}
        <View className="bg-white rounded-2xl p-4 mb-4 shadow-sm border border-gray-100">
          <Text className="text-gray-400 text-xs font-jetbrains mb-2 tracking-wider">
            TO
          </Text>
          <View className="flex-row justify-between items-center">
            <View className="flex-1">
              <TextInput
                value={toAmount}
                onChangeText={setToAmount}
                placeholder="0.0"
                placeholderTextColor="#d1d5db"
                keyboardType="numeric"
                className="text-3xl font-jetbrains-medium text-[#0c0c0c]"
              />
              <Text className="text-gray-400 text-xs font-jetbrains mt-1">$0.00</Text>
            </View>
            <TouchableOpacity className="bg-gray-100 px-3 py-2 rounded-lg flex-row items-center gap-2 ml-3">
              <View className="w-4 h-4 bg-yellow-400 rounded-full" />
              <Text className="text-[#0c0c0c] font-jetbrains-medium text-sm">ZEC</Text>
              <Ionicons name="chevron-down" size={14} color="#6b7280" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Recipient Address Card - Only for SEND */}
        {selectedTab === "SEND" && (
          <View className="bg-white rounded-2xl p-4 mb-4 shadow-sm border border-gray-100">
            <Text className="text-gray-400 text-xs font-jetbrains mb-2 tracking-wider">
              RECIPIENT ADDRESS
            </Text>
            <View className="flex-row items-center justify-between">
              <TextInput
                value={recipientAddress}
                onChangeText={setRecipientAddress}
                placeholder="Enter address..."
                placeholderTextColor="#d1d5db"
                className="flex-1 text-[#0c0c0c] font-jetbrains text-sm"
              />
              <TouchableOpacity className="ml-2 bg-gray-100 px-3 py-2 rounded-lg">
                <Text className="text-gray-500 font-jetbrains-medium text-xs">PASTE</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* Action Button */}
        <TouchableOpacity 
          className="bg-[#0c0c0c] py-5 rounded-2xl shadow-lg mb-3"
          style={{
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.1,
            shadowRadius: 12,
            elevation: 4,
          }}
        >
          <Text className="text-white text-center text-base font-jetbrains-medium tracking-wider">
            REVIEW TRANSACTION
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
