import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import BottomTabNavigator from './screens/BottomTabNavigator';
const Stack = createStackNavigator();

import token from './reducers/token';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
const store = createStore(combineReducers({ token }));

function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator screenOptions={{ headerShown: false }}>
					<Stack.Screen name='SplashScreen' component={SplashScreen} />
					<Stack.Screen
						name='BottomTabNavigator'
						component={BottomTabNavigator}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	);
}

export default App;
