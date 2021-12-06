import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

function AccountScreen(props) {
  const [pseudo, setPseudo] = useState("");
  console.log("pseudo ==", pseudo);

  const onSetPseudo = (evt) => {
    setPseudo(evt);
  };

  return (
    <View style={styles.container}>
      <Input
        containerStyle={{ marginBottom: 15, width: "70%" }}
        inputStyle={{ marginLeft: 10, color: "white" }}
        placeholder="email@adress.com"
        leftIcon={<Icon name="envelope" size={21} color="#ffffff" />}
        onChangeText={(evt) => onSetPseudo(evt)}
      />
      <Input
        containerStyle={{ width: "70%" }}
        inputStyle={{ marginLeft: 10, color: "white" }}
        placeholder="password"
        leftIcon={<Icon name="lock" size={27} color="#ffffff" />}
        onChangeText={(evt) => onSetPseudo(evt)}
      />
      <Button
        containerStyle={{
          marginTop: 50,
          height: 40,
          width: 200,
        }}
        buttonStyle={{
          backgroundColor: "rgba(78, 116, 255, 1)",
          borderRadius: 3,
        }}
        title="Login           "
        type="solid"
        onPress={() => onPressButton()}
      />
      <Text style={styles.or}>——— Or ———</Text>
      <Button
        containerStyle={{
          marginTop: 50,
          height: 40,
          width: 200,
        }}
        buttonStyle={{
          backgroundColor: "rgba(78, 116, 255, 1)",
          borderRadius: 3,
        }}
        icon={<Icon name="arrow-right" size={20} color="#ffffff" />}
        title="Sign Up           "
        type="solid"
        onPress={() => onPressButton()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#111224",
  },
  or: {
    marginTop: 50,
    fontSize: 20,
    color: "white",
  },
});

export default AccountScreen;
