import React, { useState } from 'react';
import { View, Text, StyleSheet } from "react-native";

function AccountScreen(props) {

    return (
        <View style={styles.container}>
            <Text style={{color: 'white'}}
            >Account Screen</Text>
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

export default AccountScreen;