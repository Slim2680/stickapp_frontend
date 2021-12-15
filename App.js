import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 
import OnboardingScreen from './screens/OnboardingScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();


function App () {
	return (
			<NavigationContainer>
				<Stack.Navigator screenOptions={{ headerShown: false }}>
					<Stack.Screen name='Landing' component={OnboardingScreen} />
					<Stack.Screen name='Home'component={HomeScreen}/>
				</Stack.Navigator>
			</NavigationContainer>
	);
}

export default App;
