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
} from "react-native";
import { Header, Button } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialIcons";

function HomeScreen(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalImage, setModalImage] = useState(0);
  console.log("/////modalVisible", modalVisible);
  console.log("/////modalImage", modalImage);

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
    console.log("---press detected #category");
  };

  const onPressTitle = () => {
    console.log("---press detected #title");
  };

  const onPressNew = (neww) => {
    setModalVisible(true);
    setModalImage(neww.image);
  };

  const onPressPopular = (popular) => {
    setModalVisible(true);
    setModalImage(popular.image);
  };

  const onPressFunny = (funny) => {
    setModalVisible(true);
    setModalImage(funny.image);
  };

  const onPressFashion = (fashion) => {
    setModalVisible(true);
    setModalImage(fashion.image);
  };

  const onPressClose = () => {
    console.log("---press detected #");
    setModalVisible(!modalVisible);
  };

  const onPressFavorite = () => {
    console.log("---press detected #favorite");
  };

  const onPressCopy = () => {
    console.log("---press detected #copy");
  };

  const onPressVisit = () => {
    console.log("---press detected #visit");
  };

  const onPressView = () => {
    console.log("---press detected #view");
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <Header
        statusBarProps={{ barStyle: "light-content" }}
        placement="left"
        backgroundColor="#111224"
        leftComponent={{
          text: "Welcome to.. StickApp! 🦄",
          style: { color: "#ffffff", fontWeight: "600", fontSize: 20 },
        }}
        rightComponent={{ icon: "search", color: "#fff" }}
      />
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <TouchableOpacity
          style={styles.modalView}
          onPress={() => onPressView()}
        >
          <View
            style={{
              marginTop: 70,
              marginBottom: 100,
            }}
          >
            <MaterialIcons
              name="close"
              size={24}
              style={{ ...styles.modalToggle, ...styles.modalClose }}
              color={"#fff"}
              onPress={() => onPressClose()}
            />
            <Image style={styles.modalContent} source={modalImage} />
            <Button
              buttonStyle={{
                backgroundColor: "rgba(78, 116, 255, 1)",
                borderRadius: 8,
                borderWidth: 1,
                borderColor: "#fff",
                marginBottom: 7,
              }}
              icon={<Icon name="favorite-border" size={20} color="#ffffff" />}
              title="   Add to favorite"
              type="solid"
              onPress={() => onPressFavorite()}
            />
            <Button
              buttonStyle={{
                backgroundColor: "rgba(78, 116, 255, 1)",
                borderRadius: 8,
                borderWidth: 1,
                borderColor: "#fff",
                marginBottom: 7,
              }}
              icon={<Icon name="content-copy" size={20} color="#ffffff" />}
              title="Copy                   "
              type="solid"
              onPress={() => onPressCopy()}
            />
            <Button
              buttonStyle={{
                backgroundColor: "rgba(78, 116, 255, 1)",
                borderRadius: 8,
                borderWidth: 1,
                borderColor: "#fff",
              }}
              icon={<Icon name="logout" size={20} color="#ffffff" />}
              title="Visit                    "
              type="solid"
              onPress={() => onPressVisit()}
            />
          </View>
        </TouchableOpacity>
      </Modal>
      <ScrollView style={styles.stickerScroll}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalScroll}
        >
          {categories.map((category, index) => {
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
            console.log("/////////map neww.image", neww.image);
            return (
              <TouchableOpacity key={i} onPress={() => onPressNew(neww)}>
                <Image style={styles.tinySticker} source={neww.image} />
              </TouchableOpacity>
            );
          })}
        </View>
        <Text style={styles.stickerTitle} onPress={() => onPressTitle()}>
          Popular
        </Text>
        <View style={styles.stickerView}>
          {populars.map((popular, i) => {
            return (
              <TouchableOpacity key={i} onPress={() => onPressPopular(popular)}>
                <Image style={styles.tinySticker} source={popular.image} />
              </TouchableOpacity>
            );
          })}
        </View>
        <Text style={styles.stickerTitle} onPress={() => onPressTitle()}>
          Funny
        </Text>
        <View style={styles.stickerView}>
          {funnys.map((funny, i) => {
            return (
              <TouchableOpacity key={i} onPress={() => onPressFunny(funny)}>
                <Image style={styles.tinySticker} source={funny.image} />
              </TouchableOpacity>
            );
          })}
        </View>
        <Text style={styles.stickerTitle} onPress={() => onPressTitle()}>
          Fashion
        </Text>
        <View style={styles.stickerView}>
          {fashions.map((fashion, i) => {
            return (
              <TouchableOpacity key={i} onPress={() => onPressFashion(fashion)}>
                <Image style={styles.tinySticker} source={fashion.image} />
              </TouchableOpacity>
            );
          })}
        </View>
        <Text style={styles.stickerTitle} onPress={() => onPressTitle()}>
          Animal
        </Text>
        <View style={styles.stickerView}>
          {news.map((neww, i) => {
            return (
              <TouchableOpacity key={i} onPress={() => onPressNew(neww)}>
                <Image style={styles.tinySticker} source={neww.image} />
              </TouchableOpacity>
            );
          })}
        </View>
        <Text style={styles.stickerTitle} onPress={() => onPressTitle()}>
          Landmark
        </Text>
        <View style={styles.stickerView}>
          {news.map((neww, i) => {
            return (
              <TouchableOpacity key={i} onPress={() => onPressNew(neww)}>
                <Image style={styles.tinySticker} source={neww.image} />
              </TouchableOpacity>
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
  },
  submitText: {
    color: "#fff",
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    flex: 1,
    backgroundColor: "rgba(10, 10, 10, 0.7)",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalToggle: {
    marginLeft: 310,
    borderWidth: 3,
    borderColor: "#fff",
    borderRadius: 15,
    alignSelf: "center",
  },
  modalClose: {
    marginBottom: 0,
    marginBottom: 10,
  },
  modalContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
    borderWidth: 3,
    borderColor: "white",
    borderRadius: 20,
    width: 360,
  },
});

export default HomeScreen;
