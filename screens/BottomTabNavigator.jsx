import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import CashBackScreen from './CashBackScreen';
import HomeScreen from './HomeScreen';
import ContactScreen from './ContactScreen';
import LoginScreen from './LoginScreen';
import ChatScreen from './ChatScreen';
import SignUpScreen from './SignUpScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-elements';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

function BottomTabNavigator(props) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;
          if (route.name === 'CashBack') {
            iconName = 'money-bill-alt';
          } else if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Contact') {
            iconName = 'comment';
          } else if (route.name === 'Login') {
            iconName = 'user';
          }
          return <FontAwesome5 name={iconName} size={24} color={color} />;
        },
        tabBarActiveTintColor: '#97A1FF',
        tabBarInactiveTintColor: '#FFFFFF',
        tabBarStyle: {
          backgroundColor: '#111224',
          height: 95,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="CashBack" component={CashBackScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Contact" component={StackChat} />
      <Tab.Screen name="Login" component={StackSignUp} />
    </Tab.Navigator>
  );
}

function StackChat() {
  return (
    <Stack.Navigator component={ChatScreen}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: '#111224',
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackTitleVisible: false,
          headerLeft: null,
        }}
        name="Contacts"
        component={ContactScreen}
      />
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={({ route }) => {
          console.log('route', route);
          return {
            title: route.params.userName,
            Pp: route.params.userPp,
            headerStyle: {
              backgroundColor: '#111224',
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerBackTitleVisible: false,
          };
        }}
      />
    </Stack.Navigator>
  );
}

function StackSignUp() {
  return (
    <Stack.Navigator component={LoginScreen}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: '#111224',
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackTitleVisible: false,
          headerLeft: null,
        }}
        name="Log in"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: '#111224',
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackTitleVisible: false,
        }}
        name="Sign Up"
        component={SignUpScreen}
      />
    </Stack.Navigator>
  );
}

export default BottomTabNavigator;
