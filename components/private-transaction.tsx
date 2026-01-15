import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface PrivateTransactionProps {
  transactions?: Array<{
    tokenName: string;
    action: string;
    rate: string;
    amountIn: string;
    amountOut: string;
    receiver: string;
    time: string;
  }>;
}

const PrivateTransaction = ({ transactions = [] }: PrivateTransactionProps) => {
  const getActionIcon = (action: string) => {
    switch (action.toLowerCase()) {
      case "swap":
        return "swap-horizontal";
      case "send":
        return "arrow-up";
      case "receive":
        return "arrow-down";
      default:
        return "repeat";
    }
  };

  const getActionColor = (action: string) => {
    switch (action.toLowerCase()) {
      case "swap":
        return "text-blue-500";
      case "send":
        return "text-red-500";
      case "receive":
        return "text-green-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <View className="mb-6">
      {/* Section Header */}
      <View className="flex-row items-center justify-between mb-4">
        <Text className="text-[#0c0c0c] text-lg font-jetbrains-medium">
          Private Transactions
        </Text>
        <Ionicons name="shield-checkmark-outline" size={20} color="#0c0c0c" />
      </View>

      {/* Transactions Container */}
      <View className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
        {transactions.length === 0 ? (
          // Empty State
          <View className="py-16 px-6 items-center">
            <View className="w-16 h-16 bg-gray-100 rounded-full items-center justify-center mb-4">
              <Ionicons
                name="shield-checkmark-outline"
                size={32}
                color="#9ca3af"
              />
            </View>
            <Text className="text-gray-400 text-center font-jetbrains text-sm">
              No private transactions yet
            </Text>
            <Text className="text-gray-300 text-center font-jetbrains text-xs mt-2">
              Your encrypted transactions will appear here
            </Text>
          </View>
        ) : (
          // Transaction List
          transactions.map((tx, index) => (
            <View
              key={index}
              className={`px-5 py-4 ${
                index !== transactions.length - 1 ? "border-b border-gray-100" : ""
              }`}
            >
              {/* Top Row: Token & Action */}
              <View className="flex-row items-center justify-between mb-3">
                <View className="flex-row items-center flex-1">
                  {/* Token Icon */}
                  <View className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full mr-3 items-center justify-center">
                    <Text className="text-white text-sm font-jetbrains-medium">
                      {tx.tokenName.substring(0, 2).toUpperCase()}
                    </Text>
                  </View>

                  {/* Token Name & Action */}
                  <View className="flex-1">
                    <Text className="text-[#0c0c0c] font-jetbrains-medium text-base">
                      {tx.tokenName}
                    </Text>
                    <View className="flex-row items-center mt-1">
                      <Ionicons
                        name={getActionIcon(tx.action) as any}
                        size={14}
                        color={
                          tx.action.toLowerCase() === "swap"
                            ? "#3b82f6"
                            : tx.action.toLowerCase() === "send"
                            ? "#ef4444"
                            : "#10b981"
                        }
                      />
                      <Text
                        className={`${getActionColor(
                          tx.action
                        )} font-jetbrains text-sm ml-1 capitalize`}
                      >
                        {tx.action}
                      </Text>
                    </View>
                  </View>
                </View>

                {/* Time */}
                <Text className="text-gray-400 font-jetbrains text-xs">
                  {tx.time}
                </Text>
              </View>

              {/* Middle Row: Amounts */}
              <View className="flex-row items-center justify-between mb-2 pl-13">
                <View className="flex-1">
                  <Text className="text-gray-400 font-jetbrains text-xs mb-1">
                    Amount In
                  </Text>
                  <Text className="text-[#0c0c0c] font-jetbrains text-sm">
                    {tx.amountIn}
                  </Text>
                </View>
                <Ionicons name="arrow-forward" size={16} color="#d1d5db" />
                <View className="flex-1 items-end">
                  <Text className="text-gray-400 font-jetbrains text-xs mb-1">
                    Amount Out
                  </Text>
                  <Text className="text-[#0c0c0c] font-jetbrains text-sm">
                    {tx.amountOut}
                  </Text>
                </View>
              </View>

              {/* Bottom Row: Rate & Receiver */}
              <View className="flex-row items-center justify-between pl-13">
                <View className="flex-1">
                  <Text className="text-gray-400 font-jetbrains text-xs">
                    Rate: <Text className="text-gray-600">{tx.rate}</Text>
                  </Text>
                </View>
                <View className="flex-1 items-end">
                  <Text className="text-gray-400 font-jetbrains text-xs">
                    To:{" "}
                    <Text className="text-gray-600">
                      {tx.receiver.length > 10
                        ? `${tx.receiver.substring(0, 6)}...${tx.receiver.substring(
                            tx.receiver.length - 4
                          )}`
                        : tx.receiver}
                    </Text>
                  </Text>
                </View>
              </View>
            </View>
          ))
        )}
      </View>
    </View>
  );
};

export default PrivateTransaction;
