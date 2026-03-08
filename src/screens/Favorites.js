import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { spacing, colors, border, fonts } from "../theme/theme";
import { FilterBtn, CardItem } from "../components";
import { useMemo, useState } from "react";
export default function Favorites() {
  const favItems = [
    {
      id: 1,
      title: "Fav-item-1",
      img: require("../assets/categories/doughnut.png"),
      type: "Fiyatı Düşenler",
    },
    {
      id: 2,
      title: "Fav-item-2",
      img: require("../assets/categories/chocolate.png"),
      type: "Fiyatı Düşenler",
    },
    {
      id: 3,
      title: "Fav-item-3",
      img: require("../assets/categories/eclairs.png"),
      type: "Kuponlu Ürünler",
    },
    {
      id: 4,
      title: "Fav-item-4",
      img: require("../assets/categories/pasta.png"),
      type: "Kuponlu Ürünler",
    },
    {
      id: 5,
      title: "Fav-item-5",
      img: require("../assets/categories/cookie.png"),
      type: "Kuponlu Ürünler",
    },
  ];
  const [active, setActive] = useState("Tümü");
  const tabs = ["Tümü", "Fiyatı Düşenler", "Kuponlu Ürünler"];
  const filteredFavItems = useMemo(() => {
    return active === "Tümü"
      ? favItems
      : favItems.filter((i) => i.type === active);
  }, [active]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          contentContainerStyle={{ paddingHorizontal: spacing.horizontal }}
          data={filteredFavItems}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <View style={styles.favTab}>
              {tabs.map((item) => (
                <FilterBtn
                  key={item}
                  text={item}
                  active={active === item}
                  onPress={() => setActive(item)}
                />
              ))}
            </View>
          }
          renderItem={({ item }) => (
            <CardItem
              title={item.title}
              imgUrl={item.img}
              newPrice={150}
              prevPrice={180}
              btnColor={"#dfa44b"}
              btnText={"Sepete Ekle"}
              deleteBtn={true}
              stars={true}
            />
          )}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  favTab: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 16,
  },
  favs: {
    flex: 1,
  },
});
