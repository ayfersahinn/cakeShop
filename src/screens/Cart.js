import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { spacing, colors, border, fonts } from "../theme/theme";

export default function Cart() {
  const [count, setCount] = useState(1);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.badge}>
          500
          <FontAwesome name="try" size={12} color={colors.primary} /> ve üzeri
          alışverişlerde KARGO BEDAVA!
        </Text>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: spacing.horizontal }}
        >
          <View style={styles.cpnBox}>
            <Pressable style={styles.coupon}>
              <Ionicons name="ticket-outline" size={30} color="black" />
              <Text style={styles.cpnText}>
                10 <FontAwesome name="try" size={12} color={colors.primary} />{" "}
                kupon uygula
              </Text>
            </Pressable>
            <Pressable style={styles.coupon}>
              <Ionicons name="ticket-outline" size={30} color="black" />
              <Text style={styles.cpnText}>
                10 <FontAwesome name="try" size={12} color={colors.primary} />
                kupon uygula
              </Text>
            </Pressable>
          </View>
          <View style={styles.cartItem}>
            <View style={styles.imgBox}>
              <Image
                style={styles.img}
                source={require("../assets/categories/macaron.png")}
              />
            </View>
            <View style={styles.cartContent}>
              <View style={{ gap: 5 }}>
                <Text style={styles.cartTitle}>Ürün adı</Text>
                <Text style={styles.cartText}>Tahmini teslimat 20.02.2026</Text>
                <Text style={styles.price}>
                  200
                  <FontAwesome name="try" size={12} color={colors.primary} />
                </Text>
                <View
                  style={{
                    borderWidth: 1,
                    flexDirection: "row",
                    alignSelf: "flex-start",
                    alignItems: "center",
                    justifyContent: "space-between",
                    overflow: "hidden",
                    marginTop: 5,
                    borderRadius: border.radius,
                    borderColor: colors.ternary,
                  }}
                >
                  <Pressable
                    onPress={() =>
                      setCount((prev) => (prev > 1 ? prev - 1 : 1))
                    }
                    style={({ pressed }) => ({
                      backgroundColor: pressed
                        ? colors.ternary
                        : colors.background,
                    })}
                  >
                    <Text
                      style={{
                        fontFamily: fonts.text,
                        paddingHorizontal: spacing.horizontal,
                        fontSize: fonts.textMd,
                        paddingVertical: 5,
                        borderRightWidth: 1,
                        borderColor: colors.ternary,
                      }}
                    >
                      -
                    </Text>
                  </Pressable>
                  <Text
                    style={{
                      paddingHorizontal: spacing.horizontal,
                      fontSize: fonts.textMd,
                    }}
                  >
                    {count}
                  </Text>
                  <Pressable
                    onPress={() => setCount((prev) => prev + 1)}
                    style={({ pressed }) => ({
                      backgroundColor: pressed
                        ? colors.ternary
                        : colors.background,
                    })}
                  >
                    <Text
                      style={{
                        fontFamily: fonts.text,
                        paddingHorizontal: spacing.horizontal,
                        paddingVertical: 5,
                        fontSize: fonts.textMd,
                        borderLeftWidth: 1,
                        borderColor: colors.ternary,
                      }}
                    >
                      +
                    </Text>
                  </Pressable>
                </View>
              </View>

              <Ionicons
                style={styles.icon}
                name="trash-outline"
                size={24}
                color={colors.secondary}
              />
            </View>
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
  badge: {
    backgroundColor: "#60d394",
    textAlign: "center",
    padding: 5,
    fontFamily: fonts.text,
    marginBottom: 10,
  },
  coupon: {
    flexDirection: "row",
    gap: 6,
    marginVertical: 10,
    paddingHorizontal: spacing.horizontal,
    paddingVertical: 6,
    alignItems: "center",
    alignSelf: "flex-start",
    backgroundColor: colors.lightGray,
    borderColor: colors.secondary,
    borderRadius: border.radius,
  },
  cpnBox: {
    flexDirection: "row",
    marginBottom: 10,
    justifyContent: "space-between",
  },
  cpnText: {
    fontFamily: fonts.text,
  },
  cartItem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    backgroundColor: colors.background,
    borderRadius: border.radius,
    elevation: 2,
  },
  imgBox: {
    flex: 2,
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  cartContent: {
    flex: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.horizontal,
    paddingVertical: spacing.vertical,
  },
  cartTitle: {
    fontFamily: fonts.textSemi,
    fontSize: fonts.textMd,
    color: colors.primary,
  },
  cartText: {
    fontFamily: fonts.text,
    color: colors.secondary,
  },
  price: {
    fontSize: fonts.textXL,
    fontFamily: fonts.textBold,
    color: colors.primary,
  },
  icon: {
    justifyContent: "flex-end",
  },
});
