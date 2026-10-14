import { useRef } from "react";
import { ScrollView, View } from "react-native";
import Footer from "@/components/Footer";
import AboutUs from "@/components/AboutUs";
import Navbar from "@/components/Navbar";
import OurServices from "@/components/OurServices";
import Advantages from "@/components/Advantages";
import GrowthPlans from "@/components/GrowthPlans";
import FAQSection from "@/components/FAQSection";

const Index = () => {
  const scrollRef = useRef<ScrollView>(null);

  const sectionRefs = useRef<Record<string, number>>({});

  const handleNavigate = (sectionId: string) => {
    const y = sectionRefs.current[sectionId];

    if (y !== undefined) {
      scrollRef.current?.scrollTo({
        y,
        animated: true,
      });
    }
  };

  return (
    <ScrollView ref={scrollRef}>
      <View
        onLayout={(event) => {
          sectionRefs.current.home = event.nativeEvent.layout.y;
        }}
      >
        <Navbar onNavigate={handleNavigate} />
      </View>

      <View
        onLayout={(event) => {
          sectionRefs.current.about = event.nativeEvent.layout.y;
        }}
      >
        <AboutUs />
      </View>

      <View
        onLayout={(event) => {
          sectionRefs.current.services = event.nativeEvent.layout.y;
        }}
      >
        <OurServices />
      </View>

      <View
        onLayout={(event) => {
          sectionRefs.current.advantages = event.nativeEvent.layout.y;
        }}
      >
        <Advantages />
      </View>

      <View
        onLayout={(event) => {
          sectionRefs.current["growth-plans"] =
            event.nativeEvent.layout.y;
        }}
      >
        <GrowthPlans />
      </View>

      <View
        onLayout={(event) => {
          sectionRefs.current.contact = event.nativeEvent.layout.y;
        }}
      >
        <FAQSection/>
      </View>

      <Footer onNavigate={handleNavigate} />
    </ScrollView>
  );
};

export default Index;