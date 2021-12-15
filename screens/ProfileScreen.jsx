import React, { useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableHighlight,
	ScrollView,
	Image,
	Modal,
	TouchableOpacity,
	Button,
} from 'react-native';
import { Header, searchBar, Avatar, Tab, TabView } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';

function ProfileScreen(props) {
	const [tabIndex, setTabIndex] = useState(0);

	const user = {
		avatar: require('../assets/pp0.png'),
		name: props.route.params.userName,
	};

	const onChangeTab = (index) => {
		console.log('press detected #tab', index);
		setTabIndex(index);
	};

	const onPressParams = (user) => {
		console.log('press detected #params');
		props.navigation.navigate('Parameters  ⚙️', { user });
	};

	return (
		<View style={styles.container}>
			<View style={styles.settingIcon}>
				<TouchableOpacity onPress={() => onPressParams(user)}>
					<MaterialIcons name='settings' size={35} color='white' />
				</TouchableOpacity>
			</View>

			<View>
				<Image style={styles.pp} source={user.avatar} />
			</View>

			<View>
				<Text style={styles.text}>{user.name}</Text>
			</View>

			<View
				style={{
					borderWidth: 0.25,
					borderColor: '#d1d1d3',
					borderRadius: 50,
					marginTop: 18,
				}}
			/>

			<View>
				<Text style={styles.title}>Rewards CashBack</Text>
			</View>

			<View>
				<Tab value={tabIndex} onChange={(index) => onChangeTab(index)}>
					<Tab.Item title='Completed' />
					<Tab.Item title='Pending' />
				</Tab>

				<TabView value={tabIndex}>
					<TabView.Item
						style={{ backgroundColor: '#29233A', width: '100%', height: 310 }}
					>
						<View>
							<Image
								style={styles.coin}
								source={require('../assets/coin.png')}
							/>

							<Text style={styles.text}>No CashBack Transaction</Text>
							{/* <Text
                style={{ fontSize: 13, color: "white", textAlign: "center" }}
              >
                We're processing your paste transaction to find those eligible
                for cashback. They'll appear on this page soon
              </Text> */}
						</View>
					</TabView.Item>
					<TabView.Item
						style={{ backgroundColor: '#29233A', width: '100%', height: 310 }}
					>
						<View>
							<Image
								style={styles.coin}
								source={require('../assets/transaction.png')}
							/>

							<Text style={styles.text}>No pending CashBack</Text>
						</View>
					</TabView.Item>
				</TabView>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#111224',
	},
	pp: {
		width: 100,
		height: 100,
		borderRadius: 50,
		borderWidth: 1,
		borderColor: '#fff',
		alignSelf: 'center',
	},
	text: {
		color: 'white',
		alignSelf: 'center',
		marginTop: 15,
		fontSize: 25,
	},
	title: {
		color: 'white',
		alignSelf: 'center',
		marginTop: 15,
		marginBottom: 15,
		fontSize: 30,
	},
	settingIcon: {
		justifyContent: 'flex-end',
		marginTop: 10,
		marginRight: 10,
		alignItems: 'flex-end',
	},
	coin: {
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		width: 125,
		height: 125,
		marginTop: 45,
	},
});

function mapStateToProps(state) {
	return { token: state.token };
}

export default connect(mapStateToProps, null)(ProfileScreen);
