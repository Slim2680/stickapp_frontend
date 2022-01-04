import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';

function LoginScreen(props) {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [userExists, setUserExists] = useState(false);
	const [errorsLogin, setErrorsLogin] = useState([]);
	const [errEmailLogin, setErrEmailLogin] = useState('');
	const [errPasswordLogin, setErrPasswordLogin] = useState('');
	// console.log('username ==', username);
	// console.log('email ==', email);
	// console.log('password ==', password);
	// console.log('/////////////error login', errorsLogin);
	// console.log('=======>err Email', errEmailLogin);
	// console.log('=======>err Password', errPasswordLogin);

	const onSetUsername = (evt) => {
		setUsername(evt);
	};

	const onSetEmail = (evt) => {
		setEmail(evt);
	};

	const onSetPassword = (evt) => {
		setPassword(evt);
	};

	const onPressLogIn = async (username) => {
		console.log('click detecte #login');
		setErrEmailLogin('');
		setErrPasswordLogin('');
		const data = await fetch('https://stickapp-project.herokuapp.com/log-in', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: `email=${email}&password=${password}`,
		});
		const body = await data.json();
		// console.log('/////body', body);
		console.log('-------usernameeeee', body.user.username);

		if (body.login == true) {
			// props.addToken(body.token);
			setUserExists(true);
			props.addToken(body.token);
			props.navigation.navigate('Profile Page', {
				userName: body.user.username,
			});
		} else {
			setErrorsLogin(body.error);
		}

		if (body.error.includes('wrong email')) {
			setErrEmailLogin(body.error);
		} else {
			setErrPasswordLogin(body.error);
		}
	};

	const onPressSignUp = () => {
		console.log('click detecte #signup');
		props.navigation.navigate('Sign Up');
	};

	return (
		<View style={styles.container}>
			<Input
				containerStyle={{ marginBottom: 15, width: '70%' }}
				inputStyle={{ marginLeft: 10, color: 'white' }}
				placeholder='email@adress.com'
				autoCorrect={false}
				autoCapitalize='none'
				errorStyle={{ color: 'red' }}
				// errorMessage="Enter a valid email"
				errorMessage={errEmailLogin}
				leftIcon={<Icon name='envelope' size={21} color='#ffffff' />}
				onChangeText={(evt) => onSetEmail(evt)}
			/>
			<Input
				containerStyle={{ width: '70%' }}
				inputStyle={{ marginLeft: 10, color: 'white' }}
				placeholder='password'
				autoCorrect={false}
				secureTextEntry={true}
				errorStyle={{ color: 'red' }}
				// errorMessage="Password must be at least 6 characters"
				errorMessage={errPasswordLogin}
				leftIcon={<Icon name='lock' size={27} color='#ffffff' />}
				onChangeText={(evt) => onSetPassword(evt)}
			/>
			<Button
				containerStyle={{
					marginTop: 50,
					height: 40,
					width: 200,
				}}
				buttonStyle={{
					backgroundColor: 'rgba(78, 116, 255, 1)',
					borderRadius: 3,
				}}
				title='Login           '
				type='solid'
				onPress={() => onPressLogIn()}
			/>
			<Text style={styles.or}>——— Or ———</Text>
			<Button
				containerStyle={{
					marginTop: 50,
					height: 40,
					width: 200,
				}}
				buttonStyle={{
					backgroundColor: 'rgba(78, 116, 255, 1)',
					borderRadius: 3,
				}}
				
				title='Sign Up           '
				type='solid'
				onPress={() => onPressSignUp()}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#111224',
	},
	or: {
		marginTop: 50,
		fontSize: 20,
		color: 'white',
	},
});

function mapDispatchToProps(dispatch) {
	return {
		addToken: function (token) {
			dispatch({ type: 'addToken', token: token });
		},
	};
}

export default connect(null, mapDispatchToProps)(LoginScreen);
