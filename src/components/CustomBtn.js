import { Pressable, StyleSheet, Text, View } from "react-native";
import { spacing, fonts, border, colors } from "../theme/theme";
import { FontAwesome } from "@expo/vector-icons";

const CustomBtn = ({
  text = "Sepete Ekle",
  textSize,
  bgColor = "#dfa44b",
  icon,
  style,
  onPress,
}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.btn,
        { backgroundColor: pressed ? "#c78a2e" : bgColor },
        style,
      ]}
      onPress={onPress}
    >
      {icon && (
        <FontAwesome
          name={icon}
          size={13}
          color={colors.bgLight}
          style={{ marginRight: 2 }}
        />
      )}
      <Text style={[styles.btnText, { fontSize: textSize }]}>{text}</Text>
    </Pressable>
  );
};

export default CustomBtn;

const styles = StyleSheet.create({
  btn: {
    // width: "100%",
    flex: 1,
    height: 36,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: border.radius,
    elevation: 2,
  },
  btnText: {
    textAlign: "center",
    color: colors.bgLight,
    fontFamily: fonts.textSemi,
  },
});
