import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { categoryItems } from "./categories";
import { useNavigation } from "@react-navigation/native";
import { spacing, colors, border, fonts } from "../../theme/theme";
export default function CategoryScroll() {
  const navigation = useNavigation();
  return (
    <>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categories}
      >
        {categoryItems.map((i) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ProductList", {
                categoryId: i.id,
                categoryName: i.title,
              })
            }
            style={styles.category}
            key={i.id}
          >
            <Image style={styles.ctgImage} source={i.imagePath} />
            <Text style={styles.ctgText}>{i.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
}

export const styles = StyleSheet.create({
  categories: {
    gap: 5,
    paddingHorizontal: 3,
  },
  category: {
    gap: 5,
    padding: 8,
    marginVertical: 3,
    backgroundColor: colors.bgLight,
    borderRadius: border.radius,
    // iOS Shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    // Android Shadow
    elevation: 2,
  },
  ctgText: {
    fontSize: fonts.textXs,
    textAlign: "center",
    color: colors.secondary,
    fontWeight: "500",
    fontFamily: fonts.textBold,
  },
  ctgImage: {
    width: 72,
    height: 72,
    resizeMode: "contain",
  },
});
