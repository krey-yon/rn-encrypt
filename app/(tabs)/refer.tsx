import { useState } from "react";
import { Text, View, TouchableOpacity, ScrollView, Clipboard, Alert, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Refer() {
  const [totalReferrals] = useState(0);
  const [totalPoints] = useState(0.0);
  const [referralLink] = useState("https://encrypt.trade/referral/ref-43b43cff");
  const router = useRouter();

  // Sample leaderboard data
  const [leaderboardData] = useState([
    { rank: 1, address: "2FRFWM...w2S2", points: 381501.35 },
    { rank: 2, address: "D9FAVY...zF7u", points: 319952.15 },
    { rank: 3, address: "2pJm7G...ENUC", points: 287053.81 },
    { rank: 4, address: "DGSW2t...Gyp6", points: 238741.95 },
    { rank: 5, address: "C5RhFp...JgNx", points: 210071.46 },
    { rank: 6, address: "5xadGB...1sDE", points: 173115.57 },
  ]);

  const copyToClipboard = () => {
    Clipboard.setString(referralLink);
    Alert.alert("Copied!", "Referral link copied to clipboard");
  };

  const shareOnX = async () => {
    const text = encodeURIComponent(`Join me on Encrypt.Trade for private cross-chain bridging! ${referralLink}`);
    await Linking.openURL(`https://twitter.com/intent/tweet?text=${text}`);
  };

  const getRankBadge = (rank: number) => {
    if (rank === 1) return { emoji: "🥇", color: "bg-yellow-500" };
    if (rank === 2) return { emoji: "🥈", color: "bg-gray-400" };
    if (rank === 3) return { emoji: "🥉", color: "bg-orange-600" };
    return { emoji: rank.toString(), color: "bg-gray-200" };
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
            Referral Program
          </Text>
          <Text className="text-gray-500 text-base font-jetbrains mb-8">
            Earn rewards by inviting friends
          </Text>

          {/* Stats Cards Row */}
          <View className="flex-row gap-4 mb-6">
            {/* Total Referrals Card */}
            <View
              className="flex-1 bg-white rounded-3xl p-6 shadow-sm border border-gray-100"
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.05,
                shadowRadius: 8,
                elevation: 2,
              }}
            >
              <View className="w-12 h-12 bg-gray-100 rounded-2xl items-center justify-center mb-4">
                <Ionicons name="people-outline" size={24} color="#0c0c0c" />
              </View>
              <Text className="text-gray-400 text-xs font-jetbrains tracking-wider mb-2">
                TOTAL REFERRALS
              </Text>
              <Text className="text-[#0c0c0c] text-3xl font-jetbrains-medium">
                {totalReferrals}
              </Text>
            </View>

            {/* Total Points Card */}
            <View
              className="flex-1 bg-white rounded-3xl p-6 shadow-sm border border-gray-100"
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.05,
                shadowRadius: 8,
                elevation: 2,
              }}
            >
              <View className="w-12 h-12 bg-gray-100 rounded-2xl items-center justify-center mb-4">
                <Ionicons name="star-outline" size={24} color="#0c0c0c" />
              </View>
              <Text className="text-gray-400 text-xs font-jetbrains tracking-wider mb-2">
                POINTS EARNED
              </Text>
              <Text className="text-[#0c0c0c] text-3xl font-jetbrains-medium">
                {totalPoints.toFixed(2)}
              </Text>
            </View>
          </View>

          {/* Referral Link Card */}
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
            <Text className="text-gray-400 text-xs font-jetbrains tracking-wider mb-4">
              YOUR REFERRAL LINK
            </Text>
            
            {/* Link Display */}
            <View className="bg-gray-50 rounded-2xl p-4 mb-4">
              <Text className="text-[#0c0c0c] font-jetbrains text-sm" numberOfLines={1}>
                {referralLink}
              </Text>
            </View>

            {/* Action Buttons */}
            <View className="flex-row gap-3">
              <TouchableOpacity
                onPress={copyToClipboard}
                className="flex-1 bg-[#0c0c0c] py-4 rounded-xl flex-row items-center justify-center gap-2"
              >
                <Ionicons name="copy-outline" size={18} color="white" />
                <Text className="text-white font-jetbrains-medium text-sm tracking-wider">
                  COPY
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={shareOnX}
                className="flex-1 bg-gray-100 py-4 rounded-xl flex-row items-center justify-center gap-2"
              >
                <Ionicons name="logo-twitter" size={18} color="#0c0c0c" />
                <Text className="text-[#0c0c0c] font-jetbrains-medium text-sm tracking-wider">
                  SHARE
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Leaderboard Section */}
          <View className="mb-6">
            <View className="flex-row items-center mb-4">
              <Ionicons name="trophy-outline" size={24} color="#0c0c0c" />
              <Text className="text-[#0c0c0c] text-xl font-jetbrains-medium ml-2">
                Leaderboard
              </Text>
            </View>

            <View
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100"
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.05,
                shadowRadius: 8,
                elevation: 2,
              }}
            >
              {/* Table Header */}
              <View className="flex-row items-center px-6 py-4 bg-gray-50 border-b border-gray-100">
                <Text className="w-12 text-gray-400 text-xs font-jetbrains tracking-wider">
                  RANK
                </Text>
                <Text className="flex-1 text-gray-400 text-xs font-jetbrains tracking-wider">
                  ADDRESS
                </Text>
                <Text className="w-24 text-gray-400 text-xs font-jetbrains tracking-wider text-right">
                  POINTS
                </Text>
              </View>

              {/* Leaderboard Rows */}
              {leaderboardData.map((item, index) => {
                const badge = getRankBadge(item.rank);
                return (
                  <View
                    key={index}
                    className="flex-row items-center px-6 py-5 border-b border-gray-50"
                  >
                    <View className="w-12">
                      {item.rank <= 3 ? (
                        <Text className="text-2xl">{badge.emoji}</Text>
                      ) : (
                        <Text className="text-[#0c0c0c] text-base font-jetbrains-medium">
                          {item.rank}
                        </Text>
                      )}
                    </View>
                    <Text className="flex-1 text-[#0c0c0c] text-sm font-jetbrains">
                      {item.address}
                    </Text>
                    <Text className="w-24 text-[#0c0c0c] text-sm font-jetbrains-medium text-right">
                      {item.points.toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>

          {/* How It Works Section */}
          <View className="mb-6">
            <Text className="text-[#0c0c0c] text-xl font-jetbrains-medium mb-4">
              How It Works
            </Text>

            <View className="gap-4">
              {/* Step 1 */}
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
                    <Text className="text-[#0c0c0c] text-lg font-jetbrains-medium">1</Text>
                  </View>
                  <View className="flex-1">
                    <Text className="text-[#0c0c0c] text-base font-jetbrains-medium mb-2">
                      Share Your Link
                    </Text>
                    <Text className="text-gray-500 text-sm font-jetbrains leading-5">
                      Copy your unique referral link and share it with friends or on social media.
                    </Text>
                  </View>
                </View>
              </View>

              {/* Step 2 */}
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
                    <Text className="text-[#0c0c0c] text-lg font-jetbrains-medium">2</Text>
                  </View>
                  <View className="flex-1">
                    <Text className="text-[#0c0c0c] text-base font-jetbrains-medium mb-2">
                      Friends Join
                    </Text>
                    <Text className="text-gray-500 text-sm font-jetbrains leading-5">
                      When someone uses your link, they're automatically connected to your referral account.
                    </Text>
                  </View>
                </View>
              </View>

              {/* Step 3 */}
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
                    <Text className="text-[#0c0c0c] text-lg font-jetbrains-medium">3</Text>
                  </View>
                  <View className="flex-1">
                    <Text className="text-[#0c0c0c] text-base font-jetbrains-medium mb-2">
                      Earn Rewards
                    </Text>
                    <Text className="text-gray-500 text-sm font-jetbrains leading-5">
                      Earn 10% of their wrap fees. Rewards distributed every Sunday at 12:30 PM ET.
                    </Text>
                  </View>
                </View>
              </View>

              {/* Step 4 */}
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
                    <Text className="text-[#0c0c0c] text-lg font-jetbrains-medium">4</Text>
                  </View>
                  <View className="flex-1">
                    <Text className="text-[#0c0c0c] text-base font-jetbrains-medium mb-2">
                      Track Progress
                    </Text>
                    <Text className="text-gray-500 text-sm font-jetbrains leading-5">
                      Monitor your referral count and earned rewards in real-time through this dashboard.
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
