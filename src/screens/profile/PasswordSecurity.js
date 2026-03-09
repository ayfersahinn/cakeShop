import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { spacing, border, fonts, colors } from "../../theme/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { CustomBtn } from "../../components";
import { useState } from "react";
const PasswordSecurity = () => {
  const [eye, setEye] = useState([false, false, false]);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [activeInput, setActiveInput] = useState(null);

  function toggleEye(index) {
    setEye((prev) => prev.map((item, i) => (i === index ? !item : item)));
  }
  const inputData = [
    {
      id: "currentPassword",
      placeholder: "Mevcut şifre",
      value: currentPassword,
      onChange: setCurrentPassword,
    },
    {
      id: "newPassword",
      placeholder: "Yeni şifre",
      value: newPassword,
      onChange: setNewPassword,
    },
    {
      id: "confirmPassword",
      placeholder: "Tekrar yeni şifre",
      value: confirmPassword,
      onChange: setConfirmPassword,
    },
  ];
  function passwordValidation() {
    const errors = {};
    if (currentPassword === "")
      errors.currentPassword = "Mevcut şifre boş olamaz.";
    if (newPassword === "") errors.newPassword = "Yeni şifre boş olamaz.";
    if (confirmPassword === "")
      errors.confirmPassword = "Tekrar şifre boş olamaz.";

    if (!errors.currentPassword && currentPassword !== "1234") {
      errors.currentPassword = "Mevcut şifre yanlış.";
    }
    if (
      !errors.newPassword &&
      !errors.confirmPassword &&
      newPassword !== confirmPassword
    ) {
      errors.confirmPassword = "Şifreler eşleşmedi!";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  }
  function handleSubmit() {
    const isValid = passwordValidation();
    if (isValid) {
      setSuccess(true);
    } else {
      setSuccess(false);
    }
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View>
            {inputData.map((item, index) => (
              <View key={item.id}>
                <View
                  style={[
                    styles.inputBox,
                    errors[item.id]
                      ? { borderColor: "#f88d83" }
                      : activeInput === item.id
                        ? { borderColor: colors.secondary }
                        : null,
                  ]}
                >
                  <TextInput
                    style={styles.input}
                    placeholder={item.placeholder}
                    secureTextEntry={!eye[index]}
                    value={item.value}
                    onChangeText={item.onChange}
                  />
                  <Pressable onPress={() => toggleEye(index)}>
                    <Ionicons
                      name={eye[index] ? "eye" : "eye-off"}
                      size={24}
                      color={colors.secondary}
                    />
                  </Pressable>
                </View>
                {errors[item.id] && (
                  <Text style={styles.errorText}>{errors[item.id]}</Text>
                )}
              </View>
            ))}
          </View>
          {success && (
            <Text style={styles.successText}>
              Şifre başarıyla değiştirildi!
            </Text>
          )}
          <CustomBtn
            onPress={handleSubmit}
            bgColor={"#dfa44b"}
            text={"Şifre Güncelle"}
            textSize={fonts.textMd}
            style={{ height: 50, marginTop: 10 }}
          />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default PasswordSecurity;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    flex: 1,
    color: colors.secondary,
    fontSize: fonts.textSm,
    fontFamily: fonts.text,
  },
  errorText: {
    color: "#f88d83",
    fontFamily: fonts.text,
    fontSize: fonts.textXs,
    marginBottom: 5,
  },
  successText: {
    color: "green",
    fontFamily: fonts.text,
    fontSize: fonts.textSm,
    textAlign: "center",
    marginVertical: 10,
  },
});
