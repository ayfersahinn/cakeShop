import { TextInput, View, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { spacing, colors, border, fonts } from "../../theme/theme";
export default function SearchHeader() {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <View style={styles.searchWrapper}>
        <MaterialCommunityIcons
          name="cupcake"
          size={25}
          color={colors.ternary}
        />
        <TextInput style={styles.searchBar} />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Notifications")}>
        <Ionicons name="notifications" size={25} color={colors.primary} />
      </TouchableOpacity>
    </View>
  );
}

export const styles = StyleSheet.create({
  header: {
    paddingVertical: 10,
    paddingHorizontal: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    zIndex: 1000,
  },
  searchWrapper: {
    flex: 1,
    maxWidth: "90%",
    backgroundColor: colors.bgLight,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: border.radius,
    paddingHorizontal: 10,
    marginRight: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    // Android Shadow
    elevation: 2,
  },
  searchBar: {
    flex: 1,
    margin: 4,
    color: colors.secondary,
    fontFamily: fonts.text,
  },
});
