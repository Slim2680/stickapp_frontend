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
import { Header, searchBar, Avatar, Tab, TabView } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialIcons";

function ProfileScreen(props) {
  const user = {
    avatar: require("../assets/pp0.png"),
    name: "Ilan",
  };

  const [tabIndex, setTabIndex] = useState(0);

  const onChangeTab = (index) => {
    console.log("Clickdetected", index);
    setTabIndex(index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.settingIcon}>
        <MaterialIcons name="settings" size={35} color="white" />
      </View>

      <View>
        <Image style={styles.pp} source={user.avatar} />
      </View>

      <View>
        <Text style={styles.text}>{user.name}</Text>
      </View>

      <View
        style={{
          borderWidth: 0.25,
          borderColor: "#d1d1d3",
          borderRadius: 50,
          marginTop: 18,
        }}
      />

      <View>
        <Text style={styles.title}>Rewards CashBack</Text>
      </View>

      <View>
        <Tab value={tabIndex} onChange={(index) => onChangeTab(index)}>
          <Tab.Item title="Complete" />
          <Tab.Item title="Pending" />
        </Tab>

        <TabView value={tabIndex}>
          <TabView.Item
            style={{ backgroundColor: "red", width: "100%", height: 100 }}
          >
            <Text style={styles.text} h1>
              Recent
            </Text>
          </TabView.Item>
          <TabView.Item
            style={{ backgroundColor: "blue", width: "100%", height: 100 }}
          >
            <Text h1>Favorite</Text>
          </TabView.Item>
        </TabView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111224",
    // alignItems: "center",
    // justifyContent: "center",
  },
  pp: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 15,
    borderWidth: 1,
    borderColor: "#fff",
    alignSelf: "center",
  },
  text: {
    color: "white",
    alignSelf: "center",
    marginTop: 15,
    fontSize: 25,
  },
  title: {
    color: "white",
    alignSelf: "center",
    marginTop: 15,
    fontSize: 30,
  },
  settingIcon: {
    justifyContent: "flex-end",
    marginTop: 10,
    marginRight: 10,
    alignItems: "flex-end",
  },
});

export default ProfileScreen;
