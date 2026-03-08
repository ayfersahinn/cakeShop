import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors, fonts } from "../theme/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Cart, Profile, Favorites } from "../screens";
import { HomeStack, CategoryStack, ProfileStack } from "./stacks";

const Tab = createBottomTabNavigator();
export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        popToTopOnBlur: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          backgroundColor: colors.background,
        },
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTintColor: colors.primary,
        headerTitleStyle: {
          fontFamily: fonts.titleSemi,
          fontSize: fonts.textXL,
        },
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;

          if (route.name === "HomePage")
            iconName = focused ? "home" : "home-outline";

          if (route.name === "Category")
            iconName = focused ? "grid" : "grid-outline";

          if (route.name === "Favorites")
            iconName = focused ? "heart-sharp" : "heart-outline";

          if (route.name === "Cart")
            iconName = focused ? "cart" : "cart-outline";

          if (route.name === "Profile")
            iconName = focused ? "person" : "person-outline";

          return <Ionicons name={iconName} size={28} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="HomePage"
        component={HomeStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Category"
        component={CategoryStack}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          title: "Favorilerim",
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          title: "Sepetim",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
