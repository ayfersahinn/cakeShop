import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Modal,
  FlatList,
} from "react-native";
import { useState } from "react";
import { spacing, colors, fonts, border } from "../theme/theme";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { CustomBtn } from "../components";
const ProductDetail = ({ route }) => {
  const { product } = route.params;
  const [like, setLike] = useState(false);
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const toggleLike = () => {
    setLike(!like);
  };
  const options = (product?.serving_options || [2, 4, 8]).map((size) => ({
    label: `${size} kişilik`,
    value: size.toString(),
  }));
  const getPrice = () => {
    if (!selected) return product?.price;
    const base = product?.price;
    const multipliers = { 2: 1, 4: 2, 8: 4 };
    return (base * multipliers[selected.value]).toFixed(2);
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.imgSection}>
            <Image
              style={styles.img}
              source={
                product?.image_url
                  ? { uri: product.image_url }
                  : require("../assets/broken-image.png")
              }
            />
          </View>

          <View style={styles.detailSection}>
            <View style={styles.category}>
              <Text style={styles.catText}>{product?.categories?.name}</Text>
            </View>
            <View style={styles.header}>
              <Text style={styles.title}>{product?.name}</Text>

              <Pressable onPress={toggleLike}>
                <Ionicons
                  name={like ? "heart" : "heart-outline"}
                  size={26}
                  color={like ? "#dfa44b" : colors.primary}
                />
              </Pressable>
            </View>
            <View style={styles.rating}>
              <View style={styles.stars}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <FontAwesome
                    key={i}
                    name="star-o"
                    size={13}
                    color="#f7cb09"
                    style={{ marginRight: 2 }}
                  />
                ))}
              </View>
              <Pressable style={styles.commentBtn}>
                <Text style={styles.rateText}>Değerlendirme yok</Text>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={15}
                  color={colors.secondary}
                />
              </Pressable>
            </View>

            <View style={{ gap: 10 }}>
              <Text style={styles.text}>{product?.description}</Text>
            </View>
            <View>
              <Pressable
                onPress={() => setVisible(true)}
                style={styles.trigger}
              >
                <Text style={styles.triggerText}>
                  {selected?.label || "Kişi Sayısı Seçiniz..."}
                </Text>
                <Ionicons
                  name="chevron-down"
                  size={13}
                  color={colors.secondary}
                />
              </Pressable>

              {/* Modal */}
              <Modal visible={visible} transparent>
                {/* Dışarı tıklayınca kapat */}
                <Pressable
                  style={styles.backdrop}
                  onPress={() => setVisible(false)}
                />

                <View style={styles.sheet}>
                  <View style={{ padding: 20 }}>
                    <View style={styles.handle} />
                    <Text style={styles.selectTitle}>Kişi Sayısı</Text>

                    <FlatList
                      data={options}
                      keyExtractor={(item) => item.value}
                      renderItem={({ item }) => {
                        const isSelected = selected?.value === item.value;
                        return (
                          <Pressable
                            onPress={() => {
                              setSelected(item);
                              setVisible(false);
                            }}
                            style={[
                              styles.item,
                              isSelected && styles.itemSelected,
                            ]}
                          >
                            <Text
                              style={[
                                styles.itemText,
                                isSelected && styles.itemTextSelected,
                              ]}
                            >
                              {item.label}
                            </Text>
                            {isSelected && (
                              <Ionicons
                                name="checkmark"
                                size={15}
                                color={colors.primary}
                              />
                            )}
                          </Pressable>
                        );
                      }}
                    />
                  </View>
                </View>
              </Modal>
            </View>
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <Text style={styles.price}>
            {getPrice()}
            <FontAwesome name="try" size={14} color={colors.secondary} />
          </Text>
          <CustomBtn textSize={fonts.textMd} style={{ height: 40 }} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  imgSection: {
    height: 400,
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  detailSection: {
    flex: 1,
    gap: 10,
    padding: 24,
    backgroundColor: colors.background,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    marginTop: -20,
    justifyContent: "space-between",
  },
  stars: {
    flexDirection: "row",
  },
  category: {
    padding: 10,
    backgroundColor: colors.lightGray,
    borderRadius: border.radius,
    alignSelf: "flex-start",
  },
  catText: {
    fontFamily: fonts.textSemi,
    fontSize: fonts.textXs,
    color: colors.secondary,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontFamily: fonts.textSemi,
    fontSize: fonts.textL,
    color: colors.primary,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
    paddingBottom: 10,
  },
  rateText: {
    fontFamily: fonts.text,
    fontSize: fonts.textXs,
    color: colors.secondary,
  },
  commentBtn: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontFamily: fonts.text,
    fontSize: fonts.textSm,
    color: colors.secondary,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  price: {
    fontFamily: fonts.textBold,
    fontSize: fonts.textL,
    color: colors.secondary,
  },
  trigger: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.lightGray,
    borderRadius: border.radius,
    padding: 14,
  },
  triggerText: {
    fontSize: fonts.textSm,
    fontFamily: fonts.text,
    color: colors.secondary,
  },

  backdrop: {
    flex: 1,
    backgroundColor: "#00000055",
  },
  sheet: {
    backgroundColor: colors.background,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 34,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: colors.ternary,
    borderRadius: 2,
    alignSelf: "center",
    marginBottom: 16,
  },
  selectTitle: {
    fontSize: fonts.textMd,
    fontFamily: fonts.textSemi,
    paddingBottom: 10,
    color: colors.primary,
    borderBottomColor: colors.lightGray,
    borderBottomWidth: 1,
  },

  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: border.radius,
  },
  itemSelected: {
    backgroundColor: colors.lightGray,
  },
  itemText: {
    fontSize: fonts.textSm,
    fontFamily: fonts.text,
    color: colors.secondary,
  },
  itemTextSelected: {
    color: colors.primary,
  },
});
