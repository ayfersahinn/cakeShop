import { Text, View, ScrollView, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { spacing, colors, border, fonts } from "../theme/theme";

import {
  ProductItem,
  SearchHeader,
  Hero,
  CategoryScroll,
  SaleCards,
} from "../components";

export default function HomePage() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <SearchHeader />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Hero />
          <Text style={styles.subtitle}>Kategoriler</Text>

          <CategoryScroll />

          <Text style={styles.subtitle}>Yeni Gelenler</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.productList}
          >
            {Array.from({ length: 10 }).map((_, i) => (
              <ProductItem key={i} horizontal />
            ))}
          </ScrollView>
          <SaleCards />
          <Text style={styles.subtitle}>Trend Lezzetler</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.productList}
          >
            {Array.from({ length: 10 }).map((_, i) => (
              <ProductItem key={i} horizontal />
            ))}
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing.horizontal,
  },
  subtitle: {
    color: colors.primary,
    fontFamily: fonts.titleSemi,
    fontSize: fonts.textL,
    paddingVertical: spacing.vertical,
    paddingHorizontal: 3,
  },

  productList: {
    gap: 10,
    paddingHorizontal: 3,
  },
});
