import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Category, ProductList } from "../../screens";
const Stack = createNativeStackNavigator();

export default function CategoryStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CategoryMain"
        component={Category}
        options={{
          unmountOnBlur: true,
          title: "Kategoriler",
          headerStyle: {
            backgroundColor: "#F2F2F2",
          },
          headerTintColor: "#3a3a3a",
          headerTitleStyle: {
            fontFamily: "PromptSemi",
            fontSize: 20,
          },
        }}
      />

      <Stack.Screen
        name="ProductList"
        component={ProductList}
        options={{
          unmountOnBlur: true,
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
