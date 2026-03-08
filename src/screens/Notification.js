import { View, Text, ScrollView, StyleSheet, Pressable } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useState, useMemo } from "react";
import { spacing, colors, fonts, border } from "../theme/theme";
import Octicons from "@expo/vector-icons/Octicons";
import { FilterBtn, allCards } from "../components";

export default function Notification() {
  const [activeTab, setActiveTab] = useState("Tümü");
  const filteredCards = useMemo(() => {
    return activeTab === "Tümü"
      ? allCards
      : allCards.filter((item) => item.type === activeTab);
  }, [activeTab]);
  const tabs = ["Tümü", "Siparişler", "Kampanyalar", "Yorumlar"];
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ padding: spacing.horizontal }}
        >
          <View style={styles.topBar}>
            {tabs.map((tabItem) => (
              <FilterBtn
                key={tabItem}
                text={tabItem}
                onPress={() => setActiveTab(tabItem)}
                active={activeTab === tabItem}
              />
            ))}
          </View>
          <View style={styles.tagBox}>
            {filteredCards.map((item) => (
              <View style={styles.tagItem} key={item.id}>
                <View style={styles.iconBox}>
                  <Octicons name={item.icon} size={24} color={item.iconColor} />
                </View>
                <View style={styles.tagContent}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.text}>{item.text}</Text>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },

  tagBox: {
    flex: 1,
    paddingHorizontal: 3,
  },
  tagItem: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: colors.bgLight,
    borderRadius: border.radius,
    overflow: "hidden",
    elevation: 2,
  },
  iconBox: {
    width: "15%",
    height: "100%",
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
  },
  tagContent: {
    gap: 5,
    flex: 1,
    padding: 10,
    width: "85%",
  },
  title: {
    fontFamily: fonts.textSemi,
    fontSize: fonts.textMd,
    color: colors.primary,
  },
  text: {
    fontFamily: fonts.text,
    color: colors.secondary,
  },
  date: {
    fontFamily: fonts.text,
    fontSize: 12,
    color: colors.secondary,
  },
});
