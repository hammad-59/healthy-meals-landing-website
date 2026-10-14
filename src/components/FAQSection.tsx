import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  useWindowDimensions,
} from "react-native";
import { Plus, Minus, ArrowRight } from "lucide-react-native";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What are your meal plans?",
    answer:
      "We offer flexible weekly and monthly meal plans tailored to your nutritional needs, including Essential, Balanced, and Performance plans designed by expert dietitians.",
  },
  {
    question: "How does delivery work?",
    answer:
      "Meals are prepared fresh daily and delivered directly to your doorstep during your chosen delivery time slot.",
  },
  {
    question: "Can I customize my meals?",
    answer:
      "Yes! Depending on your chosen plan, you can select dietary preferences, exclude allergens, or swap meals based on your personal taste.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept major credit and debit cards and other secure online payment options available at checkout.",
  },
  {
    question: "Do you have a mobile app?",
    answer:
      "You can manage your subscription, pause deliveries, and track your meal schedule through our supported mobile experience.",
  },
];

export default function FAQSection() {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 1024;

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <View
      style={{
        backgroundColor: "#FAF9F5",
        paddingHorizontal: isDesktop ? 48 : 16,
        paddingVertical: isDesktop ? 64 : 36,
        marginTop: 40,
      }}
    >
      <View
        style={{
          width: "100%",
          flexDirection: isDesktop ? "row" : "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
       
        <View
          style={{
            width: isDesktop ? "42%" : "100%",
            paddingRight: isDesktop ? 24 : 0,
            marginBottom: isDesktop ? 0 : 32,
          }}
        >
          <Text className="text-[11px] font-bold tracking-widest text-[#6B7268] uppercase mb-2">
            FREQUENTLY ASKED QUESTIONS
          </Text>

          <Text
            style={{
              fontSize: isDesktop ? 36 : 30,
              fontWeight: "500",
              color: "#1A2E22",
              lineHeight: isDesktop ? 44 : 38,
              marginBottom: 16,
            }}
          >
            Have Questions?{"\n"}We’ve Got Answers.
          </Text>

          <Text className="text-xs lg:text-sm text-[#6B7280] leading-relaxed mb-6">
            Find quick answers to common questions about our meal plans,
            delivery, and more.
          </Text>

          <Pressable
            accessibilityRole="button"
            onPress={() => setOpenIndex(null)}
            style={{
              alignSelf: "flex-start",
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#3A5A48",
              paddingHorizontal: 24,
              paddingVertical: 14,
              borderRadius: 12,
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 12,
                fontWeight: "600",
                marginRight: 8,
              }}
            >
              Close All FAQs
            </Text>
            <ArrowRight size={16} color="#FFFFFF" />
          </Pressable>
        </View>

       
        <View style={{ width: isDesktop ? "54%" : "100%" }}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <View
                key={faq.question}
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: 16,
                  borderWidth: 1,
                  borderColor: isOpen ? "#3A5A48" : "#E5E7EB",
                  marginBottom: 12,
                  overflow: "hidden",
                }}
              >
                <Pressable
                  accessibilityRole="button"
                  accessibilityLabel={faq.question}
                  accessibilityState={{ expanded: isOpen }}
                  onPress={() => toggleAccordion(index)}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: isDesktop ? 20 : 16,
                  }}
                >
                  <Text
                    style={{
                      flex: 1,
                      fontSize: 14,
                      fontWeight: "600",
                      color: isOpen ? "#1A2E22" : "#374151",
                      paddingRight: 16,
                    }}
                  >
                    {faq.question}
                  </Text>

                  <View
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 14,
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: isOpen ? "#3A5A48" : "#F2F4F1",
                    }}
                  >
                    {isOpen ? (
                      <Minus size={14} color="#FFFFFF" />
                    ) : (
                      <Plus size={14} color="#1B3B2B" />
                    )}
                  </View>
                </Pressable>

                {isOpen && (
                  <View
                    style={{
                      paddingHorizontal: 16,
                      paddingTop: 12,
                      paddingBottom: 20,
                      borderTopWidth: 1,
                      borderTopColor: "#F3F4F6",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: isDesktop ? 14 : 12,
                        color: "#6B7280",
                        lineHeight: 22,
                      }}
                    >
                      {faq.answer}
                    </Text>
                  </View>
                )}
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
}