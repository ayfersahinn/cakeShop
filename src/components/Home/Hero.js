import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { spacing, colors, border, fonts } from "../../theme/theme";
export default function Hero() {
  const navigation = useNavigation();
  return (
    <View style={[styles.hero]}>
      <ImageBackground
        imageStyle={styles.imgBg}
        source={require("../../assets/bg.jpg")}
        style={{
          flex: 1,
          flexDirection: "row",
        }}
      >
        <View style={styles.bannerContext}>
          <Text style={styles.bannerText}>
            Gününü tatlandıracak özenle hazırlanmış lezzetleri keşfet!
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("ProductList")}
            style={styles.btn}
          >
            <Text style={styles.btnText}>Şimdi keşfet</Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: "50%" }}></View>
      </ImageBackground>
    </View>
  );
}

export const styles = StyleSheet.create({
  hero: {
    height: 200,
    width: "100%",
    borderRadius: border.radius,
    alignItems: "center",
    paddingHorizontal: 3,
  },
  imgBg: {
    borderRadius: border.radius,
    opacity: 0.9,
    backgroundColor: "#000",
    elevation: 2,
  },
  bannerContext: {
    width: "50%",
    padding: 16,
    gap: 20,
  },
  bannerText: {
    fontFamily: fonts.textBold,
    color: "#fff",
    lineHeight: 18,
    fontSize: fonts.textMd,
  },
  btn: {
    padding: 10,
    backgroundColor: colors.bgLight,
    borderRadius: border.radius,
    alignSelf: "flex-start",
    elevation: 2,
  },
  btnText: {
    fontFamily: fonts.title,
    color: colors.primary,
  },
});
