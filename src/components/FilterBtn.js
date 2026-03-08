import { StyleSheet, Text, Pressable } from "react-native";
import { spacing, colors, fonts, border } from "../theme/theme";

const FilterBtn = ({ text, active, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.btn,
        {
          backgroundColor: active ? colors.ternary : colors.bgLight,
          borderColor: active ? colors.secondary : colors.ternary,
        },
      ]}
    >
      <Text style={styles.btnText}>{text}</Text>
    </Pressable>
  );
};

export default FilterBtn;

const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: colors.bgLight,
    borderWidth: 1,
    borderColor: colors.ternary,
    borderRadius: border.radius,
  },
  btnText: {
    color: colors.primary,
    fontFamily: fonts.text,
  },
});
