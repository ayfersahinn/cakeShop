import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { SearchHeader, ProductItem } from "../components";
import { spacing, colors, border, fonts } from "../theme/theme";
import { productService } from "../services/api.js";

export default function ProductList({ route }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { categoryId, categoryName } = route?.params || {};
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsData, categoriesData] = await Promise.all([
          categoryId
            ? productService.getByCategory(categoryId)
            : productService.getAll(),
        ]);
        setProducts(productsData);
        setCategories(categoriesData);
        setSelectedCategory(categoryId || null);
      } catch (error) {
        console.error("Veri yüklenemedi:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [categoryId]);
  if (loading) {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <ActivityIndicator size="large" color={colors.primary} />
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <SearchHeader />

        <View style={styles.headerTab}>
          <Text style={styles.subtitle}>Ürünler</Text>

          <View style={styles.iconBox}>
            <MaterialCommunityIcons
              name="sort-bool-descending"
              size={24}
              color={colors.primary}
            />
            <Ionicons name="options-outline" size={24} color={colors.primary} />
          </View>
        </View>

        <FlatList
          data={products}
          renderItem={({ item }) => <ProductItem product={item} />}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
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
    fontFamily: fonts.title,
    fontSize: fonts.textL,
    paddingVertical: spacing.vertical,
    paddingHorizontal: 3,
  },
  headerTab: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconBox: {
    flexDirection: "row",
    gap: 10,
  },
  list: {
    paddingHorizontal: 3,
  },
});
/*
fiyat
kategori

Aroma / Tat

Çikolatalı

Meyveli

Vanilyalı

Fıstıklı

Karamelli

✅ İçerik tercihleri

Şekersiz

Glütensiz

Vegan

Laktozsuz
🎉 3️⃣ Etkinlik / Kullanım amacı

Bu çok akıllıca bir UX filtresi olur

Doğum günü

Nişan

Çocuklara özel

Özel gün

Mini boy / Tek kişilik

📏 4️⃣ Boyut / Kişi sayısı

Pastacılıkta çok kullanılır

4 kişilik

6 kişilik

8 kişilik

12+
5️⃣ Teslimat filtreleri

Özellikle yerel satışta önemli

Aynı gün teslim

Yarın teslim

Mağazadan teslim al

⭐ 6️⃣ Sıralama seçenekleri (mutlaka ekle)

Bu filtre değil ama yanında olmalı

En popüler

En çok satan

Fiyat artan

Fiyat azalan

En yeni

*/
