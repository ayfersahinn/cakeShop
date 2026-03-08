import { StyleSheet, FlatList } from "react-native";
import { spacing, border, fonts, colors } from "../../theme/theme";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { CardItem, FilterBtn } from "../../components";
const Orders = () => {
  const data = Array.from({ length: 1 }, (_, i) => ({ id: i.toString() }));

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={data}
          renderItem={() => (
            <>
              <CardItem
                title={"Ürün Adı"}
                imgUrl={require("../../assets/categories/doughnut.png")}
                newPrice={250}
                btnText={"Değerlendir"}
                btnColor={"#dfa44b"}
                icon={"star-o"}
                status={"Sipariş Hazırlanıyor!"}
                date={"06.03.2026"}
                order={true}
              />
              <CardItem
                title={"Ürün Adı"}
                imgUrl={require("../../assets/categories/cheesecake.png")}
                newPrice={250}
                btnText={"Değerlendir"}
                btnColor={"#dfa44b"}
                icon={"star-o"}
                status={"Teslim Edildi!"}
                date={"06.03.2026"}
                order={true}
              />
              <CardItem
                title={"Ürün Adı"}
                imgUrl={require("../../assets/categories/croisant.png")}
                newPrice={250}
                btnText={"Değerlendir"}
                btnColor={"#dfa44b"}
                icon={"star-o"}
                status={"Teslim Edilemedi!"}
                date={"06.03.2026"}
                order={true}
              />
            </>
          )}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ padding: 16 }}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Orders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
