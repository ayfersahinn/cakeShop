import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomePage, ProductList } from "../../screens";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: "fade",
      }}
    >
      <Stack.Screen
        name="HomeMain"
        component={HomePage}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="ProductList"
        component={ProductList}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
