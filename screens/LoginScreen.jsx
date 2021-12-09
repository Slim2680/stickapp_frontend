import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

function LoginScreen(props) {
  const [username, setUsername] = useState("");
  console.log("username ==", username);

  const [email, setEmail] = useState("");
  console.log("email ==", email);

  const [password, setPassword] = useState("");
  console.log("password ==", password);

  const onSetUsername = (evt) => {
    setUsername(evt);
  };

  const onSetEmail = (evt) => {
    setEmail(evt);
  };

  const onSetPassword = (evt) => {
    setPassword(evt);
  };

  const onPressLogIn = () => {
    console.log("click detecte #login");
    props.navigation.navigate("ProfileScreen");
  };

  const onPressSignUp = () => {
    console.log("click detecte #signup");
    props.navigation.navigate("Sign Up");
  };

  return (
    <View style={styles.container}>
      <Input
        containerStyle={{ marginBottom: 15, width: "70%" }}
        inputStyle={{ marginLeft: 10, color: "white" }}
        placeholder="email@adress.com"
        // errorStyle={{ color: "red" }}
        // errorMessage="Enter a valid email"
        leftIcon={<Icon name="envelope" size={21} color="#ffffff" />}
        onChangeText={(evt) => onSetEmail(evt)}
      />
      <Input
        containerStyle={{ width: "70%" }}
        inputStyle={{ marginLeft: 10, color: "white" }}
        placeholder="password"
        secureTextEntry={true}
        // errorStyle={{ color: "red" }}
        // errorMessage="Password must be at least 6 characters"
        leftIcon={<Icon name="lock" size={27} color="#ffffff" />}
        onChangeText={(evt) => onSetPassword(evt)}
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
        onPress={() => onPressLogIn()}
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
        onPress={() => onPressSignUp()}
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

export default LoginScreen;
