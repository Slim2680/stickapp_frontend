import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import {
  Card,
  ListItem,
  Avatar,
  SearchBar,
  Header,
} from "react-native-elements";

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
    {
      name: "Christelle",
      avatar: require("../assets/pp0.png"),
      conv: "hey Cricri",
    },
    {
      name: "Christelle",
      avatar: require("../assets/pp0.png"),
      conv: "hey Cricri",
    },
    {
      name: "Christelle",
      avatar: require("../assets/pp0.png"),
      conv: "hey Cricri",
    },
    {
      name: "Christelle",
      avatar: require("../assets/pp0.png"),
      conv: "hey Cricri",
    },
  ];

  const onPressChat = (user) => {
    console.log("username", user.name);
    console.log(("§§§§§§§§§§avatar", user.avatar));
    props.navigation.navigate("Chat", {
      userName: user.name,
      userPp: user.avatar,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SearchBar
        round
        style={styles.searchBar}
        placeholder="Search"
        // onChangeText={this.updateSearch}
        // value={search}
        containerStyle={{ backgroundColor: "#111224" }}
      />
      {users.map((user, index) => {
        return (
          <ListItem
            key={index}
            bottomDivider
            containerStyle={{ backgroundColor: "#111224" }}
            onPress={() => onPressChat(user)}
          >
            <Avatar
              rounded
              size="medium"
              resizeMode="cover"
              source={user.avatar}
            />
            <ListItem.Content>
              <ListItem.Title
                style={{ color: "white", fontSize: 20, fontWeight: "600" }}
              >
                {user.name}
              </ListItem.Title>
              <ListItem.Subtitle style={{ color: "#C0C0C0", fontSize: 15 }}>
                {user.conv}
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    borderBottomWidth: 0,
  },
  container: {
    backgroundColor: "#111224",
  },
});

export default MessageScreen;
