import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "../navigations/tabs";
import { Notification, ProductDetail } from "../screens";
const Stack = createNativeStackNavigator();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Notifications"
          component={Notification}
          options={{
            title: "Bildirimler",
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
          name="ProductDetail"
          component={ProductDetail}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
