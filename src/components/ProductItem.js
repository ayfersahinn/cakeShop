import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { spacing, colors, fonts, border } from "../theme/theme";
import CustomBtn from "./CustomBtn";
import { useNavigation } from "@react-navigation/native";

export default function ProductItem({ horizontal }) {
  const [like, setLike] = useState(false);
  const toggleLike = () => {
    setLike(!like);
  };
  const navigation = useNavigation();

  return (
    <View style={[styles.product, horizontal && styles.horizontalCard]}>
      <View style={styles.imgBox}>
        <Pressable
          onPress={toggleLike}
          style={{
            position: "absolute",
            width: 30,
            height: 30,
            padding: 3,
            zIndex: 100,
            right: 5,
            top: 5,
            backgroundColor: colors.background,
            borderRadius: 15,
          }}
        >
          <Ionicons
            name={like ? "heart" : "heart-outline"}
            size={24}
            color={like ? "#dfa44b" : colors.primary}
          />
        </Pressable>
        <Pressable onPress={() => navigation.navigate("ProductDetail")}>
          <Image
            style={styles.image}
            source={require("../assets/cupcake.jpg")}
          />
        </Pressable>
      </View>
      <View style={styles.content}>
        <Text style={styles.name}>Ürün adı</Text>

        <View style={styles.priceBox}>
          <Text style={styles.newPrice}>
            150.00 <FontAwesome name="try" size={14} color={colors.secondary} />
          </Text>
          <Text style={styles.PrevPrice}>180.00</Text>
        </View>

        <View style={styles.stars}>
          {Array.from({ length: 5 }).map((_, i) => (
            <FontAwesome
              key={i}
              name="star-o"
              size={13}
              color="#f7cb09"
              style={{ marginRight: 2 }}
            />
          ))}
        </View>
        <CustomBtn text={"Sepete Ekle"} bgColor={"#dfa44b"} />
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  product: {
    // width: 160,
    maxWidth: "48%",
    marginBottom: 14,
    flex: 1,
    borderRadius: border.radius,
    backgroundColor: colors.background,
    // iOS Shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 4,

    // Android Shadow
    elevation: 2,
  },
  horizontalCard: {
    flex: 0,
    width: 160,
  },
  content: {
    padding: 8,
    gap: 5,
  },
  imgBox: {
    height: 180,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderTopLeftRadius: border.radius,
    borderTopRightRadius: border.radius,
  },

  name: {
    color: colors.secondary,
    fontFamily: fonts.textSemi,
  },
  priceBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  newPrice: {
    fontSize: 16,
    marginRight: 5,
    color: colors.secondary,
    fontFamily: fonts.textBold,
  },
  PrevPrice: {
    color: colors.medium,
    textDecorationLine: "line-through",
    fontSize: 12,
    fontFamily: fonts.text,
  },
  stars: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
