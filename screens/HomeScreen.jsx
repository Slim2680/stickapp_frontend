import React, { useState } from 'react';
import { View, Text, StyleSheet } from "react-native";
import { color } from 'react-native-reanimated';

function HomeScreen(props) {

    return (
        <View style={styles.container}>
            <Text style={{color: 'white'}}
            >Home Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#111224'
    },
  });

export default HomeScreen;