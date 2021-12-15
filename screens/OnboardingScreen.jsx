import React from "react";
import { View, Text, Button, Image, StyleSheet } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({navigation}) => {
    const onPressDone = () => {
        navigation.navigate("BottomTabNavigator", { screen: '  '})
    };

    return (
        <Onboarding
            onSkip={onPressDone}
            onDone={onPressDone}
        pages={[
            {
            backgroundColor: '#fff',
            image: <Image source={require('../assets/undraw_Social_networking_re_i1ex.png')} />,
            title: 'Landing 1',
            subtitle: 'Done with React Native Onboarding Swiper',
            },

            {
                backgroundColor: '#fff',
                image: <Image source={require('../assets/undraw_Savings_re_eq4w.png')} />,
                title: 'Landing 3',
                subtitle: 'Done with React Native Onboarding Swiper',
            },

            {
                backgroundColor: '#fff', 
                image: <Image source={require('../assets/undraw_discount_d4bd.png')} />,
                title: 'Landing 4',
                subtitle: 'Done with React Native Onboarding Swiper',
            },

            {
                backgroundColor: '#fff',
                image: <Image source={require('../assets/undraw_Online_shopping_re_k1sv.png')} />,
                title: 'Landing 2',
                subtitle: 'Done with React Native Onboarding Swiper',
            }, 

            {
                backgroundColor: '#fff',
                image: <Image source={require('../assets/undraw_Winners_re_wr1l.png')} />,
                title: 'Landing 2',
                subtitle: 'Done with React Native Onboarding Swiper',
            }, 
  ]}
/>
    );
};

export default OnboardingScreen; 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  