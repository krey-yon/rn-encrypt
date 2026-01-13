import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, ScrollView, Modal } from "react-native";
import Svg, { Path, Rect } from "react-native-svg";

type Mode = "WRAP" | "UNWRAP";

export default function Wrap() {
  const [mode, setMode] = useState<Mode>("WRAP");
  const [showModal, setShowModal] = useState(false);
  const [amount, setAmount] = useState("");
  const [recipientAddress, setRecipientAddress] = useState("");
  const [selectedToken, setSelectedToken] = useState("SOL");
  const [balance] = useState(0.0);

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
    <View className="flex-1 bg-[#0c0c0c]">
      <ScrollView className="flex-1">
        <View className="px-6 pt-16 pb-8">
          {/* Mode Selection Buttons */}
          <View className="flex-row gap-4 mb-8">
            <TouchableOpacity
              onPress={openWrapModal}
              className="flex-1 bg-[#5024ff] py-6 rounded-2xl border border-[#682ad5]"
            >
              <Text className="text-white text-center text-xl font-jetbrains-medium tracking-widest">
                WRAP
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={openUnwrapModal}
              className="flex-1 bg-[#5024ff] py-6 rounded-2xl border border-[#682ad5]"
            >
              <Text className="text-white text-center text-xl font-jetbrains-medium tracking-widest">
                UNWRAP
              </Text>
            </TouchableOpacity>
          </View>

          {/* Info Card */}
          <View className="bg-[#ffffff0d] border border-[#ffffff0d] rounded-2xl p-6 mb-6">
            <Text className="text-white text-2xl font-jetbrains-medium mb-4">
              Private Transactions
            </Text>
            <Text className="text-gray-400 text-base font-jetbrains leading-6 mb-4">
              Convert your assets into encrypted assets for complete privacy, or unwrap them back to standard tokens.
            </Text>
            <View className="flex-row items-start gap-3">
              <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <Path
                  d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                  stroke="#5024ff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="#5024ff26"
                />
              </Svg>
              <Text className="text-gray-400 text-sm font-jetbrains leading-5 flex-1">
                All wrapped transactions are completely private and cannot be traced on the blockchain
              </Text>
            </View>
          </View>

          {/* Features */}
          <View className="gap-4">
            <View className="bg-[#ffffff0d] border border-[#ffffff0d] rounded-xl p-5 flex-row items-center gap-4">
              <View className="w-12 h-12 bg-[#5024ff26] rounded-full items-center justify-center">
                <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <Path
                    d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                    stroke="#5024ff"
                    strokeWidth="2"
                  />
                  <Path
                    d="M12 16v-4M12 8h.01"
                    stroke="#5024ff"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </Svg>
              </View>
              <View className="flex-1">
                <Text className="text-white text-base font-jetbrains-medium mb-1">
                  Zero Knowledge Proofs
                </Text>
                <Text className="text-gray-400 text-sm font-jetbrains">
                  Powered by advanced cryptography
                </Text>
              </View>
            </View>

            <View className="bg-[#ffffff0d] border border-[#ffffff0d] rounded-xl p-5 flex-row items-center gap-4">
              <View className="w-12 h-12 bg-[#5024ff26] rounded-full items-center justify-center">
                <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <Path
                    d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                    stroke="#5024ff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="#5024ff26"
                  />
                </Svg>
              </View>
              <View className="flex-1">
                <Text className="text-white text-base font-jetbrains-medium mb-1">
                  Instant Processing
                </Text>
                <Text className="text-gray-400 text-sm font-jetbrains">
                  Fast wrap and unwrap operations
                </Text>
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
        <View className="flex-1 bg-[#0c0c0c]">
          <ScrollView className="flex-1">
            <View className="px-6 pt-12 pb-8">
              {/* Header */}
              <View className="flex-row items-center justify-between mb-6">
                <View className="flex-1">
                  {mode === "WRAP" ? (
                    <>
                      <Text className="text-white text-2xl font-jetbrains-medium tracking-widest mb-2">
                        STEP 1/2 - ACTIVATE PRIVATE MODE
                      </Text>
                      <Text className="text-gray-400 text-sm font-jetbrains">
                        Convert assets into encrypted assets
                      </Text>
                    </>
                  ) : (
                    <Text className="text-white text-3xl font-jetbrains-medium tracking-widest">
                      UNWRAP
                    </Text>
                  )}
                </View>
                <TouchableOpacity onPress={closeModal} className="w-12 h-12 items-center justify-center">
                  <Text className="text-gray-400 text-4xl font-jetbrains">×</Text>
                </TouchableOpacity>
              </View>

              {/* Privacy Info Card (only for WRAP mode) */}
              {mode === "WRAP" && (
                <View className="bg-[#ffffff0d] border border-[#ffffff0d] rounded-2xl p-6 mb-8">
                  <View className="flex-row items-start gap-4">
                    <View className="w-10 h-10 bg-[#5024ff] rounded-full items-center justify-center mt-1">
                      <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <Rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="white" strokeWidth="2" />
                        <Path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="white" strokeWidth="2" strokeLinecap="round" />
                      </Svg>
                    </View>
                    <View className="flex-1">
                      <Text className="text-white text-lg font-jetbrains-medium mb-3">
                        Encrypted Assets cannot be seen on explorer
                      </Text>
                      <Text className="text-gray-400 text-sm font-jetbrains leading-5">
                        This step is done so that amounts, routes, and recipients address is only visible to you.
                      </Text>
                    </View>
                  </View>
                </View>
              )}

              {/* TOKEN Section */}
              <View className="mb-6">
                <Text className="text-gray-400 text-base font-jetbrains tracking-wider mb-4">
                  TOKEN
                </Text>

                {mode === "WRAP" ? (
                  <View className="bg-[#ffffff0d] border border-[#ffffff0d] rounded-xl p-6">
                    <Text className="text-gray-400 text-sm font-jetbrains text-center leading-6">
                      Connect wallet which has (USDT, USDC or SOL) token
                    </Text>
                  </View>
                ) : (
                  <TouchableOpacity className="bg-[#ffffff0d] border border-[#ffffff0d] rounded-xl p-5 flex-row items-center justify-between">
                    <View className="flex-row items-center gap-3">
                      <View className="w-10 h-10 rounded-full overflow-hidden">
                        <Svg width="40" height="40" viewBox="0 0 40 40">
                          <Rect width="40" height="20" fill="#00D4AA" />
                          <Rect y="20" width="40" height="20" fill="#5024ff" />
                        </Svg>
                      </View>
                      <Text className="text-white text-xl font-jetbrains-medium">
                        {selectedToken}
                      </Text>
                    </View>
                    <Text className="text-gray-400 text-xl">›</Text>
                  </TouchableOpacity>
                )}
              </View>

              {/* AMOUNT Section */}
              <View className="mb-6">
                <View className="flex-row items-center justify-between mb-4">
                  <Text className="text-gray-400 text-base font-jetbrains tracking-wider">
                    {mode === "WRAP" ? "ENTER AMOUNT" : "AMOUNT"}
                  </Text>
                  <View className="flex-row items-center gap-2">
                    <Text className="text-gray-400 text-sm font-jetbrains">
                      BAL:
                    </Text>
                    <Text className="text-white text-sm font-jetbrains">
                      {balance.toFixed(4)}
                    </Text>
                    <TouchableOpacity
                      onPress={handleMaxAmount}
                      className="bg-[#5024ff] px-3 py-1 rounded-lg ml-2"
                    >
                      <Text className="text-white text-xs font-jetbrains-medium tracking-wider">
                        MAX
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <TextInput
                  value={amount}
                  onChangeText={setAmount}
                  placeholder="0.0000"
                  placeholderTextColor="#666"
                  keyboardType="numeric"
                  className="bg-[#ffffff0d] border border-[#ffffff0d] rounded-xl px-6 py-5 text-white text-2xl font-jetbrains"
                />
              </View>

              {/* Recipient Address (only for UNWRAP mode) */}
              {mode === "UNWRAP" && (
                <View className="mb-6">
                  <View className="bg-[#ffffff0d] border border-[#ffffff0d] rounded-xl px-6 py-5 flex-row items-center justify-between">
                    <TextInput
                      value={recipientAddress}
                      onChangeText={setRecipientAddress}
                      placeholder="(Optional) Different Recipient Address"
                      placeholderTextColor="#666"
                      className="flex-1 text-white text-sm font-jetbrains"
                    />
                    <TouchableOpacity
                      onPress={handlePaste}
                      className="bg-[#5024ff26] px-4 py-2 rounded-lg ml-3"
                    >
                      <Text className="text-white text-xs font-jetbrains-medium tracking-wider">
                        PASTE
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}

              {/* Fee Information */}
              <View className="bg-[#ffffff0d] border border-[#ffffff0d] rounded-xl p-5 mb-6">
                <View className="flex-row items-center justify-between mb-3">
                  <Text className="text-gray-400 text-sm font-jetbrains">
                    {mode === "WRAP" ? "Wrapping Fee" : "Unwrapping Fee"}
                  </Text>
                  <Text className="text-white text-sm font-jetbrains-medium">
                    FREE
                  </Text>
                </View>

                {mode === "UNWRAP" && (
                  <View className="flex-row items-center justify-between pt-3 border-t border-[#ffffff0d]">
                    <Text className="text-gray-400 text-sm font-jetbrains">
                      Min withdrawal
                    </Text>
                    <Text className="text-white text-sm font-jetbrains-medium">
                      1$
                    </Text>
                  </View>
                )}
              </View>

              {/* Submit Button */}
              <TouchableOpacity className="bg-[#5024ff] py-6 rounded-2xl border border-[#682ad5]">
                <Text className="text-white text-center text-xl font-jetbrains-medium tracking-widest">
                  ENTER AMOUNT
                </Text>
              </TouchableOpacity>

              {/* Additional Info */}
              {mode === "WRAP" && (
                <View className="mt-6 bg-[#5024ff26] border border-[#5024ff] rounded-xl p-5">
                  <Text className="text-[#5024ff] text-xs font-jetbrains-medium mb-2">
                    ℹ️ IMPORTANT
                  </Text>
                  <Text className="text-gray-300 text-xs font-jetbrains leading-5">
                    Make sure you have enough balance to cover the transaction. Wrapped assets will appear in your encrypted balance.
                  </Text>
                </View>
              )}
            </View>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
}
