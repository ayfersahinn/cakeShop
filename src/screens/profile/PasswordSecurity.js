import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { spacing, border, fonts, colors } from "../../theme/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { CustomBtn } from "../../components";
import { useState } from "react";
const PasswordSecurity = () => {
  const [eye, setEye] = useState([false, false, false]);
  function toggleEye(index) {
    setEye((prev) => prev.map((item, i) => (i === index ? !item : item)));
  }
  const inputText = ["Mevcut şifre", "Yeni şifre", "Tekrar yeni şifre"];
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {inputText.map((item, index) => (
          <View style={styles.inputBox} key={item}>
            <TextInput
              style={styles.input}
              placeholder={item}
              secureTextEntry={!eye[index]}
            />
            <Pressable onPress={toggleEye}>
              <Ionicons
                name={eye[index] ? "eye" : "eye-off"}
                size={24}
                color={colors.secondary}
              />
            </Pressable>
          </View>
        ))}

        <CustomBtn
          bgColor={"#dfa44b"}
          text={"Güncelle"}
          textSize={fonts.textMd}
          style={{ height: 50 }}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default PasswordSecurity;

const styles = StyleSheet.create({
  container: {
    padding: spacing.horizontal,
    backgroundColor: colors.background,
  },
  inputBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    height: 50,
    marginBottom: 5,
    backgroundColor: colors.bgLight,
    borderRadius: border.radius,
    borderWidth: 1,
    borderColor: colors.ternary,
  },
  input: {
    color: colors.secondary,
    fontSize: fonts.textSm,
    fontFamily: fonts.text,
  },
});
