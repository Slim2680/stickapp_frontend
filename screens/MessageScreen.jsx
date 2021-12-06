import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Card, ListItem, Avatar, SearchBar } from "react-native-elements";

function MessageScreen(props) {
  const users = [
    {
      name: "Frennechesco",
      avatar: require("../assets/pp1.png"),
      conv: "hey french",
    },
    {
      name: "Salim",
      avatar: require("../assets/pp2.png"),
      conv: "hey Sasa",
    },
    {
      name: "Ilan",
      avatar: require("../assets/pp3.png"),
      conv: "hey Ilil",
    },
    {
      name: "Andrea",
      avatar: require("../assets/pp4.png"),
      conv: "hey Andand",
    },
    {
      name: "Jenaïc",
      avatar: require("../assets/pp5.png"),
      conv: "hey Jenjen",
    },
    {
      name: "Elie",
      avatar: require("../assets/pp6.png"),
      conv: "hey Elielie",
    },
    {
      name: "Candice",
      avatar: require("../assets/pp7.png"),
      conv: "hey Cancan",
    },
    {
      name: "Christelle",
      avatar: require("../assets/pp0.png"),
      conv: "hey Cricri",
    },
  ];

  const onPressChat = (user) => {
    console.log("username", user.name);
    props.navigation.navigate("Chat", { userName: user.name });
  };

  return (
    <ScrollView
    // contentContainerStyle={{
    //   justifyContent: "center",
    //   alignItems: "center",
    // }}
    >
      <SearchBar
        placeholder="Type Here..."
        // onChangeText={this.updateSearch}
        // value={search}
        backgroundColor="white"
      />
      <Card.Divider />
      {users.map((user, index) => {
        return (
          <ListItem key={index} bottomDivider onPress={() => onPressChat(user)}>
            <Avatar rounded resizeMode="cover" source={user.avatar} />
            <ListItem.Content>
              <ListItem.Title>{user.name}</ListItem.Title>
              <ListItem.Subtitle>{user.conv}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#111224",
  },
});

export default MessageScreen;
