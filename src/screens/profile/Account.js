import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { spacing, fonts, colors, border } from "../../theme/theme";
import { useState } from "react";
const inputs = [
  { key: "username", placeholder: "Kullanıcı adı" },
  {
    key: "email",
    placeholder: "Email",
    keyboardType: "email-address",
  },
  { key: "phone", placeholder: "Telefon", keyboardType: "phone-pad" },
  { key: "district", placeholder: "İlçe" },
  { key: "neighbourhood", placeholder: "Mahalle" },
  { key: "title", placeholder: "Adres Başlığı" },
  { key: "address", placeholder: "Adres", multiline: true },
];
const Account = () => {
  const [errors, setErrors] = useState({});
  const [activeInput, setActiveInput] = useState(null);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: "",
    phone: "",
    district: "",
    neighbourhood: "",
    title: "",
    address: "",
  });
  const handleChange = (key, value) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  const handleSubmit = () => {
    const isValid = formValidate();
    if (isValid) {
      setSuccess(true);
      console.log("Form geçerli:", form);
    } else {
      console.log("Form hatalı:", errors);
      setSuccess(false);
    }
  };
  function formValidate() {
    const newErrors = {};
    if (!form.username.trim()) {
      newErrors.username = "Kullanıcı adı boş olamaz";
    }
    if (!form.email.trim()) {
      newErrors.email = newErrors.email = "Email boş olamaz";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Geçersiz email formatı";
    }
    if (!form.phone.trim()) {
      newErrors.phone = "Telefon boş olamaz";
    } else if (!/^\d{10,15}$/.test(form.phone)) {
      newErrors.phone = "Geçersiz telefon numarası";
    }

    if (!form.address.trim()) {
      newErrors.address = "Adres boş olamaz";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "space-between",
            padding: spacing.horizontal,
          }}
        >
          <View>
            {inputs.map((item) => (
              <View key={item.key}>
                <TextInput
                  style={[
                    styles.input,
                    errors[item.key]
                      ? { borderColor: "red" }
                      : activeInput === item.key
                        ? { borderColor: colors.secondary }
                        : null,
                  ]}
                  placeholder={item.placeholder}
                  multiline={item.multiline ?? false}
                  keyboardType={item.keyboardType ?? "default"}
                  value={form[item.key]}
                  onChangeText={(text) => handleChange(item.key, text)}
                  onFocus={() => setActiveInput(item.key)}
                />

                {errors[item.key] && (
                  <Text style={styles.errorText}>{errors[item.key]}</Text>
                )}
              </View>
            ))}
          </View>

          <View>
            {success && (
              <Text style={styles.successText}>
                Bilgiler başarıyla kaydedildi!
              </Text>
            )}
            <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
              <Text style={styles.btnText}>Bilgileri Kaydet</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  input: {
    paddingHorizontal: 16,
    height: 50,
    marginTop: 5,
    backgroundColor: colors.bgLight,
    borderRadius: border.radius,
    borderWidth: 1,
    borderColor: colors.ternary,
    color: colors.secondary,
    fontSize: fonts.textSm,
    fontFamily: fonts.text,
  },
  btn: {
    padding: 16,
    height: 50,
    flex: 1,
    margin: 3,
    borderRadius: border.radius,
    backgroundColor: "#dfa44b",
    elevation: 2,
  },
  btnText: {
    color: colors.bgLight,
    fontSize: fonts.textMd,
    fontFamily: fonts.textSemi,
    textAlign: "center",
  },
  errorText: {
    color: "#f88d83",
    fontFamily: fonts.text,
    fontSize: fonts.textXs,
    marginTop: 5,
  },
  successText: {
    color: "green",
    fontFamily: fonts.text,
    fontSize: fonts.textSm,
    textAlign: "center",
    marginVertical: 10,
  },
});
