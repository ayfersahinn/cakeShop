import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { categoryItems } from "../components/Home/categories";
import { useNavigation } from "@react-navigation/native";
import { spacing, colors, border, fonts } from "../theme/theme";
export default function Category() {
  const navigation = useNavigation();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ width: "100%", paddingHorizontal: 3 }}
        >
          <View style={styles.categoryCards}>
            {categoryItems.map((i) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("ProductList", {
                    categoryId: i.id,
                    categoryName: i.title,
                  })
                }
                style={[styles.categoryCard, { backgroundColor: i.bgColor }]}
                key={i.id}
              >
                <Image style={styles.ctgImage} source={i.imagePath} />
                <Text style={styles.ctgText}>{i.title}</Text>
              </TouchableOpacity>
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
    padding: spacing.horizontal,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  categoryCards: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  categoryCard: {
    width: "30%",
    gap: 5,
    padding: 8,
    borderRadius: border.radius,
    elevation: 2,
  },
  ctgText: {
    fontSize: fonts.textSm,
    textAlign: "center",
    color: colors.primary,
    fontWeight: "500",
    fontFamily: fonts.textBold,
  },
  ctgImage: {
    width: 100,
    height: 100,
    width: "100%",
    resizeMode: "contain",
  },
});
