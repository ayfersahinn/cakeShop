import React, { useRef, useEffect, useState } from "react";
import { spacing, colors, fonts, border } from "../../theme/theme";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Adds } from "./saleAdds";
const { width } = Dimensions.get("window");

export const SaleCards = () => {
  const scrollRef = useRef(null);
  const [index, setIndex] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (index + 1) % Adds.length;

      scrollRef.current?.scrollTo({
        x: nextIndex * width,
        animated: true,
      });

      setIndex(nextIndex);
    }, 2500);

    return () => clearInterval(interval);
  }, [index]);
  return (
    <ScrollView
      ref={scrollRef}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{}}
    >
      {Adds.map((i) => (
        <View
          style={[styles.saleBox, { backgroundColor: i.bgColor }]}
          key={i.id}
        >
          <View style={styles.saleContent}>
            <Text style={[styles.saleTitle, { color: i.titleColor }]}>
              {i.title}
            </Text>
            <Text style={styles.saleText}>{i.text}</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("ProductList")}
              style={[styles.saleBtn, { backgroundColor: i.btnColor }]}
            >
              <Text style={styles.saleBtnText}>İncele</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.saleImgBox}>
            <Image style={styles.saleImg} source={i.img} />
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export const styles = StyleSheet.create({
  saleBox: {
    width: width,
    height: 250,
    borderRadius: border.radius,
    flexDirection: "row",
    alignItems: "center",
    elevation: 2,
  },
  saleContent: {
    width: "50%",
    paddingHorizontal: spacing.horizontal,
    gap: 10,
    justifyContent: "center",
  },
  saleTitle: {
    fontFamily: fonts.titleBold,
    fontSize: fonts.textXL,
    color: colors.bgColor,
    lineHeight: 20,
  },
  saleText: {
    fontFamily: fonts.text,
    color: colors.background,
  },
  saleBtn: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginTop: 8,
    alignSelf: "flex-start",
    borderRadius: border.radius,
    elevation: 2,
  },
  saleBtnText: {
    fontFamily: fonts.title,
    color: colors.background,
  },
  saleImgBox: {
    width: "50%",
  },
  saleImg: {
    width: "90%",
    height: "90%",
    resizeMode: "contain",
  },
});
