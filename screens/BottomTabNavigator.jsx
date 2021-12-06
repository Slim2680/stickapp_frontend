import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import CashBackScreen from "./CashBackScreen";
import HomeScreen from "./HomeScreen";
import MessageScreen from "./MessageScreen";
import AccountScreen from "./AccountScreen";

const Tab = createBottomTabNavigator();

function BottomTabNavigator(props) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;
          if (route.name === "CashBack") {
            iconName = "money-bill-alt";
          } else if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Message") {
            iconName = "comment";
          } else if (route.name === "Account") {
            iconName = "user";
          }
          return <FontAwesome5 name={iconName} size={24} color={color} />;
        },
        tabBarActiveTintColor: "#97A1FF",
        tabBarInactiveTintColor: "#FFFFFF",
        tabBarStyle: {
          backgroundColor: "#111224",
          height: 95,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="CashBack" component={CashBackScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Message" component={MessageScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
