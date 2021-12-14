import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome5 } from '@expo/vector-icons';
import CashBackScreen from './CashBackScreen';
import HomeScreen from './HomeScreen';
import ContactScreen from './ContactScreen';
import LoginScreen from './LoginScreen';
import ChatScreen from './ChatScreen';
import SignUpScreen from './SignUpScreen';
import ProfileScreen from './ProfileScreen';
import ParametersScreen from './ParametersScreen';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

function BottomTabNavigator(props) {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ color }) => {
					let iconName;
					if (route.name === ' ') {
						iconName = 'money-bill-alt';
					} else if (route.name === '  ') {
						iconName = 'home';
					} else if (route.name === '   ') {
						iconName = 'comment';
					} else if (route.name === '    ') {
						iconName = 'user';
					}
					return <FontAwesome5 name={iconName} size={30} color={color} />;
				},
				tabBarActiveTintColor: '#97A1FF',
				tabBarInactiveTintColor: '#FFFFFF',
				tabBarStyle: {
					backgroundColor: '#111224',
					height: 90,
					paddingTop: 15,
					marginTop: 2,
				},
				headerShown: false,
			})}
		>
			<Tab.Screen name=' ' component={CashBackScreen} />
			<Tab.Screen name='  ' component={HomeScreen} />
			<Tab.Screen name='   ' component={StackChat} />
			<Tab.Screen name='    ' component={StackSignUp} />
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
				name='Contacts'
				component={ContactScreen}
			/>
			<Stack.Screen
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
				name='Chat'
				component={ChatScreen}
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
				name='Log in'
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
				name='Sign Up'
				component={SignUpScreen}
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
				name='Profile Page'
				component={ProfileScreen}
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
				name='Parameters  ⚙️'
				component={ParametersScreen}
			/>
		</Stack.Navigator>
	);
}

// function StackParameters() {
//   return (
//     <Stack.Navigator component={LoginScreen}>
//       <Stack.Screen
//         options={{
//           headerStyle: {
//             backgroundColor: '#111224',
//           },
//           headerTintColor: '#ffffff',
//           headerTitleStyle: {
//             fontWeight: 'bold',
//           },
//           headerBackTitleVisible: false,
//           headerLeft: null,
//         }}
//         name="Parameters"
//         component={ParametersScreen}
//       />
//     </Stack.Navigator>
//   );
// }

export default BottomTabNavigator;
