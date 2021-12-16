import React from "react";
import { Image, StyleSheet } from 'react-native';

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
                backgroundColor: '#97A1FF',
                image: <Image source={require('../assets/stickapp_logo3.png')} />,
        
                },

            {
            backgroundColor: '#fff',
            image: <Image source={require('../assets/undraw_Social_networking_re_i1ex.png')} />,
            title: 'Use stickers in your messages... ',
            subtitle: '',
            },

            {
                backgroundColor: '#fff',
                image: <Image source={require('../assets/undraw_Savings_re_eq4w.png')} />,
                title: 'Collect points for using them...',
                
            },

            {
                backgroundColor: '#fff', 
                image: <Image source={require('../assets/undraw_discount_d4bd.png')} />,
                title: 'Convert your points into discounts...',
                
            },

            {
                backgroundColor: '#fff',
                image: <Image source={require('../assets/undraw_Online_shopping_re_k1sv.png')} />,
                title: 'Use your discounts to shop online... ',
                
            }, 

            {
                backgroundColor: '#fff',
                image: <Image source={require('../assets/undraw_Winners_re_wr1l.png')} />,
                title: 'You text, you collect, you shop!!!',
                
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
  