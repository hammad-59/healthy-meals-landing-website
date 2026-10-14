import {
    ArrowRight,
    Bird,
    Camera,
    Mail,
    MapPin,
    Phone,
    Play,
    Users,
} from "lucide-react-native";
import { useState } from "react";
import { Pressable, Text, useWindowDimensions, View } from "react-native";

interface FooterProps {
  onNavigate?: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 1024;

  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);
  const [hoveredCta, setHoveredCta] = useState(false);

  const quickLinks = [
    { label: "Home", target: "home" },
    { label: "About Us", target: "about" },
    { label: "Our Services", target: "services" },
    { label: "Advantages", target: "advantages" },
    { label: "Growth Plans", target: "growth-plans" },
    { label: "Blogs", target: "blogs" },
    { label: "Contact Us", target: "contact" },
  ];

  const services = [
    "Healthy ready-to-eat meals",
    "Customized meal plans",
    "Weight management meal",
    "High protein meal plans",
    "Corporate meal solutions",
    "Fitness and wellness nutrition",
    "Healthy snacks and beverages",
    "Delivery and pickup services",
  ];

  const handleLinkPress = (target: string) => {
    if (onNavigate) {
      onNavigate(target);
    }
  };

  return (
    <View className="bg-[#112318] text-white pt-16 pb-8 px-6 lg:px-24">
      <View className="bg-[#1B3526] rounded-2xl p-8 mb-16 flex flex-col lg:flex-row items-center justify-between border border-[#234432]">
        <View className="mb-6 lg:mb-0">
          <Text className="text-[11px] font-bold tracking-widest text-[#8FA89B] uppercase mb-1">
            READY TO START?
          </Text>
          <Text className="text-2xl lg:text-3xl font-serif font-medium text-white mb-2">
            Transform Your Health, One Meal At A Time
          </Text>
          <Text className="text-xs text-[#A3B8AD]">
            Fresh, Nutritious, Convenient. Join thousands of happy customers
            today.
          </Text>
        </View>
        <Pressable
          onHoverIn={() => setHoveredCta(true)}
          onHoverOut={() => setHoveredCta(false)}
          className={`px-6 py-3.5 rounded-full flex-row items-center transition-all ${
            hoveredCta ? "bg-[#E5E7EB]" : "bg-white"
          }`}
        >
          <Text className="text-xs font-semibold text-[#112318] mr-2">
            Get Started Today
          </Text>
          <ArrowRight size={16} color="#112318" />
        </Pressable>
      </View>

      <View
        className={`flex ${isDesktop ? "flex-row justify-between" : "flex-col gap-10"} pb-12 border-b border-[#223E2E]`}
      >
        <View className={`${isDesktop ? "w-[26%]" : "w-full"}`}>
          <Text className="text-xl font-serif font-bold text-white tracking-wider mb-3">
            HEALTHIFY
          </Text>
          <Text className="text-xs text-[#A3B8AD] leading-relaxed mb-6">
            At Healthify, We Believe Healthy Eating Should Be Convenient,
            Affordable, And Enjoyable.
          </Text>

          <View className="flex-row space-x-3">
            {[
              { id: "fb", icon: <Users size={16} color="#FFFFFF" /> },
              { id: "tw", icon: <Bird size={16} color="#FFFFFF" /> },
              { id: "ig", icon: <Camera size={16} color="#FFFFFF" /> },
              { id: "yt", icon: <Play size={16} color="#FFFFFF" /> },
            ].map((soc) => {
              const isHovered = hoveredSocial === soc.id;
              return (
                <Pressable
                  key={soc.id}
                  onHoverIn={() => setHoveredSocial(soc.id)}
                  onHoverOut={() => setHoveredSocial(null)}
                  className={`w-9 h-9 rounded-full items-center justify-center border border-[#2B4E3B] transition-all ${
                    isHovered ? "bg-[#2B4E3B] scale-105" : "bg-[#183122]"
                  }`}
                >
                  {soc.icon}
                </Pressable>
              );
            })}
          </View>
        </View>

        <View className={`${isDesktop ? "w-[20%]" : "w-full"}`}>
          <Text className="text-xs font-bold text-white tracking-wider uppercase mb-4">
            Quick Links
          </Text>
          <View className="space-y-2.5">
            {quickLinks.map((link) => {
              const isHovered = hoveredLink === link.label;
              return (
                <Pressable
                  key={link.label}
                  onPress={() => handleLinkPress(link.target)}
                  onHoverIn={() => setHoveredLink(link.label)}
                  onHoverOut={() => setHoveredLink(null)}
                >
                  <Text
                    className={`text-xs transition-colors py-1 ${
                      isHovered
                        ? "text-white font-medium pl-1"
                        : "text-[#A3B8AD]"
                    }`}
                  >
                    {link.label}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>

        <View className={`${isDesktop ? "w-[26%]" : "w-full"}`}>
          <Text className="text-xs font-bold text-white tracking-wider uppercase mb-4">
            Our Services
          </Text>
          <View className="space-y-2.5">
            {services.map((service, idx) => (
              <Text key={idx} className="text-xs text-[#A3B8AD] py-1">
                {service}
              </Text>
            ))}
          </View>
        </View>

        <View className={`${isDesktop ? "w-[22%]" : "w-full"}`}>
          <Text className="text-xs font-bold text-white tracking-wider uppercase mb-4">
            Get In Touch
          </Text>
          <View className="space-y-3">
            <View className="flex-row items-start">
              <MapPin
                size={16}
                color="#A3B8AD"
                style={{ marginTop: 2, marginRight: 8 }}
              />
              <Text className="text-xs text-[#A3B8AD]">Dubai, UAE</Text>
            </View>
            <View className="flex-row items-center">
              <Phone size={16} color="#A3B8AD" style={{ marginRight: 8 }} />
              <Text className="text-xs text-[#A3B8AD]">+971 50 262 5144</Text>
            </View>
            <View className="flex-row items-center">
              <Mail size={16} color="#A3B8AD" style={{ marginRight: 8 }} />
              <Text className="text-xs text-[#A3B8AD]">info@healthify.ae</Text>
            </View>
          </View>
        </View>
      </View>

      <View
        className={`flex ${isDesktop ? "flex-row justify-between items-center" : "flex-col gap-4"} pt-6`}
      >
        <Text className="text-[11px] text-[#8FA89B]">
          Copyright © 2026 Healthify. All Rights Reserved.
        </Text>
        <View className="flex-row space-x-6">
          <Pressable>
            <Text className="text-[11px] text-[#8FA89B]">Privacy Policy</Text>
          </Pressable>
          <Pressable>
            <Text className="text-[11px] text-[#8FA89B]">Terms of Service</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
