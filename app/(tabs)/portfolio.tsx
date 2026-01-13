import { useState } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export default function Portfolio() {
  const [wrappedAssets, setWrappedAssets] = useState<any[]>([]);
  const [transactions, setTransactions] = useState<any[]>([]);

  // Generate random stars for background
  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 2 + 1,
    opacity: Math.random() * 0.5 + 0.3,
  }));

  return (
    <ScrollView className="flex-1 bg-[#0c0c0c]">
      {/* Header Section with Stars Background */}
      <View className="relative px-6 pt-16 pb-12 border-b border-[#ffffff0d]">
        {/* Stars Background */}
        <View className="absolute inset-0">
          {stars.map((star) => (
            <View
              key={star.id}
              style={{
                position: 'absolute',
                left: `${star.left}%`,
                top: `${star.top}%`,
                width: star.size,
                height: star.size,
                opacity: star.opacity,
              }}
              className="bg-white rounded-full"
            />
          ))}
        </View>

        {/* Header Content */}
        <View className="relative z-10">
          <Text className="text-white text-2xl font-jetbrains-medium tracking-widest mb-4">
            ENCIFHER PORTFOLIO
          </Text>
          <Text className="text-white text-6xl font-jetbrains">
            $0.00
          </Text>
        </View>
      </View>

      {/* Wrapped Assets Section */}
      <View className="px-6 pt-8 pb-6">
        <View className="flex-row items-center justify-between mb-6">
          <Text className="text-white text-2xl font-jetbrains-medium tracking-widest">
            WRAPPED ASSETS
          </Text>
          <View className="flex-row items-center gap-3">
            <Text className="text-gray-400 text-sm font-jetbrains mr-2">
              Not seeing asset? Add here
            </Text>
            <TouchableOpacity className="w-10 h-10 bg-[#ffffff0d] border border-[#ffffff0d] rounded-lg items-center justify-center">
              <Text className="text-white text-xl font-jetbrains">+</Text>
            </TouchableOpacity>
            <TouchableOpacity className="w-10 h-10 bg-[#ffffff0d] border border-[#ffffff0d] rounded-lg items-center justify-center">
              <Text className="text-white text-lg font-jetbrains">↻</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Assets Table */}
        <View className="bg-[#ffffff0d] border border-[#ffffff0d] rounded-xl overflow-hidden">
          {/* Table Header */}
          <View className="flex-row items-center px-6 py-4 border-b border-[#ffffff0d]">
            <Text className="flex-1 text-gray-400 text-sm font-jetbrains tracking-wider">
              Token Name
            </Text>
            <Text className="w-24 text-gray-400 text-sm font-jetbrains tracking-wider text-right">
              Amount
            </Text>
            <Text className="w-28 text-gray-400 text-sm font-jetbrains tracking-wider text-right">
              USD value
            </Text>
          </View>

          {/* Empty State */}
          {wrappedAssets.length === 0 && (
            <View className="px-6 py-12">
              <Text className="text-gray-500 text-center font-jetbrains">
                No wrapped assets yet
              </Text>
            </View>
          )}

          {/* Asset Rows */}
          {wrappedAssets.map((asset, index) => (
            <View
              key={index}
              className="flex-row items-center px-6 py-4 border-b border-[#ffffff0d]"
            >
              <View className="flex-1 flex-row items-center gap-3">
                <View className="w-8 h-8 bg-gradient-to-br from-[#5024ff] to-[#682ad5] rounded-full" />
                <Text className="text-white font-jetbrains">{asset.name}</Text>
              </View>
              <Text className="w-24 text-white font-jetbrains text-right">
                {asset.amount}
              </Text>
              <Text className="w-28 text-white font-jetbrains text-right">
                ${asset.usdValue}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* Private Transactions Section */}
      <View className="px-6 pt-6 pb-12">
        <View className="flex-row items-center justify-between mb-6">
          <Text className="text-white text-2xl font-jetbrains-medium tracking-widest">
            PRIVATE TRANSACTIONS
          </Text>
          <View className="flex-row items-center gap-3">
            <TouchableOpacity className="w-10 h-10 bg-[#ffffff0d] border border-[#ffffff0d] rounded-lg items-center justify-center">
              <Text className="text-white text-lg font-jetbrains">↑</Text>
            </TouchableOpacity>
            <TouchableOpacity className="w-10 h-10 bg-[#ffffff0d] border border-[#ffffff0d] rounded-lg items-center justify-center">
              <Text className="text-white text-lg font-jetbrains">↓</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Transactions Table - Horizontal Scroll */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className="bg-[#ffffff0d] border border-[#ffffff0d] rounded-xl overflow-hidden min-w-full">
            {/* Table Header */}
            <View className="flex-row items-center px-4 py-4 border-b border-[#ffffff0d]">
              <Text className="w-32 text-gray-400 text-sm font-jetbrains tracking-wider">
                Token Name
              </Text>
              <Text className="w-24 text-gray-400 text-sm font-jetbrains tracking-wider">
                Action
              </Text>
              <Text className="w-24 text-gray-400 text-sm font-jetbrains tracking-wider text-right">
                Rate
              </Text>
              <Text className="w-28 text-gray-400 text-sm font-jetbrains tracking-wider text-right">
                Amount In
              </Text>
              <Text className="w-28 text-gray-400 text-sm font-jetbrains tracking-wider text-right">
                Amount Out
              </Text>
              <Text className="w-32 text-gray-400 text-sm font-jetbrains tracking-wider">
                Receiver
              </Text>
              <Text className="w-28 text-gray-400 text-sm font-jetbrains tracking-wider text-right">
                Time
              </Text>
              <View className="w-10 items-center justify-center">
                <TouchableOpacity className="w-8 h-8 bg-white rounded-full items-center justify-center">
                  <Text className="text-[#5024ff] text-xl font-jetbrains-medium">Q</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Empty State */}
            {transactions.length === 0 && (
              <View className="px-6 py-12 min-w-full">
                <Text className="text-gray-500 text-center font-jetbrains">
                  No private transactions yet
                </Text>
              </View>
            )}

            {/* Transaction Rows */}
            {transactions.map((tx, index) => (
              <View
                key={index}
                className="flex-row items-center px-4 py-4 border-b border-[#ffffff0d]"
              >
                <View className="w-32 flex-row items-center gap-2">
                  <View className="w-6 h-6 bg-gradient-to-br from-[#5024ff] to-[#682ad5] rounded-full" />
                  <Text className="text-white font-jetbrains text-sm">{tx.tokenName}</Text>
                </View>
                <Text className="w-24 text-white font-jetbrains text-sm">
                  {tx.action}
                </Text>
                <Text className="w-24 text-white font-jetbrains text-sm text-right">
                  {tx.rate}
                </Text>
                <Text className="w-28 text-white font-jetbrains text-sm text-right">
                  {tx.amountIn}
                </Text>
                <Text className="w-28 text-white font-jetbrains text-sm text-right">
                  {tx.amountOut}
                </Text>
                <Text className="w-32 text-gray-400 font-jetbrains text-xs" numberOfLines={1}>
                  {tx.receiver}
                </Text>
                <Text className="w-28 text-gray-400 font-jetbrains text-xs text-right">
                  {tx.time}
                </Text>
                <View className="w-10" />
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
}
