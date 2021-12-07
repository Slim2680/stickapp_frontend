import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import CashBackScreen from "./CashBackScreen";
import HomeScreen from "./HomeScreen";
import MessageScreen from "./MessageScreen";
import AccountScreen from "./AccountScreen";
import ChatScreen from "./ChatScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

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
      <Tab.Screen name="Message" component={StackChat} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}

function StackChat() {
  return (
    <Stack.Navigator
      component={ChatScreen}
      screenOptions={{
        headerStyle: {
          backgroundColor: "#111224",
        },
        headerTintColor: "#ffffff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen name="Contacts" component={MessageScreen} />
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={({ route }) => {
          console.log("route", route);
          return {
            title: route.params.userName,
            Pp: route.params.userPp,
            headerBackTitleVisible: false,
          };
        }}
      />
    </Stack.Navigator>
  );
}

export default BottomTabNavigator;
