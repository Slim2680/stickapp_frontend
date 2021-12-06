import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

function ChatScreen(props) {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>Chat Screen</Text>
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
});

export default ChatScreen;
