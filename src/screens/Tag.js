import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { spacing, colors, fonts, border } from "../theme/theme";
export default function Tag() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.tagBox}>
            {Array.from({ length: 3 }).map((_, index) => (
              <View style={styles.tagItem} key={index}>
                <View style={styles.iconBox}>
                  <Image
                    style={styles.img}
                    source={require("../assets/categories/doughnut.png")}
                  />
                </View>

                <View style={styles.tagContent}>
                  <Text style={styles.title}>%10 İndirim</Text>
                  <Text style={styles.text}>
                    Tüm ürünlerde Şubat sonuna kadar %10 indirim.
                  </Text>
                  <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>Kampanyaya Katıl</Text>
                  </TouchableOpacity>
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
    padding: spacing.horizontal,
    backgroundColor: colors.background,
  },

  tagBox: {
    flex: 1,
    paddingHorizontal: 3,
  },
  tagItem: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 10,
    backgroundColor: colors.background,
    borderRadius: border.radius,
    // iOS Shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    // Android Shadow
    elevation: 2,
  },
  iconBox: {
    width: "30%",
    height: "100%",
    backgroundColor: "#f3e2eb",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: "100",
    height: "100%",
    resizeMode: "contain",
  },
  tagContent: {
    gap: 5,
    flex: 1,
    padding: spacing.horizontal,
    width: "70%",
  },
  title: {
    fontFamily: fonts.titleSemi,
    fontSize: fonts.textMd,
    color: colors.primary,
  },
  text: {
    fontFamily: fonts.text,
    color: colors.secondary,
  },
  btn: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: "#dfa44b",
    borderRadius: border.radius,
    alignSelf: "flex-start",
    marginTop: 10,
    // iOS Shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 4,

    // Android Shadow
    elevation: 2,
  },
  btnText: {
    color: colors.background,
    fontFamily: fonts.title,
  },
});
