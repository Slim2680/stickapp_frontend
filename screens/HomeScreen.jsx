import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  ScrollView,
  Image,
  Button,
} from "react-native";
import { Header } from "react-native-elements";

function HomeScreen(props) {
  const categories = [
    "food",
    "tech",
    "beauty",
    "love",
    "sport",
    "travel",
    "decoration",
    "luxury",
  ];

  const news = [
    {
      image: require("../assets/sephora1.jpg"),
    },
    {
      image: require("../assets/new1.jpg"),
    },
    {
      image: require("../assets/new2.jpg"),
    },
    {
      image: require("../assets/food2.jpg"),
    },
  ];

  const populars = [
    {
      image: require("../assets/technology1.jpg"),
    },
    {
      image: require("../assets/new3.png"),
    },
    {
      image: require("../assets/new4.png"),
    },
    {
      image: require("../assets/technology2.jpg"),
    },
  ];

  const funnys = [
    {
      image: require("../assets/funny1.png"),
    },
    {
      image: require("../assets/funny2.jpg"),
    },
    {
      image: require("../assets/funny3.jpg"),
    },
    {
      image: require("../assets/funny4.jpg"),
    },
  ];

  const fashions = [
    {
      image: require("../assets/nike3.jpg"),
    },
    {
      image: require("../assets/nike4.jpg"),
    },
    {
      image: require("../assets/nike2.jpg"),
    },
    {
      image: require("../assets/nike1.jpg"),
    },
  ];

  const onPressCategory = () => {
    console.log("click detected #1");
  };

  const onPressTitle = () => {
    console.log("click detected #2");
  };

  return (
    <View style={styles.container}>
      <Header
        statusBarProps={{ barStyle: "light-content" }}
        placement="left"
        backgroundColor="#111224"
        leftComponent={{
          text: "Welcome to StickApp!",
          style: { color: "#ffffff" },
        }}
        rightComponent={{ icon: "search", color: "#fff" }}
      />
      <ScrollView style={styles.stickerScroll}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalScroll}
        >
          {categories.map((category, index) => {
            // console.log("category", category);
            return (
              <TouchableHighlight
                key={index}
                onPress={() => onPressCategory()}
                underlayColor="#9893A8"
              >
                <View style={styles.submit}>
                  <Text style={styles.submitText}>{category}</Text>
                </View>
              </TouchableHighlight>
            );
          })}
        </ScrollView>
        <Text style={styles.stickerTitle} onPress={() => onPressTitle()}>
          New
        </Text>
        <View style={styles.stickerView}>
          {news.map((neww, i) => {
            return (
              <Image key={i} style={styles.tinySticker} source={neww.image} />
            );
          })}
        </View>
        <Text style={styles.stickerTitle} onPress={() => onPressTitle()}>
          Popular
        </Text>
        <View style={styles.stickerView}>
          {populars.map((popular, i) => {
            return (
              <Image
                key={i}
                style={styles.tinySticker}
                source={popular.image}
              />
            );
          })}
        </View>
        <Text style={styles.stickerTitle} onPress={() => onPressTitle()}>
          Funny
        </Text>
        <View style={styles.stickerView}>
          {funnys.map((funny, i) => {
            return (
              <Image key={i} style={styles.tinySticker} source={funny.image} />
            );
          })}
        </View>
        <Text style={styles.stickerTitle} onPress={() => onPressTitle()}>
          Fashion
        </Text>
        <View style={styles.stickerView}>
          {fashions.map((fashion, i) => {
            return (
              <Image
                key={i}
                style={styles.tinySticker}
                source={fashion.image}
              />
            );
          })}
        </View>
        <Text style={styles.stickerTitle} onPress={() => onPressTitle()}>
          Animal
        </Text>
        <View style={styles.stickerView}>
          {news.map((neww, i) => {
            return (
              <Image key={i} style={styles.tinySticker} source={neww.image} />
            );
          })}
        </View>
        <Text style={styles.stickerTitle} onPress={() => onPressTitle()}>
          Landmark
        </Text>
        <View style={styles.stickerView}>
          {news.map((neww, i) => {
            return (
              <Image key={i} style={styles.tinySticker} source={neww.image} />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111224",
  },
  submit: {
    backgroundColor: "#71678D",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#867e9f",
    marginTop: 5,
    marginHorizontal: 15,
    justifyContent: "space-between",
    // width: 70,
    // height: 58,
  },
  submitText: {
    color: "#fff",
    // textAlign: "center",
    marginRight: 10,
    marginLeft: 10,
    marginTop: 15,
    paddingBottom: 15,
  },
  horizontalScroll: {
    marginBottom: 15,
  },
  stickerView: {
    flexDirection: "row",
    marginHorizontal: 15,
    justifyContent: "space-between",
  },
  stickerScroll: {
    marginTop: 15,
  },
  stickerTitle: {
    color: "white",
    marginLeft: 15,
    marginBottom: 6,
    fontSize: 21,
    fontWeight: "500",
  },
  tinySticker: {
    width: 71,
    height: 71,
    borderRadius: 5,
    marginBottom: 30,
  },
});

export default HomeScreen;
