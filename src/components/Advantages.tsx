import React from 'react';
import { View, Text, TouchableOpacity, useWindowDimensions } from 'react-native';
import { Ionicons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';

interface AdvantageItem {
  id: string;
  title: string;
  description: string;
  iconType: 'diamond' | 'heart' | 'delivery' | 'leaf';
}

const ADVANTAGES_DATA: AdvantageItem[] = [
  {
    id: '1',
    title: 'Premium Quality',
    description: 'High-quality, fresh ingredients',
    iconType: 'diamond',
  },
  {
    id: '2',
    title: 'Health Focused',
    description: 'Nutritionist designed meals',
    iconType: 'heart',
  },
  {
    id: '3',
    title: 'Convenient Delivery',
    description: 'To your home or office',
    iconType: 'delivery',
  },
  {
    id: '4',
    title: 'Flexible Plans',
    description: 'Options for every dietary need',
    iconType: 'leaf',
  },
];

export default function Advantages() {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 1024;
  const isTablet = width >= 768 && width < 1024;

  return (
    <View className="w-full bg-[#f4f6f0] py-12 px-6 md:px-12 lg:px-20">
      <View className="max-w-7xl mx-auto w-full">
        
     
        {isDesktop ? (
          <View className="flex-row items-center justify-between">
            <View className="w-[32%] pr-6">
              <Text className="text-[11px] uppercase tracking-[2px] text-stone-500 font-semibold mb-2">
                OUR ADVANTAGES
              </Text>
              <Text className="text-3xl lg:text-4xl font-serif text-stone-900 font-medium mb-3 leading-tight">
                Why Choose Healthify
              </Text>
              <Text className="text-sm text-stone-600 mb-6 leading-relaxed">
                More than just meals — we deliver a healthier, happier you with benefits that fit your lifestyle.
              </Text>

              <TouchableOpacity 
                activeOpacity={0.8} 
                className="bg-[#556234] flex-row items-center justify-center py-3.5 px-6 rounded-full self-start shadow-sm"
              >
                <Text className="text-white text-sm font-medium mr-2">Discover All Advantages</Text>
                <Ionicons name="arrow-forward" size={16} color="#ffffff" />
              </TouchableOpacity>
            </View>

            
            <View className="w-[66%] flex-row justify-between">
              {ADVANTAGES_DATA.map((item) => (
                <View key={item.id} className="w-[23%]">
                  <AdvantageCard item={item} />
                </View>
              ))}
            </View>
          </View>
        ) : (
          <View className="flex-col">
        
            <View className="mb-8 max-w-xl">
              <Text className="text-[11px] uppercase tracking-[2px] text-stone-500 font-semibold mb-2">
                OUR ADVANTAGES
              </Text>
              <Text className="text-2xl md:text-3xl font-serif text-stone-900 font-medium mb-3">
                Why Choose Healthify
              </Text>
              <Text className="text-sm text-stone-600 mb-6 leading-relaxed">
                More than just meals — we deliver a healthier, happier you with benefits that fit your lifestyle.
              </Text>

              <TouchableOpacity 
                activeOpacity={0.8} 
                className="bg-[#556234] flex-row items-center justify-center py-3 px-6 rounded-full self-start shadow-sm"
              >
                <Text className="text-white text-sm font-medium mr-2">Discover All Advantages</Text>
                <Ionicons name="arrow-forward" size={16} color="#ffffff" />
              </TouchableOpacity>
            </View>

            {isTablet ? (
              <View className="flex-row flex-wrap justify-between gap-4">
                {ADVANTAGES_DATA.map((item) => (
                  <View key={item.id} className="w-[48%] mb-4">
                    <AdvantageCard item={item} />
                  </View>
                ))}
              </View>
            ) : (
              <View className="flex-col gap-5">
                {ADVANTAGES_DATA.map((item) => (
                  <AdvantageCard key={item.id} item={item} />
                ))}
              </View>
            )}
          </View>
        )}

      </View>
    </View>
  );
}

interface AdvantageCardProps {
  item: AdvantageItem;
}

function AdvantageCard({ item }: AdvantageCardProps) {
  const renderIcon = (type: string) => {
    switch (type) {
      case 'diamond':
        return <MaterialCommunityIcons name="diamond-stone" size={26} color="#4b5536" />;
      case 'heart':
        return <Feather name="heart" size={24} color="#4b5536" />;
      case 'delivery':
        return <Feather name="truck" size={24} color="#4b5536" />;
      case 'leaf':
        return <Feather name="feather" size={24} color="#4b5536" />;
      default:
        return null;
    }
  };

  return (
    <View className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200/60 flex flex-col items-center text-center justify-center h-52">
      <View className="mb-4 items-center justify-center h-10">
        {renderIcon(item.iconType)}
      </View>

      <Text className="text-base font-serif font-semibold text-stone-900 mb-2 text-center">
        {item.title}
      </Text>

      <Text className="text-xs text-stone-500 text-center leading-relaxed">
        {item.description}
      </Text>
    </View>
  );
}