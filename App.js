import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 
import OnboardingScreen from './screens/OnboardingScreen';
import BottomTabNavigator from './screens/BottomTabNavigator';
const Stack = createStackNavigator();
import Toast, { BaseToast } from 'react-native-toast-message';

import token from './reducers/token';
import count from './reducers/count';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
const store = createStore(combineReducers({ token, count }));


function App() {
	const toastConfig = {
		success: (props) => (
			<BaseToast
				{...props}
				style={{
					marginTop: 15,
					height: 85,
					width: 340,
					borderLeftColor: '#97A1FF',
				}}
				contentContainerStyle={{
					paddingHorizontal: 15,
				}}
				text1Style={{
					fontSize: 18,
					fontWeight: '400',
				}}
				text2Style={{
					fontSize: 13,
					fontWeight: '400',
				}}
			/>
		),
	};

	return (
		<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator screenOptions={{ headerShown: false }}>
					<Stack.Screen name='SplashScreen' component={OnboardingScreen} />
					<Stack.Screen
						name='BottomTabNavigator'
						component={BottomTabNavigator}
					/>
				</Stack.Navigator>
				<Toast config={toastConfig} />
			</NavigationContainer>
		</Provider>
	);
}

export default App;
