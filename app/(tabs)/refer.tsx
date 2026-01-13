import { useState } from "react";
import { Text, View, TouchableOpacity, ScrollView, Clipboard, Alert } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function Refer() {
  const [totalReferrals] = useState(0);
  const [totalPoints] = useState(0.0);
  const [referralLink] = useState("https://encrypt.trade/referral/ref-43b43cff_encipher-io-432");

  // Sample leaderboard data
  const [leaderboardData] = useState([
    { rank: 1, address: "2FRFWM...w2S2", points: 381501.35 },
    { rank: 2, address: "D9FAVY...zF7u", points: 319952.15 },
    { rank: 3, address: "2pJm7G...ENUC", points: 287053.81 },
    { rank: 4, address: "DGSW2t...Gyp6", points: 238741.95 },
    { rank: 5, address: "C5RhFp...JgNx", points: 210071.46 },
    { rank: 6, address: "5xadGB...1sDE", points: 173115.57 },
  ]);

  // Generate random stars for background
  const stars = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 2 + 1,
    opacity: Math.random() * 0.5 + 0.3,
  }));

  const copyToClipboard = () => {
    Clipboard.setString(referralLink);
    Alert.alert("Copied!", "Referral link copied to clipboard");
  };

  const shareOnX = () => {
    // Handle share on X/Twitter
    Alert.alert("Share", "Opening X to share your referral link");
  };

  const getRankIcon = (rank: number) => {
    if (rank === 1) return "🥇";
    if (rank === 2) return "🥈";
    if (rank === 3) return "🥉";
    return rank.toString();
  };

  return (
    <ScrollView className="flex-1 bg-[#0c0c0c]">
      {/* Header Section with Stars Background */}
      <View className="relative px-6 pt-16 pb-8">
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

        {/* Header Title */}
        <View className="relative z-10 mb-8">
          <Text className="text-white text-3xl font-jetbrains-medium tracking-widest">
            REFERRAL DASHBOARD
          </Text>
        </View>

        {/* Stats Cards */}
        <View className="relative z-10 gap-4">
          {/* Total Referrals Card */}
          <View className="bg-[#ffffff0d] border border-[#ffffff0d] rounded-2xl p-6">
            <Text className="text-gray-400 text-sm font-jetbrains tracking-wider mb-4">
              TOTAL REFERRALS
            </Text>
            <View className="flex-row items-center gap-4">
              <View className="w-12 h-12 bg-[#5024ff] rounded-full items-center justify-center">
                <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <Path
                    d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </Svg>
              </View>
              <Text className="text-white text-5xl font-jetbrains">
                {totalReferrals}
              </Text>
            </View>
          </View>

          {/* Total Points Card */}
          <View className="bg-[#ffffff0d] border border-[#ffffff0d] rounded-2xl p-6">
            <Text className="text-gray-400 text-sm font-jetbrains tracking-wider mb-4">
              TOTAL POINTS EARNED
            </Text>
            <View className="flex-row items-center gap-4">
              <View className="w-12 h-12 bg-[#5024ff] rounded-full items-center justify-center">
                <Text className="text-3xl">⭐</Text>
              </View>
              <Text className="text-white text-5xl font-jetbrains">
                {totalPoints.toFixed(3)}
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Referral Link Section */}
      <View className="px-6 py-6">
        <Text className="text-gray-400 text-base font-jetbrains tracking-wider mb-4">
          REFERRAL LINK
        </Text>

        {/* Link Display and Copy */}
        <View className="bg-[#ffffff0d] border border-[#ffffff0d] rounded-xl p-4 mb-4 flex-row items-center justify-between">
          <Text className="text-white font-jetbrains text-xs flex-1" numberOfLines={1}>
            {referralLink}
          </Text>
          <TouchableOpacity
            onPress={copyToClipboard}
            className="bg-[#5024ff26] px-4 py-2 rounded-lg ml-3 flex-row items-center gap-2"
          >
            <Svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <Path
                d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
            <Text className="text-white font-jetbrains-medium text-sm tracking-wider">
              COPY
            </Text>
          </TouchableOpacity>
        </View>

        {/* Share on X Button */}
        <TouchableOpacity
          onPress={shareOnX}
          className="bg-[#5024ff] py-4 rounded-xl flex-row items-center justify-center gap-2"
        >
          <Text className="text-white font-jetbrains-medium text-base tracking-wider">
            SHARE ON X
          </Text>
          <Svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <Path
              d="M7 17L17 7M17 7H7M17 7v10"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        </TouchableOpacity>
      </View>

      {/* Leaderboard Section */}
      <View className="px-6 py-6">
        <View className="flex-row items-center gap-3 mb-6">
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path
              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
              fill="#5024ff"
              stroke="#5024ff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
          <Text className="text-white text-2xl font-jetbrains-medium tracking-widest">
            REFERRAL POINTS LEADERBOARD
          </Text>
        </View>

        {/* Leaderboard Table */}
        <View className="bg-[#ffffff0d] border border-[#ffffff0d] rounded-2xl overflow-hidden">
          {/* Table Header */}
          <View className="flex-row items-center px-6 py-4 border-b border-[#ffffff0d]">
            <Text className="w-16 text-gray-400 text-sm font-jetbrains tracking-wider">
              RANK
            </Text>
            <Text className="flex-1 text-gray-400 text-sm font-jetbrains tracking-wider">
              ADDRESS
            </Text>
            <Text className="w-32 text-gray-400 text-sm font-jetbrains tracking-wider text-right">
              POINTS
            </Text>
          </View>

          {/* Leaderboard Rows */}
          {leaderboardData.map((item, index) => (
            <View
              key={index}
              className="flex-row items-center px-6 py-5 border-b border-[#ffffff0d]"
            >
              <View className="w-16">
                {item.rank <= 3 ? (
                  <View className="w-10 h-10 items-center justify-center">
                    <Text className="text-3xl">{getRankIcon(item.rank)}</Text>
                  </View>
                ) : (
                  <View className="flex-row items-center gap-2">
                    <Text className="text-white text-xl font-jetbrains">
                      {item.rank}
                    </Text>
                    <Text className="text-gray-500 text-sm font-jetbrains">
                      #{item.rank}
                    </Text>
                  </View>
                )}
              </View>
              <Text className="flex-1 text-white text-base font-jetbrains">
                {item.address}
              </Text>
              <Text className="w-32 text-white text-base font-jetbrains text-right">
                {item.points.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* How It Works Section */}
      <View className="px-6 py-6 pb-12">
        <Text className="text-white text-2xl font-jetbrains-medium tracking-widest mb-6">
          HOW THE REFERRAL PROGRAM WORKS
        </Text>

        <View className="gap-4">
          {/* Step 1 */}
          <View className="bg-[#ffffff0d] border border-[#ffffff0d] rounded-2xl p-6">
            <View className="flex-row items-center gap-4 mb-4">
              <View className="w-14 h-14 bg-[#5024ff] rounded-full items-center justify-center">
                <Text className="text-white text-2xl font-jetbrains-medium">1</Text>
              </View>
              <Text className="text-white text-xl font-jetbrains-medium flex-1">
                Share Your Link
              </Text>
            </View>
            <Text className="text-gray-300 text-base font-jetbrains leading-6">
              Copy your unique referral link and share it with friends, family, or on social media. Each link is tied to your wallet address and tracks successful referrals.
            </Text>
          </View>

          {/* Step 2 */}
          <View className="bg-[#ffffff0d] border border-[#ffffff0d] rounded-2xl p-6">
            <View className="flex-row items-center gap-4 mb-4">
              <View className="w-14 h-14 bg-[#5024ff] rounded-full items-center justify-center">
                <Text className="text-white text-2xl font-jetbrains-medium">2</Text>
              </View>
              <Text className="text-white text-xl font-jetbrains-medium flex-1">
                Friends Join
              </Text>
            </View>
            <Text className="text-gray-300 text-base font-jetbrains leading-6">
              When someone uses your referral link to access Encipher, they're automatically connected to your referral account. No additional steps required from them.
            </Text>
          </View>

          {/* Step 3 */}
          <View className="bg-[#ffffff0d] border border-[#ffffff0d] rounded-2xl p-6">
            <View className="flex-row items-center gap-4 mb-4">
              <View className="w-14 h-14 bg-[#5024ff] rounded-full items-center justify-center">
                <Text className="text-white text-2xl font-jetbrains-medium">3</Text>
              </View>
              <Text className="text-white text-xl font-jetbrains-medium flex-1">
                Earn Points
              </Text>
            </View>
            <Text className="text-gray-300 text-base font-jetbrains leading-6">
              Earn points to the tune of 10% of their wrap fees. Rewards are calculated automatically and distributed on every sunday 12:30 PM ET
            </Text>
          </View>

          {/* Step 4 */}
          <View className="bg-[#ffffff0d] border border-[#ffffff0d] rounded-2xl p-6">
            <View className="flex-row items-center gap-4 mb-4">
              <View className="w-14 h-14 bg-[#5024ff] rounded-full items-center justify-center">
                <Text className="text-white text-2xl font-jetbrains-medium">4</Text>
              </View>
              <Text className="text-white text-xl font-jetbrains-medium flex-1">
                Track Progress
              </Text>
            </View>
            <Text className="text-gray-300 text-base font-jetbrains leading-6">
              Monitor your referral count and earned rewards in real-time through this dashboard. Watch your network grow and rewards accumulate as more people join through your link.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
