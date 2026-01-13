import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, ScrollView } from "react-native";
import Svg, {Path} from "react-native-svg";
import { Image } from "expo-image";

export default function Index() {
  const [fromAmount, setFromAmount] = useState("0");
  const [toAmount, setToAmount] = useState("0");
  const [recipientAddress, setRecipientAddress] = useState("");
  const [selectedTab, setSelectedTab] = useState<"BRIDGE" | "SWAP" | "SEND">("BRIDGE");

  return (
    <ScrollView className="flex-1 bg-[#0c0c0c]">
      <View className="flex-1 px-4 pt-16 pb-8">
        {/* Header Tabs */}
        <View className="flex-row mb-8 gap-4">
          <TouchableOpacity
            onPress={() => setSelectedTab("BRIDGE")}
            className={`px-8 py-4 rounded-xl border ${
              selectedTab === "BRIDGE"
                ? "bg-[#5024ff] border-[#682ad5]"
                : "bg-[#ffffff0d] border-[#ffffff0d]"
            }`}
          >
            <Text
              className={`text-lg font-jetbrains-medium tracking-wider ${
                selectedTab === "BRIDGE" ? "text-white" : "text-gray-400"
              }`}
            >
              BRIDGE
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setSelectedTab("SWAP")}
            className={`px-8 py-4 rounded-xl border ${
              selectedTab === "SWAP"
                ? "bg-[#5024ff] border-[#682ad5]"
                : "bg-[#ffffff0d] border-[#ffffff0d]"
            }`}
          >
            <Text
              className={`text-lg font-jetbrains-medium tracking-wider ${
                selectedTab === "SWAP" ? "text-white" : "text-gray-400"
              }`}
            >
              SWAP
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setSelectedTab("SEND")}
            className={`px-8 py-4 rounded-xl border ${
              selectedTab === "SEND"
                ? "bg-[#5024ff] border-[#682ad5]"
                : "bg-[#ffffff0d] border-[#ffffff0d]"
            }`}
          >
            <Text
              className={`text-lg font-jetbrains-medium tracking-wider ${
                selectedTab === "SEND" ? "text-white" : "text-gray-400"
              }`}
            >
              SEND
            </Text>
          </TouchableOpacity>
        </View>

        {/* Encrypted Balance Section */}
        <View className="mb-6">
          <Text className="text-gray-400 text-lg mb-3 font-jetbrains">Encrypted Balance</Text>
          <View className="flex-row items-center gap-3 mb-4">
            <View className="bg-[#ffffff0d] px-4 py-2 rounded-lg border border-gray-700">
              <Text className="text-gray-300 font-jetbrains">
                <Image
                  source={require("@/assets/icons/wallet.svg")}
                  style={{ width: 16, height: 16 }}
                  contentFit="contain"
                  tintColor="##ffffff66"
                />
                0.0000
              </Text>
            </View>
            <View className="bg-[#ffffff0d] px-4 py-2 rounded-lg border border-gray-700">
              <Text className="text-gray-400 font-jetbrains">50%</Text>
            </View>
            <TouchableOpacity className="bg-[#ffffff0d] px-4 py-2 rounded-lg border border-gray-700">
              <Text className="text-gray-400 font-jetbrains">MAX</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity className="bg-[#5024ff] py-4 rounded-xl mb-6">
            <Text className="text-white text-center font-jetbrains-medium text-base tracking-wider">
              ADD ENCRYPTED ASSET
            </Text>
          </TouchableOpacity>
        </View>

        {/* From Section */}
        <View className="bg-[#ffffff0d] rounded-2xl p-6 mb-4 border border-gray-800">
          <View className="flex-row justify-between items-start mb-4">
            <View className="flex-1">
              <Text className="text-6xl font-jetbrains text-white mb-2">0</Text>
              <Text className="text-gray-500 text-base font-jetbrains">$0.000</Text>
            </View>
            
            <TouchableOpacity className="bg-[#ffffff0d] px-4 py-3 rounded-xl border border-gray-700 flex-row items-center gap-2">
              <Image
                source={"https://solana.com/src/img/branding/solanaLogoMark.svg"}
                style={{ width: 20, height: 20 }}
                contentFit="contain"
                // tintColor="#5024ff"
              />
              <Text className="text-white font-jetbrains-medium text-base">SOL</Text>
              <Text className="text-gray-400">▼</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Swap Icon */}
        <View className="items-center -my-2 z-10">
          <View className="bg-[#0c0c0c] p-3 rounded-full border-2 border-[#5024ff]">
            <Image
              source={require("@/assets/icons/icons-swap.png")}
              style={{ width: 16, height: 16 }}
              contentFit="contain"
              tintColor="#5024ff" 
            />
          </View>
        </View>

        {/* To Section */}
        <View className="bg-[#ffffff0d] rounded-2xl p-6 mb-6 border border-gray-800">
          <View className="flex-row justify-between items-start mb-4">
            <View className="flex-1">
              <Text className="text-6xl font-jetbrains text-white mb-2">0</Text>
              <Text className="text-gray-500 text-base font-jetbrains">$0.000</Text>
            </View>
            
            <TouchableOpacity className="bg-[#ffffff0d] px-4 py-3 rounded-xl border border-gray-700 flex-row items-center gap-2">
              <Image
                source={"https://z.cash/wp-content/uploads/2023/03/zcash-logo.gif"}
                style={{ width: 16, height: 16 }}
                contentFit="fill"
                className="bg-yellow-500"
              />
              <Text className="text-white font-jetbrains-medium text-base">ZEC</Text>
              <Text className="text-gray-400">▼</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Recipient Address */}
        <View className="mb-6">
          <View className="bg-[#ffffff0d] rounded-2xl p-5 border border-gray-800 flex-row items-center justify-between">
            <TextInput
              value={recipientAddress}
              onChangeText={setRecipientAddress}
              placeholder="Enter Recipient Address"
              placeholderTextColor="#666"
              className="flex-1 text-gray-400 text-base font-jetbrains"
            />
            <TouchableOpacity className="ml-3">
              <Text className="text-gray-500 font-jetbrains-medium">PASTE</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Footer Message */}
        <View className="items-center mb-6">
          <Text className="text-gray-500 text-base font-jetbrains">
            With <Text className="text-red-500">❤️</Text> Near Intent
          </Text>
        </View>

        {/* Enter Amount Button */}
        <TouchableOpacity className="bg-[#ffffff0d] py-6 rounded-2xl border border-gray-800">
          <Text className="text-gray-400 text-center text-2xl font-jetbrains tracking-widest">
            ENTER AMOUNT
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
