import React, { useState } from 'react';
import { View, Text, StyleSheet } from "react-native";
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

function SplashScreen(props) {


    const onPressButton = () => {
        props.navigation.navigate('BottomTabNavigator');
    }

    return (
        <View style={styles.container}>

            <Text style={{
                color: 'white'
            }}
            >Splash Screen</Text>

            <Button
                icon={
                    <Icon
                    name="arrow-right"
                    size={20}
                    color="white"
                    />
                }

                title="  Go to Home"
                type="solid"
                
                onPress={() => onPressButton()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "#111224"
    }
  });

export default SplashScreen;