import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Octicons from "@expo/vector-icons/Octicons";
import { spacing, colors, border, fonts } from "../../theme/theme";
import { CustomBtn } from "../../components";
const Coupon = () => {
  const tags = Array.from({ length: 3 }, (_, i) => ({
    id: i.toString(),
    title: `Kupon ${i + 1}`,
    text: `Tüm ürünlerde geçerli 30 TL kazandınız!`,
  }));
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.tagBox}>
            {tags.map((item) => (
              <View style={styles.tagItem} key={item.id}>
                <View style={styles.iconBox}>
                  <Octicons name="tag" size={24} color={colors.secondary} />
                </View>
                <View style={styles.tagContent}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.text}>{item.text}</Text>
                  <CustomBtn text={"Kullan"} bgColor={"#dfa44b"} />
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Coupon;

const styles = StyleSheet.create({
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
    gap: 10,
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
