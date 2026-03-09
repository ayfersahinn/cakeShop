import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { spacing, border, colors, fonts } from "../theme/theme";
import CustomBtn from "./CustomBtn";

const CardItem = ({
  title,
  imgUrl,
  newPrice,
  prevPrice,
  btnText,
  btnColor,
  icon,
  deleteBtn,
  stars,
  status,
  date,
  order,
}) => {
  return (
    <View style={styles.Card}>
      {order && (
        <View style={styles.cardHeader}>
          {status && (
            <Text
              style={[
                styles.status,
                {
                  color:
                    status !== "Teslim Edildi!" &&
                    status !== "Sipariş Hazırlanıyor!"
                      ? "#f56356"
                      : "green",
                },
              ]}
            >
              {status}
            </Text>
          )}
          {date && <Text style={[styles.date]}>{date}</Text>}
        </View>
      )}
      <View style={styles.cardBody}>
        <View style={styles.imgBox}>
          <Image style={styles.img} source={imgUrl} />
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{title}</Text>
          {stars && (
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
          )}

          <View style={styles.priceBox}>
            <Text style={styles.newPrice}>
              {newPrice}
              <FontAwesome name="try" size={14} color={colors.secondary} />
            </Text>
            {prevPrice && <Text style={styles.prevPrice}>{prevPrice}</Text>}
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              gap: 10,
              marginTop: 10,
            }}
          >
            <View style={{ flexDirection: "row", flex: 1, gap: 5 }}>
              <CustomBtn bgColor={btnColor} text={btnText} icon={icon} />
              {deleteBtn && (
                <View style={styles.iconBox}>
                  <Ionicons
                    name="trash-outline"
                    size={24}
                    color={colors.secondary}
                  />
                </View>
              )}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardItem;

const styles = StyleSheet.create({
  Card: {
    flex: 1,
    marginBottom: 5,
    padding: 12,
    backgroundColor: colors.background,
    borderRadius: border.radius,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: colors.lightGray,
    paddingBottom: 5,
  },
  status: {
    color: "green",
    fontFamily: fonts.text,
  },
  date: {
    color: colors.ternary,
    fontFamily: fonts.text,
    fontSize: fonts.textXs,
  },
  cardBody: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
  },
  imgBox: {
    flex: 2,
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    borderRadius: 5,
  },
  cardContent: {
    flex: 4,
    gap: 5,
  },
  cardTitle: {
    fontFamily: fonts.textSemi,
    fontSize: fonts.textSm,
    color: colors.primary,
  },

  priceBox: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  newPrice: {
    fontSize: fonts.textMd,
    marginRight: 5,
    color: colors.secondary,
    fontFamily: fonts.textBold,
  },
  prevPrice: {
    color: colors.medium,
    textDecorationLine: "line-through",
    fontSize: fonts.textXs,
    fontFamily: fonts.text,
  },
  stars: {
    flexDirection: "row",
  },
  iconBox: {
    backgroundColor: colors.lightGray,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: border.radius,
    height: 36,
    paddingHorizontal: 6,
    elevation: 2,
  },
});
