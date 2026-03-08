import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Profile,
  Account,
  Orders,
  Coupon,
  PasswordSecurity,
} from "../../screens/profile";
const Stack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileMain"
        component={Profile}
        options={{
          unmountOnBlur: true,
          title: "Profilim",
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
        name="Account"
        component={Account}
        options={{
          unmountOnBlur: true,
          title: "Hesap Bilgilerim",
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
        name="Orders"
        component={Orders}
        options={{
          unmountOnBlur: true,
          title: "Siparişlerim",
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
        name="Coupon"
        component={Coupon}
        options={{
          unmountOnBlur: true,
          title: "Kuponlarım",
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
        name="PasswordSecurity"
        component={PasswordSecurity}
        options={{
          unmountOnBlur: true,
          title: "Şifre Değiştir",
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
    </Stack.Navigator>
  );
}
