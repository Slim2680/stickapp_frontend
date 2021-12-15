import React, { useState, useCallback, useEffect } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	ScrollView,
	TouchableOpacity,
} from 'react-native';
import { Button } from 'react-native-elements';
import { GiftedChat, Send, Composer, Actions } from 'react-native-gifted-chat';
import socketIOClient from 'socket.io-client';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';

var socket = socketIOClient('http://10.3.11.7:3000');

function ChatScreen(props) {
	const [messages, setMessages] = useState([]);
	const [images, setImages] = useState([]);
	const [listMessages, setListMessages] = useState([]);
	const [iconPressed, setIconPressed] = useState(false);
	const [accessoryHeight, setAccessoryHeight] = useState(0);
	const [favorites, setFavorites] = useState([]);
	console.log('////////////SETMESSAGES', messages);
	console.log('---iconPressed', iconPressed);
	console.log('---accessoryHeight', accessoryHeight);
	console.log('/////favorites', favorites);
	console.log('///chatscreen token = ', props.token);

	useEffect(() => {
		async function loadData() {
			const data = await fetch(
				`http://10.3.11.10:3000/users/stickers/show-favorites?token=${props.token}`
			);
			const body = await data.json();
			console.log('---body', body);
			setFavorites(body.stickers);
		}
		loadData();
	}, []);

	useEffect(() => {
		socket.on('sendMessageToAll', (newMessageData) => {
			setListMessages([...listMessages, newMessageData]);
		});
	}, [listMessages]);

	const onPressKeyboard = (text) => {
		console.log('ONPRESSKEYBOARD', text);
	};

	const onPressIcon = () => {
		// console.log('press detected #icon');
		iconPressed === false ? setIconPressed(true) : setIconPressed(false);
	};

	const onSend = useCallback((messages = []) => {
		console.log('MESSAGES', messages[0].text);
		socket.emit('sendMessages', messages[0].text);
		console.log('---------onSend');
		setMessages((previousMessages) =>
			GiftedChat.append(previousMessages, messages)
		);
	}, []);

	const onPressSticker = (image) => {
		console.log('press detected #sticker');
		setAccessoryHeight(0);
		// setMessages([{ image: image }, ...messages]);
		setMessages((previousMessages) =>
			GiftedChat.append(previousMessages, [
				{
					image:
						'https://user-images.githubusercontent.com/20162106/35378322-f43394a0-01e4-11e8-84b9-bc41be7bad02.jpg',
				},
				...messages,
			])
		);
	};

	const renderActions = () => {
		return (
			<TouchableOpacity onPress={() => onPressIcon()}>
				<MaterialCommunityIcons
					style={styles.note}
					name='sticker-emoji'
					size={31}
					color='#4e74ff'
				/>
			</TouchableOpacity>
		);
	};

	const renderAccessoryBar = () => {
		if (iconPressed === true) {
			setAccessoryHeight(115);
			return (
				<ScrollView
					horizontal
					showsHorizontalScrollIndicator={false}
					contentContainerStyle={styles.accessory}
				>
					{favorites.map((favorite, i) => {
						console.log(
							'🛑/🛑/🛑/🛑/🛑/🛑/🛑/🛑/🛑/🛑/🛑/favorite.url',
							favorite.url
						);
						return (
							<TouchableOpacity
								key={i}
								onPress={() => onPressSticker(require('../assets/funny3.jpg'))}
							>
								<Image
									style={styles.stickers}
									source={{ uri: favorite.url }}
								></Image>
							</TouchableOpacity>
						);
					})}
					{/* <Button title='test2'></Button> */}
				</ScrollView>
			);
		} else {
			setAccessoryHeight(0);
			return;
		}
	};

	return (
		<GiftedChat
			onInputTextChanged={(text) => onPressKeyboard(text)}
			messages={messages}
			onSend={(messages) => onSend(messages)}
			renderActions={() => renderActions()}
			renderAccessory={() => renderAccessoryBar()}
			accessoryStyle={{ height: accessoryHeight }}
			bottomOffset={135}
			placeholder='Send a message ...'
			user={{
				_id: 1,
			}}
		/>
	);
}

const styles = StyleSheet.create({
	accessory: {
		flexDirection: 'row',
		backgroundColor: '#F0F0F0',
	},
	note: {
		margin: 11,
	},
	title: {
		marginLeft: 5,
		fontSize: 15,
	},
	stickers: {
		height: 110,
		width: 140,
		borderWidth: 1,
		borderColor: '#A0A0A0',
		borderRadius: 15,
		marginTop: 4,
		marginBottom: 10,
		marginLeft: 5,
		marginRight: 5,
	},
});

function mapStateToProps(state) {
	return { token: state.token };
}

export default connect(mapStateToProps, null)(ChatScreen);
