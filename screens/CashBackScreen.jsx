import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  ScrollView,
  Image,
  Modal,
  TouchableOpacity,
  Button,
} from "react-native";
import { Header, searchBar } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialIcons";

function CashBackScreen(props) {
  const brands = [
    {
      image: require("../assets/adidas.png"),
    },

    {
      image: require("../assets/apple.jpg"),
    },

    {
      image: require("../assets/balenciaga.jpg"),
    },

    {
      image: require("../assets/dior.jpg"),
    },

    {
      image: require("../assets/gucci.jpg"),
    },

    {
      image: require("../assets/nike.jpg"),
    },
    {
      image: require("../assets/fila.jpg"),
    },
    {
      image: require("../assets/hermès.jpg"),
    },
    {
      image: require("../assets/versace.jpg"),
    },
    {
      image: require("../assets/arrow.png"),
    },
    {
      image: require("../assets/befruity.jpg"),
    },
    {
      image: require("../assets/fitfood.png"),
    },
    {
      image: require("../assets/grubers.jpg"),
    },
    {
      image: require("../assets/icisalade.png"),
    },
    {
      image: require("../assets/logitech.png"),
    },
    {
      image: require("../assets/mk.jpg"),
    },
    {
      image: require("../assets/my.png"),
    },
    {
      image: require("../assets/pizzab.png"),
    },
    {
      image: require("../assets/samsung.jpg"),
    },
    {
      image: require("../assets/sns.png"),
    },
    {
      image: require("../assets/zara.png"),
    },
  ];

  return (
    <View style={styles.container}>
      <Header
        statusBarProps={{ barStyle: "light-content" }}
        placement="left"
        backgroundColor="#111224"
        leftComponent={{
          text: "My Cash Back",
          style: { color: "#ffffff", fontWeight: "600", fontSize: 20 },
        }}
        rightComponent={{ icon: "search", color: "#fff" }}
      />

      <View style={styles.infoIcon}>
        <MaterialIcons name="info-outline" size={24} color="white" />
      </View>

      <View style={styles.starIcon}>
        <MaterialIcons name="star-border" size={85} color="yellow" />
      </View>

      <View>
        <Text style={styles.textPoint}>You've collected 0pts!</Text>
      </View>

      <View>
        <Text style={styles.text}>Start using Stickers to earn points!</Text>
      </View>

      <View
        style={{
          borderWidth: 0.25,
          borderColor: "#fff",
          borderRadius: 50,
          marginTop: 10,
        }}
      />

      <ScrollView contentContainerStyle={styles.stickerView}>
        {brands.map((brand, i) => {
          return (
            <Image key={i} style={styles.tinySticker} source={brand.image} />
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111224",
  },
  textPoint: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
  },
  text: {
    color: "white",
    textAlign: "center",
    justifyContent: "center",
    marginTop: 15,
    fontSize: 15,
  },
  starIcon: {
    justifyContent: "center",
    alignItems: "center",
  },
  infoIcon: {
    justifyContent: "flex-end",
    marginTop: 10,
    marginRight: 10,
    alignItems: "flex-end",
  },
  stickerView: {
    flexDirection: "row",
    marginHorizontal: 15,
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginTop: 15,
  },
  tinySticker: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginBottom: 30,
  },
});

export default CashBackScreen;
