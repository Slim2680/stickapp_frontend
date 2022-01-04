import React, { useState, useEffect } from 'react';
import Toast from 'react-native-toast-message';
import {
	View,
	Text,
	StyleSheet,
	TouchableHighlight,
	ScrollView,
	Image,
	Modal,
	TouchableOpacity,
} from 'react-native';
import { Header, Button, Badge } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';

function HomeScreen(props) {
	const [modalVisible, setModalVisible] = useState(false);
	const [modalImage, setModalImage] = useState('');
	const [liked, setLiked] = useState(false);
	const [newCategory, setNewCategory] = useState([]);
	const [stickerId, setStickerId] = useState('');
	const [popularCategory, setPopularCategory] = useState([]);
	const [funnyCategory, setFunnyCategory] = useState([]);
	const [foodCategory, setFoodCategory] = useState([]);
	const [sportCategory, setSportCategory] = useState([]);
	const [animalCategory, setAnimalCategory] = useState([]);
	const [landmarkCategory, setLandmarkCategory] = useState([]);
	// console.log('/////modalVisible', modalVisible);
	// console.log('/////modalImage', modalImage);
	// console.log('/////liked', liked);
	console.log('///homescreen token = ', props.token);

	const categories = [
		'food',
		'tech',
		'beauty',
		'meme',
		'love',
		'sport',
		'travel',
		'luxury',
		'cars',
		'holiday',
		'gamer',
		'anime',
		'logo',
		'food',
		'tech',
		'beauty',
		'meme',
		'love',
		'sport',
		'travel',
		'luxury',
		'cars',
		'holiday',
		'gamer',
		'anime',
		'logo',
	];

	useEffect(() => {
		async function loadData() {
			const rawNew = await fetch('https://stickapp-project.herokuapp.com/categories/new');
			const responseNew = await rawNew.json();
			setNewCategory(responseNew.data);
		}
		loadData();
	}, []);

	useEffect(() => {
		async function loadData() {
			const rawPopular = await fetch(
				'https://stickapp-project.herokuapp.com/categories/popular'
			);
			const responsePopular = await rawPopular.json();
			setPopularCategory(responsePopular.data);
		}
		loadData();
	}, []);

	useEffect(() => {
		async function loadData() {
			const rawFunny = await fetch('https://stickapp-project.herokuapp.com/categories/funny');
			const responseFunny = await rawFunny.json();
			setFunnyCategory(responseFunny.data);
		}
		loadData();
	}, []);

	useEffect(() => {
		async function loadData() {
			const rawFood = await fetch('https://stickapp-project.herokuapp.com/categories/food');
			const responseFood = await rawFood.json();
			setFoodCategory(responseFood.data);
		}
		loadData();
	}, []);

	useEffect(() => {
		async function loadData() {
			const rawSport = await fetch('https://stickapp-project.herokuapp.com/categories/sports');
			const responseSport = await rawSport.json();
			setSportCategory(responseSport.data);
		}
		loadData();
	}, []);

	useEffect(() => {
		async function loadData() {
			const rawAnimal = await fetch(
				'https://stickapp-project.herokuapp.com:3000/categories/animals'
			);
			const responseAnimal = await rawAnimal.json();
			setAnimalCategory(responseAnimal.data);
		}
		loadData();
	}, []);

	useEffect(() => {
		async function loadData() {
			const rawLandmark = await fetch(
				'https://stickapp-project.herokuapp.com/categories/landmark'
			);
			const responseLandmark = await rawLandmark.json();
			setLandmarkCategory(responseLandmark.data);
		}
		loadData();
	}, []);

	const showToast = () => {
		Toast.show({
			type: 'success',
			text1: 'Sticker added to favorites! 💟',
			text2: 'You can now find it on the chat page',
		});
	};

	let color;
	let icon;
	if (liked === true) {
		color = 'red';
		icon = 'favorite';
	} else {
		color = '#ffffff';
		icon = 'favorite-border';
	}

	const onPressCategory = () => {
		console.log('---press detected #category');
	};

	const onPressTitle = () => {
		console.log('---press detected #title');
	};

	const onPressSticker = (sticker) => {
		setModalVisible(true);
		setModalImage(sticker.url);
		setStickerId(sticker._id);
		console.log('--sticker', sticker);
	};

	const onPressClose = () => {
		console.log('---press detected #');
		setModalVisible(!modalVisible);
	};

	const onPressFavorite = async () => {
		console.log('---press detected #favorite');
		// liked === false ? setLiked(true) : setLiked(false);
		setLiked(liked === false);
		showToast();
		setModalVisible(!modalVisible);

		if (liked) {
			const data = await fetch(
				'https://stickapp-project.herokuapp.com/users/stickers/add-to-favorite',
				{
					method: 'POST',
					headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
					body: `stickerId=${stickerId}&token=${props.token}'}`,
				}
			);
			const body = await data.json();
		} else {
			const data = await fetch(
				'https://stickapp-project.herokuapp.com/users/stickers/delete-from-favorite',
				{
					method: 'POST',
					headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
					body: `stickerId=${stickerId}&token=${props.token}`,
				}
			);
			const body = await data.json();
		}
	};

	const onPressCopy = () => {
		console.log('---press detected #copy');
	};

	const onPressVisit = () => {
		console.log('---press detected #visit');
	};

	const onPressView = () => {
		console.log('---press detected #view');
		setModalVisible(!modalVisible);
	};

	return (
		<View style={styles.container}>
			<Header
				statusBarProps={{ barStyle: 'light-content' }}
				placement='left'
				backgroundColor='#111224'
				leftComponent={{
					text: 'StickApp 🦄',
					style: {
						color: '#ffffff',
						fontWeight: '600',
						fontSize: 20,
						marginBottom: 15,
					},
				}}
				rightComponent={{ icon: 'search', color: '#fff' }}
			/>
			<Modal visible={modalVisible} animationType='slide' transparent={true}>
				<TouchableHighlight
					style={styles.modalView}
					underlayColor={'rgba(10, 10, 10, 0.8)'}
					onPress={() => onPressView()}
				>
					<View
						style={{
							marginTop: 70,
							marginBottom: 100,
						}}
					>
						<MaterialIcons
							name='close'
							size={24}
							style={{ ...styles.modalToggle, ...styles.modalClose }}
							color={'#fff'}
							onPress={() => onPressClose()}
						/>
						<Image style={styles.modalContent} source={{ uri: modalImage }} />
						<Button
							buttonStyle={{
								backgroundColor: 'rgba(78, 116, 255, 1)',
								borderRadius: 8,
								borderWidth: 1,
								borderColor: '#fff',
								marginBottom: 7,
							}}
							title='   Add to favorite'
							type='solid'
							onPress={() => onPressFavorite()}
						/>
						<Button
							buttonStyle={{
								backgroundColor: 'rgba(78, 116, 255, 1)',
								borderRadius: 8,
								borderWidth: 1,
								borderColor: '#fff',
								marginBottom: 7,
							}}
							icon={
								<MaterialIcons name='content-copy' size={20} color='#ffffff' />
							}
							title='Copy                   '
							type='solid'
							onPress={() => onPressCopy()}
						/>
						<Button
							buttonStyle={{
								backgroundColor: 'rgba(78, 116, 255, 1)',
								borderRadius: 8,
								borderWidth: 1,
								borderColor: '#fff',
							}}
							icon={<MaterialIcons name='logout' size={20} color='#ffffff' />}
							title='Visit                    '
							type='solid'
							onPress={() => onPressVisit()}
						/>
					</View>
				</TouchableHighlight>
			</Modal>
			<ScrollView
				showsVerticalScrollIndicator={false}
				style={styles.stickerScroll}
			>
				<ScrollView
					horizontal
					showsHorizontalScrollIndicator={false}
					style={styles.horizontalScroll}
				>
					{categories.map((category, index) => {
						return (
							<TouchableOpacity
								key={index}
								onPress={() => onPressCategory()}
								underlayColor='transparent'
							>
								<View style={styles.submit}>
									<Text style={styles.submitText}>{category}</Text>
								</View>
							</TouchableOpacity>
						);
					})}
				</ScrollView>
				<Text style={styles.stickerTitle} onPress={() => onPressTitle()}>
					New
				</Text>
				<ScrollView
					horizontal
					showsHorizontalScrollIndicator={false}
					style={styles.stickerView}
				>
					{newCategory.map((neww, i) => {
						return (
							<TouchableOpacity key={i} onPress={() => onPressSticker(neww)}>
								<Image style={styles.tinySticker} source={{ uri: neww.url }} />
							</TouchableOpacity>
						);
					})}
				</ScrollView>
				<Text style={styles.stickerTitle} onPress={() => onPressTitle()}>
					Popular
				</Text>
				<ScrollView
					horizontal
					showsHorizontalScrollIndicator={false}
					style={styles.stickerView}
				>
					{popularCategory.map((popular, i) => {
						return (
							<TouchableOpacity key={i} onPress={() => onPressSticker(popular)}>
								<Image
									style={styles.tinySticker}
									source={{ uri: popular.url }}
								/>
							</TouchableOpacity>
						);
					})}
				</ScrollView>
				<Text style={styles.stickerTitle} onPress={() => onPressTitle()}>
					Funny
				</Text>
				<ScrollView
					horizontal
					showsHorizontalScrollIndicator={false}
					style={styles.stickerView}
				>
					{funnyCategory.map((funny, i) => {
						return (
							<TouchableOpacity key={i} onPress={() => onPressSticker(funny)}>
								<Image style={styles.tinySticker} source={{ uri: funny.url }} />
							</TouchableOpacity>
						);
					})}
				</ScrollView>
				<Text style={styles.stickerTitle} onPress={() => onPressTitle()}>
					Food
				</Text>
				<ScrollView
					horizontal
					showsHorizontalScrollIndicator={false}
					style={styles.stickerView}
				>
					{foodCategory.map((food, i) => {
						return (
							<TouchableOpacity key={i} onPress={() => onPressSticker(food)}>
								<Image style={styles.tinySticker} source={{ uri: food.url }} />
							</TouchableOpacity>
						);
					})}
				</ScrollView>
				<Text style={styles.stickerTitle} onPress={() => onPressTitle()}>
					Sports
				</Text>
				<ScrollView
					horizontal
					showsHorizontalScrollIndicator={false}
					style={styles.stickerView}
				>
					{sportCategory.map((sport, i) => {
						return (
							<TouchableOpacity key={i} onPress={() => onPressSticker(sports)}>
								<Image style={styles.tinySticker} source={{ uri: sport.url }} />
							</TouchableOpacity>
						);
					})}
				</ScrollView>
				<Text style={styles.stickerTitle} onPress={() => onPressTitle()}>
					Animal
				</Text>
				<ScrollView
					horizontal
					showsHorizontalScrollIndicator={false}
					style={styles.stickerView}
				>
					{animalCategory.map((animal, i) => {
						return (
							<TouchableOpacity key={i} onPress={() => onPressSticker(animal)}>
								<Image
									style={styles.tinySticker}
									source={{ uri: animal.url }}
								/>
							</TouchableOpacity>
						);
					})}
				</ScrollView>
				<Text style={styles.stickerTitle} onPress={() => onPressTitle()}>
					Landmark
				</Text>
				<ScrollView
					horizontal
					showsHorizontalScrollIndicator={false}
					style={styles.stickerView}
				>
					{landmarkCategory.map((landmark, i) => {
						return (
							<TouchableOpacity
								key={i}
								onPress={() => onPressSticker(landmark)}
							>
								<Image
									style={styles.tinySticker}
									source={{ uri: landmark.url }}
								/>
							</TouchableOpacity>
						);
					})}
				</ScrollView>
			</ScrollView>
		</View>
	);
}



const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#111224',
	},
	 submit: {
		backgroundColor: '#71678D',
		borderRadius: 30,
		borderWidth: 1.5,
		borderColor: '#867e9f',
		marginTop: 5,
		marginHorizontal: 13,
		marginLeft: 0,
		justifyContent: 'space-between',
		width: 70,
		height: 60,
	},
	submitText: {
		color: '#fff',
		fontSize: 15,
		marginRight: 10,
		marginLeft: 10,
		alignSelf: 'center',
		marginTop: 20,
		paddingBottom: 20,
	},
	horizontalScroll: {
		marginBottom: 15,
	},
	stickerView: {
		flexDirection: 'row',
	},
	stickerScroll: {
		marginTop: 15,
		margin: 8,
	},
	stickerTitle: {
		color: 'white',
		marginLeft: 2,
		marginBottom: 8,
		fontSize: 21,
		fontWeight: '500',
	},
	tinySticker: {
		width: 77,
		height: 78,
		borderRadius: 5,
		marginBottom: 30,
		marginRight: 14,
		borderWidth: 1,
		borderColor: '#fff',
	},
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 22,
	},
	modalView: {
		flex: 1,
		backgroundColor: 'rgba(10, 10, 10, 0.7)',
		borderRadius: 20,
		padding: 10,
		alignItems: 'center',
		justifyContent: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	modalToggle: {
		marginLeft: 320,
		borderWidth: 3,
		borderColor: '#fff',
		borderRadius: 15,
		alignSelf: 'center',
	},
	modalClose: {
		marginBottom: 0,
		marginBottom: 10,
	},
	modalContent: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 25,
		borderWidth: 3,
		borderColor: 'white',
		borderRadius: 20,
		width: 360,
	},
});

function mapStateToProps(state) {
	return { token: state.token };
}

export default connect(mapStateToProps, null)(HomeScreen);
