import { ScrollView, StyleSheet, Text, View, Pressable } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { border, colors, fonts, spacing } from "../../theme/theme";
import Ionicons from "@expo/vector-icons/Ionicons";

const Help = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Siparişimi nasıl takip ederim?",
      answer: "Siparişlerim sayfasından takip edebilirsiniz.",
    },
    {
      question: "İptal edebilir miyim?",
      answer: "Hazırlanmaya başlanmadan iptal edebilirsiniz.",
    },
    {
      question: "Teslimat süresi ne kadar?",
      answer: "Ortalama 2-3 iş günüdür.",
    },
    {
      question: "Ödeme seçenekleri neler?",
      answer:
        "Kredi kartı, banka kartı ve kapıda ödeme seçeneklerimiz mevcuttur.",
    },
    {
      question: "Glutensiz ürünleriniz var mı?",
      answer:
        "Evet, glutensiz seçeneklerimiz mevcuttur. Ürün detay sayfasında glutensiz etiketi olan ürünleri tercih edebilirsiniz.",
    },
    {
      question: "Özel tasarım kek sipariş edebilir miyim?",
      answer:
        "Evet! Özel tasarım kek siparişi için bizimle iletişime geçebilirsiniz.",
    },
    {
      question: "Bize nasıl ulaşabilirsiniz?",
      answer: "0555 555 55 55\ninfo@cakeshop.com\nHafta içi 09:00 - 18:00",
    },
  ];
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={{ padding: spacing.horizontal }}>
          <View style={styles.box}>
            {faqs.map((item, index) => (
              <>
                <Pressable
                  style={[
                    styles.helpItem,
                    index === faqs.length - 1 && { borderBottomWidth: 0 },
                  ]}
                  key={index}
                  onPress={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <Text style={styles.text}>{item.question}</Text>
                  <Ionicons
                    name="chevron-down"
                    size={15}
                    color={colors.secondary}
                  />
                </Pressable>
                {openIndex === index && (
                  <View
                    style={[
                      styles.answerBox,
                      index === faqs.length - 1 && {
                        borderBottomWidth: 0,
                        borderTopWidth: 1,
                      },
                    ]}
                  >
                    <Text style={styles.answer}>{item.answer}</Text>
                  </View>
                )}
              </>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Help;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  box: {
    borderWidth: 1,
    borderColor: colors.lightGray,
    borderRadius: border.radius,
    overflow: "hidden",
  },
  helpItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: colors.background,
    borderBottomWidth: 1,
    borderColor: colors.lightGray,
  },
  text: {
    fontFamily: fonts.text,
    color: colors.primary,
  },
  answerBox: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: colors.lightGray,
  },
  answer: {
    fontFamily: fonts.text,
    color: colors.secondary,
    fontSize: fonts.textXs,
  },
});
