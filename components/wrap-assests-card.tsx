import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface WrappedAssetsProps {
  assets?: Array<{
    name: string;
    amount: string;
    usdValue: string;
  }>;
}

const WrappedAssets = ({ assets = [] }: WrappedAssetsProps) => {
  return (
    <View className="mb-6">
      {/* Section Header */}
      <View className="flex-row items-center justify-between mb-4">
        <Text className="text-[#0c0c0c] text-lg font-jetbrains-medium">
          Wrapped Assets
        </Text>
        <Ionicons name="wallet-outline" size={20} color="#0c0c0c" />
      </View>

      {/* Assets Container */}
      <View className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
        {assets.length === 0 ? (
          // Empty State
          <View className="py-16 px-6 items-center">
            <View className="w-16 h-16 bg-gray-100 rounded-full items-center justify-center mb-4">
              <Ionicons name="wallet-outline" size={32} color="#9ca3af" />
            </View>
            <Text className="text-gray-400 text-center font-jetbrains text-sm">
              No wrapped assets yet
            </Text>
            <Text className="text-gray-300 text-center font-jetbrains text-xs mt-2">
              Your wrapped tokens will appear here
            </Text>
          </View>
        ) : (
          // Asset List
          assets.map((asset, index) => (
            <View
              key={index}
              className={`px-5 py-4 flex-row items-center justify-between ${
                index !== assets.length - 1 ? "border-b border-gray-100" : ""
              }`}
            >
              {/* Left: Token Info */}
              <View className="flex-1">
                <View className="flex-row items-center mb-1">
                  <View className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mr-3 items-center justify-center">
                    <Text className="text-white text-xs font-jetbrains-medium">
                      {asset.name.substring(0, 2).toUpperCase()}
                    </Text>
                  </View>
                  <Text className="text-[#0c0c0c] font-jetbrains-medium text-base">
                    {asset.name}
                  </Text>
                </View>
              </View>

              {/* Right: Amount & Value */}
              <View className="items-end">
                <Text className="text-[#0c0c0c] font-jetbrains-medium text-base mb-1">
                  {asset.amount}
                </Text>
                <Text className="text-gray-400 font-jetbrains text-xs">
                  {asset.usdValue}
                </Text>
              </View>
            </View>
          ))
        )}
      </View>
    </View>
  );
};

export default WrappedAssets;
