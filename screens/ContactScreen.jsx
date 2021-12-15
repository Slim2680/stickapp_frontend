import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import {
	Card,
	ListItem,
	Avatar,
	SearchBar,
	Header,
} from 'react-native-elements';

function ContactScreen(props) {
	const users = [
		{
			name: 'Frennechesco',
			avatar: require('../assets/pp1.png'),
			conv: 'hey french',
		},
		{
			name: 'Salim',
			avatar: require('../assets/pp2.png'),
			conv: 'hey Sasa',
		},
		{
			name: 'Ilan',
			avatar: require('../assets/pp3.png'),
			conv: 'hey Ilil',
		},
		{
			name: 'Andrea',
			avatar: require('../assets/pp4.png'),
			conv: 'hey Andand',
		},
		{
			name: 'Jenaïc',
			avatar: require('../assets/pp5.png'),
			conv: 'hey Jenjen',
		},
		{
			name: 'Elie',
			avatar: require('../assets/pp6.png'),
			conv: 'hey Elielie',
		},
		{
			name: 'Candice',
			avatar: require('../assets/pp7.png'),
			conv: 'hey Cancan',
		},
		{
			name: 'Christelle',
			avatar: '../assets/pp0.png',
			conv: 'hey Cricri',
		},
		{
			name: 'Christelle',
			avatar: require('../assets/pp0.png'),
			conv: 'hey Cricri',
		},
		{
			name: 'Christelle',
			avatar: require('../assets/pp0.png'),
			conv: 'hey Cricri',
		},
		{
			name: 'Christelle',
			avatar: require('../assets/pp0.png'),
			conv: 'hey Cricri',
		},
		{
			name: 'Christelle',
			avatar: require('../assets/pp0.png'),
			conv: 'hey Cricri',
		},
	];

	const onPressChat = (user) => {
		// console.log('username', user.name);
		// console.log(('§§§§§§§§§§avatar', user.avatar));
		props.navigation.navigate('Chat', {
			userName: user.name,
		});
	};

	return (
		<View style={styles.container}>
			<ScrollView contentContainerStyle={styles.scrollView}>
				<SearchBar
					round
					style={styles.searchBar}
					placeholder='Search'
					// onChangeText={this.updateSearch}
					// value={search}
					containerStyle={styles.searchContainer}
				/>
				{users.map((user, index) => {
					return (
						<ListItem
							key={index}
							bottomDivider
							containerStyle={{ backgroundColor: '#111224', marginBottom: 3 }}
							onPress={() => onPressChat(user)}
						>
							<Avatar
								rounded
								size='medium'
								resizeMode='cover'
								source={user.avatar}
							/>
							<ListItem.Content>
								<ListItem.Title
									style={{
										color: 'white',
										fontSize: 18,
										fontWeight: '500',
										marginBottom: 5,
									}}
								>
									{user.name}
								</ListItem.Title>
								<ListItem.Subtitle style={{ color: '#C0C0C0', fontSize: 15 }}>
									{user.conv}
								</ListItem.Subtitle>
							</ListItem.Content>
						</ListItem>
					);
				})}
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#111224',
	},
	searchBar: {
		borderBottomWidth: 0,
	},
	scrollView: {
		backgroundColor: '#111224',
	},
	searchContainer: {
		backgroundColor: '#111224',
		borderBottomWidth: 0,
	},
});

export default ContactScreen;
