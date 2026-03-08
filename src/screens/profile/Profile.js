import { View, Text, ScrollView, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { spacing, border, fonts, colors } from "../../theme/theme";
export default function Profile() {
  const navigation = useNavigation();

  const profileItems = [
    {
      id: 1,
      title: "Hesap Bilgilerim",
      icon: "home-outline",
      routeName: "Account",
    },
    {
      id: 2,
      title: "Siparişlerim",
      icon: "cart-outline",
      routeName: "Orders",
    },
    {
      id: 3,
      title: "Kuponlarım",
      icon: "pricetag-outline",
      routeName: "Coupon",
    },
    {
      id: 4,
      title: "Değerlendirmeler",
      icon: "star-outline",
      routeName: "Rating",
    },
    {
      id: 5,
      title: "Şifre ve Güvenlik",
      icon: "key-outline",
      routeName: "PasswordSecurity",
    },
    {
      id: 6,
      title: "Yardım",
      icon: "help-circle-outline",
      routeName: "Help",
    },
    {
      id: 7,
      title: "Çıkış Yap",
      icon: "exit-outline",
      routeName: "Exit",
    },
  ];
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {profileItems.map((i) => (
            <Pressable
              key={i.id}
              onPress={() => navigation.navigate(i.routeName)}
              style={({ pressed }) => [
                styles.profileBox,
                {
                  backgroundColor: pressed
                    ? colors.lightGray
                    : colors.background,
                },
              ]}
            >
              <View style={styles.profileItem}>
                <Ionicons name={i.icon} size={24} color={colors.primary} />
                <Text style={styles.txt}>{i.title}</Text>
              </View>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color="black"
              />
            </Pressable>
          ))}
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
  profileBox: {
    flexDirection: "row",
    paddingHorizontal: spacing.horizontal,
    paddingVertical: 20,
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: colors.ternary,
  },
  profileItem: {
    flexDirection: "row",
    gap: spacing.horizontal,
    alignItems: "center",
  },
  txt: {
    fontFamily: fonts.text,
    fontSize: fonts.textMd,
    color: colors.primary,
  },
});
