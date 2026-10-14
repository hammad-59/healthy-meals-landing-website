import { ArrowRight, BarChart3, Check, Leaf, Star } from "lucide-react-native";
import React, { useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native"; 

interface PlanCardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  icon: React.ReactNode;
}

export default function GrowthPlans() {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 1024;
  const isTablet = width >= 768 && width < 1024;

  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const plans: PlanCardProps[] = [
    {
      title: "Essential Plan",
      description: "Great for individuals starting their healthy journey.",
      price: "AED 299 / month",
      features: [
        "Fresh daily meals",
        "Balanced nutrition",
        "Flexible delivery",
      ],
      icon: <Leaf size={24} color="#1b3b2b" />,
    },
    {
      title: "Balanced Plan",
      description: "Our best value plan for a healthier lifestyle.",
      price: "AED 499 / month",
      features: [
        "Customized meal options",
        "Wide variety of meals",
        "Nutritionist support",
        "Flexible delivery",
      ],
      isPopular: true,
      icon: <Star size={24} color="#1b3b2b" />,
    },
    {
      title: "Performance Plan",
      description: "For fitness enthusiasts and active lifestyles.",
      price: "AED 699 / month",
      features: [
        "High-protein meals",
        "Performance-focused nutrition",
        "Personalized plans",
        "Priority support",
      ],
      icon: <BarChart3 size={24} color="#1b3b2b" />,
    },
  ];

  const steps = [
    {
      step: "1",
      title: "Choose Your Plan",
      description: "Select the meal plan that fits your goals.",
    },
    {
      step: "2",
      title: "We Prepare Fresh Meals",
      description: "Our chefs prepare nutritious meals with care.",
    },
    {
      step: "3",
      title: "Enjoy Convenient Delivery",
      description: "Receive your meals and enjoy a healthier you.",
    },
  ];

  const testimonials = [
    {
      quote:
        '"Healthify has completely changed my eating habits. The meals are delicious, fresh, and so convenient!"',
      name: "Sara M.",
      location: "Dubai, UAE",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    },
    {
      quote:
        '"Finally a healthy meal service that tastes amazing! It fits perfectly into my busy lifestyle."',
      name: "Ahmed R.",
      location: "Dubai, UAE",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    },
    {
      quote:
        '"Great quality, variety, and customer service. I feel healthier and more energized every day."',
      name: "Fatima K.",
      location: "Dubai, UAE",
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200",
    },
  ];

  return (
    <View className="bg-[#FAF9F5] flex-1 px-4 lg:px-24 py-12">
      <View className="mb-16">
        <View className="flex-row justify-between items-end mb-8">
          <View>
            <Text className="text-[11px] font-bold tracking-widest text-[#6B7268] uppercase mb-1">
              GROWTH PLANS
            </Text>
            <Text className="text-3xl lg:text-4xl font-serif font-medium text-[#1A2E22]">
              Find the Perfect Plan for You
            </Text>
          </View>
          {isDesktop && (
            <Pressable className="flex-row items-center">
              <Text className="text-sm font-medium text-[#1A2E22] mr-1">
                View All Plans
              </Text>
              <ArrowRight size={16} color="#1A2E22" />
            </Pressable>
          )}
        </View>

        <View
          className={`flex ${isDesktop ? "flex-row" : "flex-col"} gap-6 items-stretch`}
        >
          {plans.map((plan, index) => {
            const isHovered = hoveredCard === index;

            return (
              <Pressable
                key={index}
                onHoverIn={() => setHoveredCard(index)}
                onHoverOut={() => setHoveredCard(null)}
                style={[styles.cardShadow, isHovered && styles.hoveredCardBg]}
                className={`flex-1 rounded-2xl p-6 border transition-all duration-300 relative ${
                  isHovered
                    ? "bg-[#2D4A3E] border-[#2D4A3E]"
                    : "bg-white border-[#E5E7EB]"
                }`}
              >
             
                {plan.isPopular && (
                  <View className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#3A5A48] px-4 py-1 rounded-full flex-row items-center border border-[#4C6D5B]">
                    <Text className="text-[11px] font-semibold text-white tracking-wide">
                      MOST POPULAR ★
                    </Text>
                  </View>
                )}

               
                <View className="flex-row items-center justify-between mb-4 mt-2">
                  <View
                    className={`w-12 h-12 rounded-xl items-center justify-center ${
                      isHovered ? "bg-[#3A5A48]" : "bg-[#F2F4F1]"
                    }`}
                  >
                    {React.cloneElement(
                      plan.icon as React.ReactElement<{ color?: string }>,
                      {
                        color: isHovered ? "#FFFFFF" : "#1b3b2b",
                      },
                    )}
                  </View>
                </View>

                <Text
                  className={`text-xl font-serif font-semibold mb-2 ${
                    isHovered ? "text-white" : "text-[#1A2E22]"
                  }`}
                >
                  {plan.title}
                </Text>
                <Text
                  className={`text-xs mb-6 leading-relaxed ${
                    isHovered ? "text-[#E2E8F0]" : "text-[#6B7280]"
                  }`}
                >
                  {plan.description}
                </Text>

                <Text
                  className={`text-lg font-bold mb-6 ${
                    isHovered ? "text-white" : "text-[#1A2E22]"
                  }`}
                >
                  {plan.price}
                </Text>

                <View className="space-y-3 mb-8">
                  {plan.features.map((feature, fIdx) => (
                    <View key={fIdx} className="flex-row items-center mb-3">
                      <View
                        className={`w-5 h-5 rounded-full items-center justify-center mr-3 ${
                          isHovered ? "bg-[#436853]" : "bg-[#EAF1EC]"
                        }`}
                      >
                        <Check
                          size={12}
                          color={isHovered ? "#FFFFFF" : "#2D4A3E"}
                        />
                      </View>
                      <Text
                        className={`text-xs ${
                          isHovered ? "text-[#F1F5F9]" : "text-[#374151]"
                        }`}
                      >
                        {feature}
                      </Text>
                    </View>
                  ))}
                </View>

            
                <Pressable
                  className={`mt-auto py-3.5 rounded-xl items-center justify-center border ${
                    isHovered
                      ? "bg-white border-white"
                      : "bg-white border-[#D1D5DB]"
                  }`}
                >
                  <Text
                    className={`text-xs font-semibold ${
                      isHovered ? "text-[#1A2E22]" : "text-[#1A2E22]"
                    }`}
                  >
                    Get Started
                  </Text>
                </Pressable>
              </Pressable>
            );
          })}

    
          {isDesktop && (
            <View className="flex-1 rounded-2xl overflow-hidden relative min-h-[400px]">
              <Image
                source={require("../../assets/images/salad6.png")}
                 style={{ width: "100%", height: "100%", position: "absolute", zIndex: 0 }}
                  resizeMode="cover"
              />
              <View className="absolute inset-0 bg-black/30" />
              <View className="p-8 justify-end h-full relative">
                <Text className="text-2xl font-serif font-medium text-white leading-snug">
                  Invest in{"\n"}a Healthier{"\n"}You
                </Text>
              </View>
            </View>
          )}
        </View>
      </View>

      <View className="mb-16 bg-[#F7F8F5] p-8 rounded-2xl border border-[#EBEFEA]">
        <View className="flex-row justify-between items-center mb-8">
          <View>
            <Text className="text-[11px] font-bold tracking-widest text-[#6B7268] uppercase mb-1">
              OUR 3 STEP PROCESS
            </Text>
            <Text className="text-2xl lg:text-3xl font-serif font-medium text-[#1A2E22]">
              Healthy Eating in 3 Simple Steps
            </Text>
          </View>
          {isDesktop && (
            <Pressable className="flex-row items-center">
              <Text className="text-sm font-medium text-[#1A2E22] mr-1">
                It's Easy to Get Started
              </Text>
              <ArrowRight size={16} color="#1A2E22" />
            </Pressable>
          )}
        </View>

        <View
          className={`flex ${isDesktop ? "flex-row" : "flex-col"} gap-6 items-center justify-between`}
        >
          {steps.map((item, idx) => (
            <View
              key={idx}
              className="flex-1 flex-row items-center bg-white p-5 rounded-xl border border-[#EAEFEA] w-full"
            >
              <View className="w-12 h-12 rounded-full bg-[#EAF1EC] items-center justify-center mr-4">
                <Text className="text-base font-bold text-[#2D4A3E]">
                  {item.step}
                </Text>
              </View>
              <View className="flex-1">
                <Text className="text-sm font-semibold text-[#1A2E22] mb-1">
                  {item.title}
                </Text>
                <Text className="text-xs text-[#6B7280] leading-relaxed">
                  {item.description}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>

      <View className="mb-8">
        <View className="flex-row justify-between items-center mb-8">
          <View>
            <Text className="text-[11px] font-bold tracking-widest text-[#6B7268] uppercase mb-1">
              CUSTOMER STORIES
            </Text>
            <Text className="text-2xl lg:text-3xl font-serif font-medium text-[#1A2E22]">
              What Our Customers Say
            </Text>
          </View>
          {isDesktop && (
            <Pressable className="flex-row items-center">
              <Text className="text-sm font-medium text-[#1A2E22] mr-1">
                View More Reviews
              </Text>
              <ArrowRight size={16} color="#1A2E22" />
            </Pressable>
          )}
        </View>

        <View className={`flex ${isDesktop ? "flex-row" : "flex-col"} gap-6`}>
          {testimonials.map((t, idx) => (
            <View
              key={idx}
              className="flex-1 bg-white p-6 rounded-2xl border border-[#EAEFEA] justify-between"
            >
              <Text className="text-xs text-[#374151] leading-relaxed mb-6">
                {t.quote}
              </Text>
              <View className="flex-row items-center justify-between mt-auto">
                <View className="flex-row items-center">
                  <Image
                    source={{ uri: t.avatar }}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <View>
                    <Text className="text-xs font-semibold text-[#1A2E22]">
                      {t.name}
                    </Text>
                    <Text className="text-[10px] text-[#6B7280]">
                      {t.location}
                    </Text>
                  </View>
                </View>
                <View className="flex-row">
                  {[...Array(5)].map((_, sIdx) => (
                    <Star key={sIdx} size={14} color="#EAB308" fill="#EAB308" />
                  ))}
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 12,
    elevation: 2,
  },
  hoveredCardBg: {
    backgroundColor: "#2D4A3E",
    shadowColor: "#2D4A3E",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 6,
  },
});
