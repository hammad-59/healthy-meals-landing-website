
import React, { useEffect, useState } from "react";
import {
  Pressable,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

const NAV_ITEMS = [
  { label: "Home", target: "home" },
  { label: "About Us", target: "about" },
  { label: "Our Services", target: "services" },
  { label: "Advantages", target: "advantages" },
  { label: "Growth Plans", target: "growth-plans" },
  { label: "Blogs", target: "blogs" },
  { label: "Contact Us", target: "contact" },
];

const COLORS = {
  text: "#565B53",
  darkOlive: "#283322",
};

type NavigateHandler = (target: string) => void;

function BrandLogo({
  onPress,
}: {
  onPress: () => void;
}) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel="Go to Healthify home"
      onPress={onPress}
      className="active:opacity-70"
    >
      <Text className="text-xs font-bold text-gray-800 tracking-wider">
        صحتفي
      </Text>

      <Text className="text-base font-extrabold tracking-widest text-gray-900 -mt-0.5">
        HEALTHIFY
      </Text>
    </Pressable>
  );
}

function GetStartedButton({
  compact = false,
  onPress,
}: {
  compact?: boolean;
  onPress: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel="Get started"
      onPress={onPress}
      onHoverIn={() => setHovered(true)}
      onHoverOut={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      className="flex-row items-center justify-center rounded-full bg-[#557536] active:opacity-80"
      style={{
        height: compact ? 36 : 40,
        paddingHorizontal: compact ? 14 : 20,
        gap: compact ? 5 : 7,
        opacity: hovered ? 0.88 : 1,
        transform: [{ scale: hovered ? 1.03 : 1 }],
        borderWidth: focused ? 2 : 0,
        borderColor: focused
          ? COLORS.darkOlive
          : "transparent",
      }}
    >
      <Text
        style={{
          color: "#FFFFFF",
          fontSize: compact ? 12 : 13,
          fontWeight: "600",
        }}
      >
        Get Started
      </Text>

      <Text
        style={{
          color: "#FFFFFF",
          fontSize: compact ? 13 : 15,
        }}
      >
        →
      </Text>
    </Pressable>
  );
}

function NavLink({
  label,
  compact = false,
  onPress,
}: {
  label: string;
  compact?: boolean;
  onPress: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  const highlighted = hovered || focused;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      onPress={onPress}
      onHoverIn={() => setHovered(true)}
      onHoverOut={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      className={
        compact
          ? "rounded-lg px-3 py-3 active:bg-black/5"
          : "rounded-md py-2"
      }
      style={{
        paddingHorizontal: compact ? 12 : 0,
      }}
    >
      <Text
        style={{
          color: highlighted
            ? COLORS.darkOlive
            : COLORS.text,
          fontSize: compact ? 15 : 13,
          fontWeight: highlighted ? "600" : "400",
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
}

function HamburgerButton({
  open,
  onPress,
}: {
  open: boolean;
  onPress: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={
        open
          ? "Close navigation menu"
          : "Open navigation menu"
      }
      accessibilityState={{ expanded: open }}
      onPress={onPress}
      onHoverIn={() => setHovered(true)}
      onHoverOut={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      hitSlop={8}
      className="h-10 w-10 items-center justify-center rounded-full active:bg-black/5"
      style={{
        backgroundColor:
          hovered || focused
            ? "#F0F2EB"
            : "transparent",
      }}
    >
      <View
        className="items-center justify-center"
        style={{ gap: 5 }}
      >
        <View
          className="h-[2px] w-5 rounded-full bg-[#283322]"
          style={
            open
              ? {
                  transform: [
                    { translateY: 3.5 },
                    { rotate: "45deg" },
                  ],
                }
              : undefined
          }
        />

        <View
          className="h-[2px] w-5 rounded-full bg-[#283322]"
          style={
            open
              ? {
                  transform: [
                    { translateY: -3.5 },
                    { rotate: "-45deg" },
                  ],
                }
              : undefined
          }
        />
      </View>
    </Pressable>
  );
}

function MobileMenu({
  onNavigate,
}: {
  onNavigate: NavigateHandler;
}) {
  return (
    <View className="border-t border-[#E4E5DF] bg-[#FCFCFA] px-4 pb-3">
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="max-h-[430px]"
      >
        {NAV_ITEMS.map((item, index) => (
          <View
            key={item.target}
            className={
              index < NAV_ITEMS.length - 1
                ? "border-b border-[#ECEEE8]"
                : ""
            }
          >
            <NavLink
              label={item.label}
              compact
              onPress={() => onNavigate(item.target)}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

export default function Navbar({
  onNavigate,
}: {
  onNavigate: NavigateHandler;
}) {
  const { width } = useWindowDimensions();
  const [menuOpen, setMenuOpen] = useState(false);

  const compact = width < 768;
  const wide = width >= 1024;

  useEffect(() => {
    if (!compact) {
      setMenuOpen(false);
    }
  }, [compact]);

  const navigateTo = (target: string) => {
    onNavigate(target);
    setMenuOpen(false);
  };

  return (
    <View className="border-b border-[#E4E5DF] bg-[#FCFCFA]">
      <View
        className="w-full max-w-5xl flex-row items-center self-center"
        style={{
          height: compact ? 64 : 72,
          paddingHorizontal: compact ? 16 : 28,
        }}
      >
        <BrandLogo
          onPress={() => navigateTo("home")}
        />

        {compact ? (
          <View
            className="flex-1 flex-row items-center justify-end"
            style={{ gap: 10 }}
          >
            <GetStartedButton
              compact
              onPress={() => navigateTo("growth-plans")}
            />

            <HamburgerButton
              open={menuOpen}
              onPress={() =>
                setMenuOpen((current) => !current)
              }
            />
          </View>
        ) : (
          <>
            <View
              className="flex-row items-center"
              style={{
                marginLeft: wide ? 112 : 24,
                gap: width < 900 ? 12 : 20,
              }}
            >
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.target}
                  label={item.label}
                  onPress={() => navigateTo(item.target)}
                />
              ))}
            </View>

            <View className="flex-1" />

            <GetStartedButton
              compact={width < 900}
              onPress={() => navigateTo("growth-plans")}
            />
          </>
        )}
      </View>

      {compact && menuOpen && (
        <MobileMenu onNavigate={navigateTo} />
      )}
    </View>
  );
}
