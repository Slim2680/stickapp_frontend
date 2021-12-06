import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

function MessageScreen(props) {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>Message Screen</Text>
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

export default MessageScreen;
