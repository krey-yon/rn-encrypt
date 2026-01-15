import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, ScrollView, Modal } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

type Mode = "WRAP" | "UNWRAP";

export default function Wrap() {
  const [mode, setMode] = useState<Mode>("WRAP");
  const [showModal, setShowModal] = useState(false);
  const [amount, setAmount] = useState("");
  const [recipientAddress, setRecipientAddress] = useState("");
  const [selectedToken, setSelectedToken] = useState("SOL");
  const [balance] = useState(0.0);
  const router = useRouter();

  const openWrapModal = () => {
    setMode("WRAP");
    setShowModal(true);
  };

  const openUnwrapModal = () => {
    setMode("UNWRAP");
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setAmount("");
    setRecipientAddress("");
  };

  const handleMaxAmount = () => {
    setAmount(balance.toString());
  };

  const handlePaste = async () => {
    // Handle paste functionality
  };

  return (
    <View className="flex-1 bg-gray-50">
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {/* Header */}
        <View className="px-6 pt-16 pb-6">
          {/* Back Button */}
          <TouchableOpacity className="mb-6" onPress={() => router.push("/")}>
            <Ionicons name="arrow-back" size={28} color="#0c0c0c" />
          </TouchableOpacity>

          {/* Title */}
          <Text className="text-[#0c0c0c] text-3xl font-jetbrains-medium mb-2">
            Encrypt Assets
          </Text>
          <Text className="text-gray-500 text-base font-jetbrains mb-8">
            Wrap or unwrap your tokens
          </Text>

          {/* Mode Selection Cards */}
          <View className="flex-row gap-4 mb-6">
            {/* Wrap Card */}
            <TouchableOpacity
              onPress={openWrapModal}
              className="flex-1 bg-white rounded-3xl p-6 shadow-sm border border-gray-100"
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.05,
                shadowRadius: 8,
                elevation: 2,
              }}
            >
              <View className="w-14 h-14 bg-gray-100 rounded-2xl items-center justify-center mb-4">
                <Ionicons name="lock-closed" size={28} color="#0c0c0c" />
              </View>
              <Text className="text-[#0c0c0c] text-xl font-jetbrains-medium mb-2">
                Wrap
              </Text>
              <Text className="text-gray-400 text-sm font-jetbrains leading-5">
                Convert to encrypted assets
              </Text>
            </TouchableOpacity>

            {/* Unwrap Card */}
            <TouchableOpacity
              onPress={openUnwrapModal}
              className="flex-1 bg-white rounded-3xl p-6 shadow-sm border border-gray-100"
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.05,
                shadowRadius: 8,
                elevation: 2,
              }}
            >
              <View className="w-14 h-14 bg-gray-100 rounded-2xl items-center justify-center mb-4">
                <Ionicons name="lock-open" size={28} color="#0c0c0c" />
              </View>
              <Text className="text-[#0c0c0c] text-xl font-jetbrains-medium mb-2">
                Unwrap
              </Text>
              <Text className="text-gray-400 text-sm font-jetbrains leading-5">
                Convert back to standard tokens
              </Text>
            </TouchableOpacity>
          </View>

          {/* Info Card */}
          <View
            className="bg-white rounded-3xl p-6 mb-6 shadow-sm border border-gray-100"
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.05,
              shadowRadius: 8,
              elevation: 2,
            }}
          >
            <View className="flex-row items-start gap-3 mb-4">
              <View className="w-10 h-10 bg-gray-100 rounded-full items-center justify-center">
                <Ionicons name="shield-checkmark" size={20} color="#0c0c0c" />
              </View>
              <View className="flex-1">
                <Text className="text-[#0c0c0c] text-lg font-jetbrains-medium mb-2">
                  Private Transactions
                </Text>
                <Text className="text-gray-500 text-sm font-jetbrains leading-5">
                  Convert your assets into encrypted assets for complete privacy, or unwrap them back to standard tokens.
                </Text>
              </View>
            </View>
          </View>

          {/* Features Section */}
          <Text className="text-[#0c0c0c] text-xl font-jetbrains-medium mb-4">
            How It Works
          </Text>

          <View className="gap-4">
            {/* Feature 1 */}
            <View
              className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100"
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.05,
                shadowRadius: 8,
                elevation: 2,
              }}
            >
              <View className="flex-row items-start gap-4">
                <View className="w-10 h-10 bg-gray-100 rounded-full items-center justify-center">
                  <Ionicons name="eye-off-outline" size={20} color="#0c0c0c" />
                </View>
                <View className="flex-1">
                  <Text className="text-[#0c0c0c] text-base font-jetbrains-medium mb-2">
                    Complete Privacy
                  </Text>
                  <Text className="text-gray-500 text-sm font-jetbrains leading-5">
                    All wrapped transactions are completely private and cannot be traced on the blockchain
                  </Text>
                </View>
              </View>
            </View>

            {/* Feature 2 */}
            <View
              className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100"
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.05,
                shadowRadius: 8,
                elevation: 2,
              }}
            >
              <View className="flex-row items-start gap-4">
                <View className="w-10 h-10 bg-gray-100 rounded-full items-center justify-center">
                  <Ionicons name="infinite-outline" size={20} color="#0c0c0c" />
                </View>
                <View className="flex-1">
                  <Text className="text-[#0c0c0c] text-base font-jetbrains-medium mb-2">
                    Zero Knowledge Proofs
                  </Text>
                  <Text className="text-gray-500 text-sm font-jetbrains leading-5">
                    Powered by advanced cryptography for secure transactions
                  </Text>
                </View>
              </View>
            </View>

            {/* Feature 3 */}
            <View
              className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100"
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.05,
                shadowRadius: 8,
                elevation: 2,
              }}
            >
              <View className="flex-row items-start gap-4">
                <View className="w-10 h-10 bg-gray-100 rounded-full items-center justify-center">
                  <Ionicons name="flash-outline" size={20} color="#0c0c0c" />
                </View>
                <View className="flex-1">
                  <Text className="text-[#0c0c0c] text-base font-jetbrains-medium mb-2">
                    Instant Processing
                  </Text>
                  <Text className="text-gray-500 text-sm font-jetbrains leading-5">
                    Fast wrap and unwrap operations with minimal fees
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Modal for WRAP/UNWRAP */}
      <Modal
        visible={showModal}
        animationType="slide"
        transparent={false}
        onRequestClose={closeModal}
      >
        <View className="flex-1 bg-gray-50">
          <ScrollView
            className="flex-1"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 40 }}
          >
            <View className="px-6 pt-16 pb-6">
              {/* Header */}
              <View className="flex-row items-center justify-between mb-6">
                <View className="flex-1">
                  <Text className="text-[#0c0c0c] text-3xl font-jetbrains-medium mb-2">
                    {mode === "WRAP" ? "Wrap Assets" : "Unwrap Assets"}
                  </Text>
                  <Text className="text-gray-500 text-sm font-jetbrains">
                    {mode === "WRAP"
                      ? "Step 1/2 - Activate private mode"
                      : "Convert back to standard tokens"}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={closeModal}
                  className="w-12 h-12 items-center justify-center"
                >
                  <Ionicons name="close" size={28} color="#0c0c0c" />
                </TouchableOpacity>
              </View>

              {/* Privacy Info Card (only for WRAP mode) */}
              {mode === "WRAP" && (
                <View
                  className="bg-white rounded-3xl p-6 mb-6 shadow-sm border border-gray-100"
                  style={{
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.05,
                    shadowRadius: 8,
                    elevation: 2,
                  }}
                >
                  <View className="flex-row items-start gap-4">
                    <View className="w-12 h-12 bg-gray-100 rounded-full items-center justify-center">
                      <Ionicons name="lock-closed" size={24} color="#0c0c0c" />
                    </View>
                    <View className="flex-1">
                      <Text className="text-[#0c0c0c] text-base font-jetbrains-medium mb-2">
                        Encrypted Assets
                      </Text>
                      <Text className="text-gray-500 text-sm font-jetbrains leading-5">
                        Amounts, routes, and recipient addresses will only be visible to you. Cannot be seen on explorer.
                      </Text>
                    </View>
                  </View>
                </View>
              )}

              {/* TOKEN Section */}
              <View className="mb-4">
                <Text className="text-gray-400 text-xs font-jetbrains tracking-wider mb-3">
                  TOKEN
                </Text>

                {mode === "WRAP" ? (
                  <View
                    className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                    style={{
                      shadowColor: "#000",
                      shadowOffset: { width: 0, height: 2 },
                      shadowOpacity: 0.05,
                      shadowRadius: 8,
                      elevation: 2,
                    }}
                  >
                    <Text className="text-gray-500 text-sm font-jetbrains text-center leading-5">
                      Connect wallet which has (USDT, USDC or SOL) token
                    </Text>
                  </View>
                ) : (
                  <TouchableOpacity
                    className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex-row items-center justify-between"
                    style={{
                      shadowColor: "#000",
                      shadowOffset: { width: 0, height: 2 },
                      shadowOpacity: 0.05,
                      shadowRadius: 8,
                      elevation: 2,
                    }}
                  >
                    <View className="flex-row items-center gap-3">
                      <View className="w-10 h-10 bg-gray-100 rounded-full items-center justify-center">
                        <Ionicons name="logo-bitcoin" size={20} color="#0c0c0c" />
                      </View>
                      <Text className="text-[#0c0c0c] text-lg font-jetbrains-medium">
                        {selectedToken}
                      </Text>
                    </View>
                    <Ionicons name="chevron-down" size={20} color="#6b7280" />
                  </TouchableOpacity>
                )}
              </View>

              {/* AMOUNT Section */}
              <View className="mb-4">
                <View className="flex-row items-center justify-between mb-3">
                  <Text className="text-gray-400 text-xs font-jetbrains tracking-wider">
                    {mode === "WRAP" ? "ENTER AMOUNT" : "AMOUNT"}
                  </Text>
                  <View className="flex-row items-center gap-2">
                    <Text className="text-gray-500 text-xs font-jetbrains">
                      Balance:
                    </Text>
                    <Text className="text-[#0c0c0c] text-xs font-jetbrains-medium">
                      {balance.toFixed(4)}
                    </Text>
                    <TouchableOpacity
                      onPress={handleMaxAmount}
                      className="bg-gray-100 px-3 py-1 rounded-lg ml-1"
                    >
                      <Text className="text-gray-500 text-xs font-jetbrains-medium">
                        MAX
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View
                  className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100"
                  style={{
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.05,
                    shadowRadius: 8,
                    elevation: 2,
                  }}
                >
                  <TextInput
                    value={amount}
                    onChangeText={setAmount}
                    placeholder="0.0000"
                    placeholderTextColor="#d1d5db"
                    keyboardType="numeric"
                    className="text-[#0c0c0c] text-3xl font-jetbrains-medium"
                  />
                  <Text className="text-gray-400 text-xs font-jetbrains mt-1">$0.00</Text>
                </View>
              </View>

              {/* Recipient Address (only for UNWRAP mode) */}
              {mode === "UNWRAP" && (
                <View className="mb-4">
                  <Text className="text-gray-400 text-xs font-jetbrains tracking-wider mb-3">
                    RECIPIENT ADDRESS (OPTIONAL)
                  </Text>
                  <View
                    className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex-row items-center justify-between"
                    style={{
                      shadowColor: "#000",
                      shadowOffset: { width: 0, height: 2 },
                      shadowOpacity: 0.05,
                      shadowRadius: 8,
                      elevation: 2,
                    }}
                  >
                    <TextInput
                      value={recipientAddress}
                      onChangeText={setRecipientAddress}
                      placeholder="Enter different recipient address"
                      placeholderTextColor="#d1d5db"
                      className="flex-1 text-[#0c0c0c] text-sm font-jetbrains"
                    />
                    <TouchableOpacity
                      onPress={handlePaste}
                      className="bg-gray-100 px-3 py-2 rounded-lg ml-2"
                    >
                      <Text className="text-gray-500 text-xs font-jetbrains-medium">
                        PASTE
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}

              {/* Fee Information */}
              <View
                className="bg-white rounded-2xl p-5 mb-6 shadow-sm border border-gray-100"
                style={{
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.05,
                  shadowRadius: 8,
                  elevation: 2,
                }}
              >
                <View className="flex-row items-center justify-between mb-3">
                  <Text className="text-gray-500 text-sm font-jetbrains">
                    {mode === "WRAP" ? "Wrapping Fee" : "Unwrapping Fee"}
                  </Text>
                  <Text className="text-[#0c0c0c] text-sm font-jetbrains-medium">
                    FREE
                  </Text>
                </View>

                {mode === "UNWRAP" && (
                  <View className="flex-row items-center justify-between pt-3 border-t border-gray-100">
                    <Text className="text-gray-500 text-sm font-jetbrains">
                      Min withdrawal
                    </Text>
                    <Text className="text-[#0c0c0c] text-sm font-jetbrains-medium">
                      $1.00
                    </Text>
                  </View>
                )}
              </View>

              {/* Submit Button */}
              <TouchableOpacity
                className="bg-[#0c0c0c] py-5 rounded-2xl shadow-lg mb-4"
                style={{
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.1,
                  shadowRadius: 12,
                  elevation: 4,
                }}
              >
                <Text className="text-white text-center text-base font-jetbrains-medium tracking-wider">
                  {mode === "WRAP" ? "WRAP ASSETS" : "UNWRAP ASSETS"}
                </Text>
              </TouchableOpacity>

              {/* Additional Info */}
              {mode === "WRAP" && (
                <View className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
                  <View className="flex-row items-start gap-3">
                    <Ionicons name="information-circle" size={20} color="#3b82f6" />
                    <View className="flex-1">
                      <Text className="text-blue-900 text-xs font-jetbrains-medium mb-1">
                        IMPORTANT
                      </Text>
                      <Text className="text-blue-700 text-xs font-jetbrains leading-5">
                        Make sure you have enough balance to cover the transaction. Wrapped assets will appear in your encrypted balance.
                      </Text>
                    </View>
                  </View>
                </View>
              )}
            </View>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
}
