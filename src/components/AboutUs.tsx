import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AboutUs() {
  const { width } = useWindowDimensions();

  const isDesktop = width >= 1024;
  const isTablet = width >= 768 && width < 1024;
  const isMobile = width < 768;

  const horizontalPadding = isMobile ? 20 : isTablet ? 32 : 48;
  const imageHeight = isMobile ? 280 : isTablet ? 340 : 420;

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        className="flex-1 bg-white"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 24 }}
      >
        
        <View
          className="w-full self-center py-8"
          style={{
            maxWidth: 1280,
            paddingHorizontal: horizontalPadding,
            paddingVertical: isDesktop ? 64 : 32,
          }}
        >
          <View
            className="w-full items-center justify-between"
            style={{
              flexDirection: isDesktop ? "row" : "column",
              gap: isDesktop ? 48 : 36,
            }}
          >
           
            <View
              className="w-full"
              style={{
                flex: isDesktop ? 1 : undefined,
                maxWidth: isDesktop ? 560 : undefined,
              }}
            >
              <Text
                className="font-bold text-stone-900"
                style={{
                  fontSize: isMobile ? 36 : isTablet ? 44 : 58,
                  lineHeight: isMobile ? 44 : isTablet ? 54 : 68,
                  fontFamily: "serif",
                }}
              >
                Healthy Meals{" "}
                <Text className="text-[#3B5323]">Happier Lives</Text>
              </Text>

              <Text className="mt-3 text-base font-medium text-stone-700">
                Fresh. Nutritious. Convenient. Delivered to You.
              </Text>

              <Text className="mt-3 text-sm leading-6 text-stone-500">
                At Healthify, we make healthy eating simple and enjoyable with
                chef-prepared meals, customized plans, and a commitment to your
                wellness goals.
              </Text>

              
              <View
                className="mt-6 flex-row flex-wrap items-center"
                style={{ gap: 12 }}
              >
                <Pressable
                  className="flex-row items-center rounded-full bg-[#1C2816] shadow-md active:opacity-80"
                  style={{
                    paddingHorizontal: 20,
                    paddingVertical: 14,
                  }}
                >
                  <Text className="mr-2 text-sm font-medium text-white">
                    Explore Meal Plans
                  </Text>
                  <Text className="text-sm text-white">➔</Text>
                </Pressable>

                <Pressable
                  className="rounded-full border border-stone-300 bg-white active:opacity-80"
                  style={{
                    paddingHorizontal: 20,
                    paddingVertical: 14,
                  }}
                >
                  <Text className="text-sm font-medium text-stone-800">
                    Learn More
                  </Text>
                </Pressable>
              </View>

              
              <View
                className="mt-8 flex-row flex-wrap items-center"
                style={{ gap: 16 }}
              >
                <View className="flex-row items-center" style={{ gap: 7 }}>
                  <Feather name="check-circle" size={16} color="#3B5323" />
                  <Text className="text-xs font-semibold text-stone-700">
                    Fresh Ingredients
                  </Text>
                </View>

                <View className="flex-row items-center" style={{ gap: 7 }}>
                  <Feather name="award" size={16} color="#3B5323" />
                  <Text className="text-xs font-semibold text-stone-700">
                    Nutritionist Approved
                  </Text>
                </View>

                <View className="flex-row items-center" style={{ gap: 7 }}>
                  <Feather name="truck" size={16} color="#3B5323" />
                  <Text className="text-xs font-semibold text-stone-700">
                    Delivered to Your Door
                  </Text>
                </View>
              </View>
            </View>

            <View
              className="w-full items-center justify-center"
              style={{
                flex: isDesktop ? 1 : undefined,
                maxWidth: isDesktop ? 560 : undefined,
                marginTop: isDesktop ? 0 : 8,
              }}
            >
              <View className="absolute right-4 z-10" style={{ top: -20 }}>
                <Text className="text-xs italic text-[#3B5323]">
                  Good Food Brighten You ↗
                </Text>
              </View>

              <View
                className="w-full overflow-hidden rounded-3xl bg-stone-100 shadow-lg"
                style={{ height: imageHeight }}
              >
                <Image
                  source={require("../../assets/images/salad.png")}
                  style={{ width: "100%", height: "100%" }}
                  resizeMode="cover"
                />
              </View>

              <View
                className="absolute flex-row items-center rounded-2xl border border-stone-100 bg-white shadow-xl"
                style={{
                  bottom: -18,
                  right: 12,
                  paddingHorizontal: 12,
                  paddingVertical: 10,
                  gap: 10,
                }}
              >
                <View className="rounded-xl bg-emerald-50 p-2">
                  <Feather name="feather" size={18} color="#3B5323" />
                </View>

                <View>
                  <Text className="text-xs font-bold text-stone-900">
                    Nutritious Meals
                  </Text>
                  <Text className="text-[10px] text-stone-500">
                    & Healthier Tomorrow
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View className="my-6 border-y border-stone-200/60 bg-stone-50/80 py-6">
          <View
            className="w-full self-center flex-row flex-wrap items-center justify-around"
            style={{
              maxWidth: 1280,
              paddingHorizontal: horizontalPadding,
              gap: 20,
            }}
          >
            <StatItem
              icon={<Feather name="refresh-cw" size={20} color="#3B5323" />}
              value="1M+"
              label="Meals Delivered"
            />

            <StatItem
              icon={
                <MaterialCommunityIcons
                  name="food-apple-outline"
                  size={22}
                  color="#3B5323"
                />
              }
              value="30K+"
              label="Happy Customers"
            />

            <StatItem
              icon={<Ionicons name="star-outline" size={20} color="#3B5323" />}
              value="4.8/5"
              label="Customer Satisfaction"
            />

            <StatItem
              icon={<Feather name="users" size={20} color="#3B5323" />}
              value="550+"
              label="Corporate Clients"
            />
          </View>
        </View>

        <View
          className="w-full self-center py-12"
          style={{
            maxWidth: 1280,
            paddingHorizontal: horizontalPadding,
            paddingVertical: isDesktop ? 64 : 40,
          }}
        >
          <View
            className="w-full items-center justify-between"
            style={{
              flexDirection: isDesktop ? "row" : "column",
              gap: isDesktop ? 64 : 40,
            }}
          >
            <View
              className="w-full"
              style={{
                flex: isDesktop ? 1 : undefined,
                maxWidth: isDesktop ? 560 : undefined,
                marginBottom: isDesktop ? 0 : 42,
              }}
            >
              <View
                className="w-full overflow-hidden rounded-3xl bg-stone-100 shadow-md"
                style={{ height: isMobile ? 280 : isTablet ? 340 : 380 }}
              >
                <Image
                  source={require("../../assets/images/salad2.png")}
                  style={{ width: "100%", height: "100%" }}
                  resizeMode="cover"
                />
              </View>

              <View
                className="absolute rounded-2xl border border-stone-100 bg-white p-3 shadow-xl"
                style={{
                  bottom: -34,
                  left: 16,
                  width: Math.min(width - horizontalPadding * 2 - 32, 256),
                  maxWidth: "90%",
                }}
              >
                <View className="mb-2 h-28 overflow-hidden rounded-xl">
                  <Image
                    source={require("../../assets/images/healthy.png")}
                    style={{ width: "100%", height: "100%" }}
                    resizeMode="cover"
                  />
                </View>

                <View
                  className="flex-row items-center rounded-xl bg-stone-50 p-2"
                  style={{ gap: 8 }}
                >
                  <View className="rounded-lg bg-[#3B5323] p-1.5">
                    <Feather name="check" size={14} color="#FFFFFF" />
                  </View>

                  <View>
                    <Text className="text-xs font-bold text-stone-900">
                      Nourishing
                    </Text>
                    <Text className="text-[10px] text-stone-500">
                      Lives Daily
                    </Text>
                  </View>
                </View>
              </View>
            </View>

           
            <View
              className="w-full"
              style={{
                flex: isDesktop ? 1 : undefined,
                maxWidth: isDesktop ? 560 : undefined,
              }}
            >
              <Text className="mb-2 text-xs font-bold tracking-widest text-[#3B5323]">
                ABOUT HEALTHIFY
              </Text>

              <Text
                className="mb-4 font-bold leading-snug text-stone-900"
                style={{
                  fontSize: isMobile ? 30 : 38,
                  fontFamily: "serif",
                }}
              >
                Your Trusted Healthy Food Partner
              </Text>

              <Text className="mb-6 text-sm leading-6 text-stone-600">
                At Healthify, we believe healthy eating should be convenient,
                affordable, and enjoyable. Based in Dubai, we prepare fresh,
                balanced meals using high-quality ingredients to help
                individuals and families achieve their health goals without
                sacrificing taste.
              </Text>

              <View className="mb-8" style={{ gap: 14 }}>
                {[
                  "Freshly Prepared Daily",
                  "Balanced Nutrition",
                  "Great Taste",
                ].map((item) => (
                  <View
                    key={item}
                    className="flex-row items-center"
                    style={{ gap: 12 }}
                  >
                    <Feather name="check-circle" size={18} color="#3B5323" />
                    <Text className="text-sm font-semibold text-stone-800">
                      {item}
                    </Text>
                  </View>
                ))}
              </View>

              <Pressable
                className="flex-row items-center self-start rounded-full bg-[#3B5323] shadow-md active:opacity-80"
                style={{
                  paddingHorizontal: 24,
                  paddingVertical: 14,
                  gap: 8,
                }}
              >
                <Text className="text-sm font-medium text-white">
                  More About Us
                </Text>
                <Text className="text-sm text-white">➔</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function StatItem({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <View
      className="flex-row items-center px-2 py-1"
      style={{ gap: 12, minWidth: 145 }}
    >
      <View className="rounded-2xl border border-stone-200/50 bg-white p-2.5 shadow-sm">
        {icon}
      </View>

      <View>
        <Text className="text-lg font-bold text-stone-900">{value}</Text>
        <Text className="text-xs font-medium text-stone-500">{label}</Text>
      </View>
    </View>
  );
}
