import { Ionicons } from "@expo/vector-icons";
import {
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: any;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: "1",
    title: "Healthy Ready-To-Eat Meals",
    description: "Fresh, balanced meals prepared daily and ready to enjoy.",
    image: require("../../assets/images/salad.png"),
  },
  {
    id: "2",
    title: "Customized Meal Plans",
    description: "Personalized nutrition plans designed for your goals.",
    image: require("../../assets/images/salad3.png"),
  },
  {
    id: "3",
    title: "Weight Management Plans",
    description:
      "Delicious meals to support your weight loss or maintenance journey.",
    image: require("../../assets/images/salad4.png"),
  },
  {
    id: "4",
    title: "High-Protein Meal Plans",
    description: "Nutrient-rich meals for active lifestyles and fitness goals.",
     image: require("../../assets/images/salad5.png"),
  },
];

export default function OurServices() {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 1024;
  const isTablet = width >= 768 && width < 1024;

  return (
    <View className="w-full bg-white py-12 px-4 md:px-12 lg:px-20">
      <View className="max-w-7xl mx-auto w-full">
      
        <View className="flex-row justify-between items-end mb-8">
          <View>
            <Text className="text-xs uppercase tracking-widest text-stone-500 font-semibold mb-2">
              Our Services
            </Text>
            <Text className="text-2xl md:text-3xl lg:text-4xl font-serif text-stone-900 font-medium">
              Healthy Meal Plans for Every Lifestyle
            </Text>
          </View>

          <TouchableOpacity
            activeOpacity={0.7}
            className="flex-row items-center space-x-1 py-1"
          >
            <Text className="text-sm font-medium text-stone-800 mr-1">
              View All Services
            </Text>
            <Ionicons name="arrow-forward" size={16} color="#292524" />
          </TouchableOpacity>
        </View>

        {isDesktop ? (
          <View className="flex-row justify-between gap-5">
            {SERVICES_DATA.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                cardWidth="calc(25% - 15px)"
              />
            ))}
          </View>
        ) : isTablet ? (
          
          <View className="flex-row flex-wrap justify-between gap-6">
            {SERVICES_DATA.map((service) => (
              <View key={service.id} style={{ width: "48%" }} className="mb-4">
                <ServiceCard service={service} cardWidth="100%" />
              </View>
            ))}
          </View>
        ) : (
          
          <View className="flex-col space-y-6">
            {SERVICES_DATA.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                cardWidth="100%"
              />
            ))}
          </View>
        )}
      </View>
    </View>
  );
}

interface ServiceCardProps {
  service: ServiceItem;
  cardWidth: any;
}

function ServiceCard({ service, cardWidth }: ServiceCardProps) {
  return (
    <View
      style={{ width: cardWidth }}
      className="bg-stone-50/70 rounded-2xl p-4 border border-stone-200/80 shadow-sm flex flex-col justify-between"
    >
      <View>
        <View className="w-full h-44 rounded-xl overflow-hidden mb-4 bg-stone-200">
          <Image
            source={service.image}
                    style={{ width: "100%", height: "100%" }}
                    resizeMode="cover"
          />
        </View>

        <Text className="text-base font-serif font-semibold text-stone-900 mb-1.5">
          {service.title}
        </Text>

        <Text className="text-xs text-stone-600 leading-relaxed mb-6">
          {service.description}
        </Text>
      </View>

      <View className="flex-row justify-end">
        <TouchableOpacity
          activeOpacity={0.7}
          className="w-8 h-8 rounded-full bg-stone-200/70 items-center justify-center border border-stone-300/50"
        >
          <Ionicons name="arrow-forward" size={14} color="#44403c" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
