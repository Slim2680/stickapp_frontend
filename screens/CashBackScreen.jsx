import React, { useState, useEffect } from 'react';
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
import { Button, Header, searchBar } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Toast from 'react-native-toast-message';
import { connect } from 'react-redux';

function CashBackScreen(props) {
<<<<<<< HEAD
  const [modalVisible, setModalVisible] = useState(false);
  const [modalInfoVisible, setModalInfoVisible] = useState(false);
  const [modalImage, setModalImage] = useState(0);
  const [couponPressed, setCouponPressed] = useState(false);
  const [coupons, setCoupons] = useState([]);
  const [visitPressed, setVisitPressed] = useState(false);
  const [starPressed, setStarPressed] = useState(false);
  const [messageVisible, setMessageVisible] = useState(false);
  const [modalClose, setmodalClose] = useState(true);
  // console.log('/////modalVisible', modalVisible);
  // console.log('/////modalImage', modalImage);
  // console.log('/////visitPressed', visitPressed);

  //   const brands = [
  //     {
  //       image: require("../assets/adidas.png"),
  //     },

  //     {
  //       image: require("../assets/apple.jpg"),
  //     },

  //     {
  //       image: require("../assets/balenciaga.jpg"),
  //     },

  //     {
  //       image: require("../assets/dior.jpg"),
  //     },

  //     {
  //       image: require("../assets/gucci.jpg"),
  //     },

  //     {
  //       image: require("../assets/nike.jpg"),
  //     },
  //     {
  //       image: require("../assets/fila.jpg"),
  //     },
  //     {
  //       image: require("../assets/hermès.jpg"),
  //     },
  //     {
  //       image: require("../assets/versace.jpg"),
  //     },
  //     {
  //       image: require("../assets/arrow.png"),
  //     },
  //     {
  //       image: require("../assets/befruity.jpg"),
  //     },
  //     {
  //       image: require("../assets/fitfood.png"),
  //     },
  //     {
  //       image: require("../assets/grubers.jpg"),
  //     },
  //     {
  //       image: require("../assets/icisalade.png"),
  //     },
  //     {
  //       image: require("../assets/logitech.png"),
  //     },
  //     {
  //       image: require("../assets/mk.jpg"),
  //     },
  //     {
  //       image: require("../assets/my.png"),
  //     },
  //     {
  //       image: require("../assets/pizzab.png"),
  //     },
  //     {
  //       image: require("../assets/samsung.jpg"),
  //     },
  //     {
  //       image: require("../assets/sns.png"),
  //     },
  //     {
  //       image: require("../assets/zara.png"),
  //     },
  //   ];

  useEffect(() => {
    async function loadData() {
      const rawCoupons = await fetch("https://stickapp-project.herokuapp.com/cashback");
      const responseCoupons = await rawCoupons.json();
      //   console.log("responseCoupons", responseCoupons);
      setCoupons(responseCoupons.data);
    }
    loadData();
  }, []);

  let couponCode;
  if (couponPressed === true) {
    couponCode = "   STICKAPP2K21";
  } else {
    couponCode = "   Redeem coupon";
  }

  let icon;
  if (starPressed === true) {
    icon = "star";
  } else {
    icon = "staro";
  }

  const onPressImage = (coupon) => {
    console.log("couponI", coupon.Image);
    console.log("---press detected #image");
    setModalVisible(true);
    setModalImage(coupon.Image);
  };

  const onPressView = () => {
    console.log("---press detected #view");
    setModalVisible(!modalVisible);
    if (couponPressed === true) {
      setCouponPressed(false);
      couponCode = "Redeem coupon";
      setVisitPressed(false);
    }
  };

  const onPressClose = () => {
    console.log("---press detected #close");
    setModalVisible(!modalVisible);
    if (couponPressed === true) {
      setCouponPressed(false);
      couponCode = "Redeem coupon";
      setVisitPressed(false);
    }
  };

  const onPressCoupon = () => {
    console.log("---press detected #coupon");
    setCouponPressed(true);
    setVisitPressed(true);
  };

  const onPressVisit = () => {
    console.log("---press detected #visit");
  };

  const onPressInfo = () => {
    console.log("---press detected #info");
    setModalInfoVisible(true);
  };

  const onPressInfoView = () => {
    console.log("---press detected #infoview");
    setModalInfoVisible(!modalInfoVisible);
  };

  const onPressInfoClose = () => {
    console.log("---press detected #infoclose");
    setModalInfoVisible(!modalInfoVisible);
  };

  const onPressStar = () => {
    console.log("---press detected #star");
    starPressed === false ? setStarPressed(true) : setStarPressed(false);
  };

  const onPressBlockClose = () => {
    console.log("---press detected #infoclose");
    setmodalClose(!modalClose);
  };

  const renderElement = () => {
    if (visitPressed === true) {
      return (
        <Button
          buttonStyle={{
            backgroundColor: "rgba(78, 116, 255, 1)",
            borderRadius: 8,
            borderWidth: 1,
            borderColor: "#fff",
          }}
          icon={<MaterialIcons name="logout" size={20} color="#ffffff" />}
          title="Visit                      "
          type="solid"
          onPress={() => onPressVisit()}
        />
      );
    } else {
      return;
    }
  };

  return (
    <View style={styles.container}>
      <Header
        statusBarProps={{ barStyle: "light-content" }}
        placement="left"
        backgroundColor="#111224"
        leftComponent={{
          text: "My Cash Back 🤑",
          style: {
            color: "#ffffff",
            fontWeight: "600",
            fontSize: 20,
            marginBottom: 15,
          },
        }}
        rightComponent={{ icon: "search", color: "#fff" }}
      />

      <Modal visible={modalClose} animationType="slide" transparent={true}>
        {/* <View style={styles.centeredView} /> */}
        <View style={styles.modalBlock}>
          <MaterialIcons
            name="close"
            size={20}
            style={{ ...styles.modalPass, ...styles.modalBlockClose }}
            color={"#fff"}
            onPress={() => onPressBlockClose()}
          />
          <View style={styles.modalBlockView}>
            <View style={styles.firstModalBlock}>
              <Text style={styles.modalTextBlock}>NOT CONNECTED 😔</Text>
            </View>
            <Text style={styles.modalInfoBlock}>
              Create an account to benefit from the Cashback program!
            </Text>
            <View style={styles.clickOnProfile}>
              <Text style={styles.modalInfoBlock}>
                Click on the Profile icon to start
              </Text>
              <MaterialIcons name="check-box" size={24} color="white" />
              <View>
                <Text style={styles.dontShowMessage}>
                  Don't show this message again.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      <View style={styles.infoIcon}>
        <TouchableOpacity onPress={() => onPressInfo()}>
          <MaterialIcons name="info-outline" size={35} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.infoIcon}>
        <TouchableOpacity onPress={() => onPressInfo()}>
          <MaterialIcons name="info-outline" size={35} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.starIcon}>
        <TouchableOpacity onPress={() => onPressStar()}>
          <AntDesign name={icon} size={80} color="#ffdf00" />
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.textPoint}>You've collected 0pts!</Text>
      </View>

      <View>
        <Text style={styles.text}>Start using Stickers in your chats to earn points!</Text>
      </View>

      <View
        style={{
          borderWidth: 0.25,
          borderColor: "#d1d1d3",
          borderRadius: 50,
          marginTop: 18,
        }}
      />
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <TouchableHighlight
          style={styles.modalView}
          underlayColor={"rgba(10, 10, 10, 0.8)"}
          onPress={() => onPressView()}
        >
          <View
            style={{
              marginTop: 70,
              marginBottom: 100,
            }}
          >
            <MaterialIcons
              name="close"
              size={27}
              style={{ ...styles.modalToggle, ...styles.modalClose }}
              color={"#fff"}
              onPress={() => onPressClose()}
            />
            <View style={styles.modalContent}>
              <Image style={styles.modalImage} source={{ uri: modalImage }} />
              <Text style={styles.modalText}>You'll get 15%</Text>
            </View>
            <Button
              buttonStyle={{
                backgroundColor: "rgba(78, 116, 255, 1)",
                borderRadius: 8,
                borderWidth: 1,
                borderColor: "#fff",
                marginBottom: 7,
                marginTop: 20,
              }}
              icon={<AntDesign name="arrowright" size={20} color="#ffffff" />}
              title={couponCode}
              type="solid"
              onPress={() => onPressCoupon()}
            />
            {renderElement()}
          </View>
        </TouchableHighlight>
      </Modal>
      <Modal visible={modalInfoVisible} animationType="slide">
        <TouchableHighlight
          style={styles.modalInfoView}
          underlayColor={"rgba(0, 0, 0, 1)"}
          activeOpacity={0.9}
          onPress={() => onPressInfoView()}
        >
          <View
            style={{
              marginTop: 70,
              marginBottom: 100,
            }}
          >
            <MaterialIcons
              name="close"
              size={25}
              style={{ ...styles.modalInfoToggle, ...styles.modalInfoClose }}
              color={"#fff"}
              onPress={() => onPressInfoClose()}
            />
            <View style={styles.modalInfoDesc}>
              <Text style={styles.modalInfoTitle}>- CashBack Infos -</Text>
              <Text style={styles.modalInfoText}>
                Familiar with referral or cashback programs?
              </Text>
              <Text style={styles.modalInfoText}>
                Well Stickapp pushed it to the next level.
              </Text>
              <Text style={styles.modalInfoText}>
                By using our branded stickers within your chats, no matter which
                one you use, Stickapp will reward you. Yeah that's right!!
                You'll get paid by chatting! Isn't that Great?
              </Text>
              <Text style={styles.modalInfoText}>How...you may ask?</Text>
              <Text style={styles.modalInfoText}>
                Word of mouth is the most powerful marketing tool for a brand to
                promote a product, a service or to increase brand awareness. We
                do talk about brands in our everyday life. We promote them by
                referring them to our entourage or simply when we express how
                happy we are about a new purchase. And yet, we do not get
                anything out of it.
              </Text>
              <Text style={styles.modalInfoText}>
                Well with Stickapp, that's about to change. Whenever you use a
                branded sticker from our library, you'll be rewarded. You'll be
                collecting points that will turn into discounts for your future
                online shopping!
              </Text>
              <Text style={styles.modalInfoText}>How does this work??</Text>
              <Text style={styles.modalInfoText}>
                Well since you are promoting a brand, we don't see why you
                should not benefit from that. Stickapp will simply retrocede a
                percentage of the income paid by the brand directly to your
                cashback page so you can use that as a discount.
              </Text>
            </View>
          </View>
        </TouchableHighlight>
      </Modal>
      <ScrollView contentContainerStyle={styles.stickerView}>
        {coupons.map((coupon, i) => {
          return (
            <TouchableOpacity key={i} onPress={() => onPressImage(coupon)}>
              <Image
                key={i}
                style={styles.tinyImage}
                source={{ uri: coupon.Image }}
              />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
=======
	const [modalVisible, setModalVisible] = useState(false);
	const [modalInfoVisible, setModalInfoVisible] = useState(false);
	const [modalImage, setModalImage] = useState(0);
	const [couponPressed, setCouponPressed] = useState(false);
	const [coupons, setCoupons] = useState([]);
	const [visitPressed, setVisitPressed] = useState(false);
	const [starPressed, setStarPressed] = useState(false);
	const [messageVisible, setMessageVisible] = useState(false);
	const [modalClose, setmodalClose] = useState(true);
	// console.log('/////modalVisible', modalVisible);
	// console.log('/////modalImage', modalImage);
	// console.log('/////visitPressed', visitPressed);

	//   const brands = [
	//     {
	//       image: require("../assets/adidas.png"),
	//     },

	//     {
	//       image: require("../assets/apple.jpg"),
	//     },

	//     {
	//       image: require("../assets/balenciaga.jpg"),
	//     },

	//     {
	//       image: require("../assets/dior.jpg"),
	//     },

	//     {
	//       image: require("../assets/gucci.jpg"),
	//     },

	//     {
	//       image: require("../assets/nike.jpg"),
	//     },
	//     {
	//       image: require("../assets/fila.jpg"),
	//     },
	//     {
	//       image: require("../assets/hermès.jpg"),
	//     },
	//     {
	//       image: require("../assets/versace.jpg"),
	//     },
	//     {
	//       image: require("../assets/arrow.png"),
	//     },
	//     {
	//       image: require("../assets/befruity.jpg"),
	//     },
	//     {
	//       image: require("../assets/fitfood.png"),
	//     },
	//     {
	//       image: require("../assets/grubers.jpg"),
	//     },
	//     {
	//       image: require("../assets/icisalade.png"),
	//     },
	//     {
	//       image: require("../assets/logitech.png"),
	//     },
	//     {
	//       image: require("../assets/mk.jpg"),
	//     },
	//     {
	//       image: require("../assets/my.png"),
	//     },
	//     {
	//       image: require("../assets/pizzab.png"),
	//     },
	//     {
	//       image: require("../assets/samsung.jpg"),
	//     },
	//     {
	//       image: require("../assets/sns.png"),
	//     },
	//     {
	//       image: require("../assets/zara.png"),
	//     },
	//   ];

	useEffect(() => {
		async function loadData() {
			const rawCoupons = await fetch('http://10.3.11.10:3000/cashback');
			const responseCoupons = await rawCoupons.json();
			//   console.log("responseCoupons", responseCoupons);
			setCoupons(responseCoupons.data);
		}
		loadData();
	}, []);

	const showToast = () => {
		Toast.show({
			type: 'success',
			text1: `You've used 1000pts from your balance!`,
			text2: ' ',
		});
	};

	let couponCode;
	if (couponPressed === true) {
		couponCode = '   STICKAPP2K21';
	} else {
		couponCode = '   Redeem coupon';
	}

	let icon;
	if (props.count > 0) {
		icon = 'star';
	} else {
		icon = 'staro';
	}

	// const showToast = () => {
	// 	Toast.show({
	// 		type: 'success',
	// 		text1: `You used 1000pts from your balance! `,
	// 		text2: '',
	// 	});
	// };

	const onPressImage = (coupon) => {
		console.log('couponI', coupon.Image);
		console.log('---press detected #image');
		setModalVisible(true);
		setModalImage(coupon.Image);
	};

	const onPressView = () => {
		console.log('---press detected #view');
		setModalVisible(!modalVisible);
		if (couponPressed === true) {
			setCouponPressed(false);
			couponCode = 'Redeem coupon';
			setVisitPressed(false);
		}
	};

	const onPressClose = () => {
		console.log('---press detected #close');
		setModalVisible(!modalVisible);
		if (couponPressed === true) {
			setCouponPressed(false);
			couponCode = 'Redeem coupon';
			setVisitPressed(false);
		}
	};

	const onPressCoupon = () => {
		console.log('---press detected #coupon');
		setCouponPressed(true);
		setVisitPressed(true);
		props.removePoints();
		showToast();
		setModalVisible(false);
	};

	const onPressVisit = () => {
		console.log('---press detected #visit');
	};

	const onPressInfo = () => {
		console.log('---press detected #info');
		setModalInfoVisible(true);
	};

	const onPressInfoView = () => {
		console.log('---press detected #infoview');
		setModalInfoVisible(!modalInfoVisible);
	};

	const onPressInfoClose = () => {
		console.log('---press detected #infoclose');
		setModalInfoVisible(!modalInfoVisible);
	};

	const onPressStar = () => {
		console.log('---press detected #star');
		starPressed === false ? setStarPressed(true) : setStarPressed(false);
	};

	const onPressBlockClose = () => {
		console.log('---press detected #infoclose');
		setmodalClose(!modalClose);
	};

	const renderElement = () => {
		if (visitPressed === true) {
			return (
				<Button
					buttonStyle={{
						backgroundColor: 'rgba(78, 116, 255, 1)',
						borderRadius: 8,
						borderWidth: 1,
						borderColor: '#fff',
					}}
					icon={<MaterialIcons name='logout' size={20} color='#ffffff' />}
					title='Visit                      '
					type='solid'
					onPress={() => onPressVisit()}
				/>
			);
		} else {
			return;
		}
	};

	return (
		<View style={styles.container}>
			<Header
				statusBarProps={{ barStyle: 'light-content' }}
				placement='left'
				backgroundColor='#111224'
				leftComponent={{
					text: 'My Cash Back 🤑',
					style: {
						color: '#ffffff',
						fontWeight: '600',
						fontSize: 20,
						marginBottom: 15,
					},
				}}
				rightComponent={{ icon: 'search', color: '#fff' }}
			/>

			<Modal visible={modalClose} animationType='slide' transparent={true}>
				{/* <View style={styles.centeredView} /> */}
				<View style={styles.modalBlock}>
					<MaterialIcons
						name='close'
						size={20}
						style={{ ...styles.modalPass, ...styles.modalBlockClose }}
						color={'#fff'}
						onPress={() => onPressBlockClose()}
					/>
					<View style={styles.modalBlockView}>
						<View style={styles.firstModalBlock}>
							<Text style={styles.modalTextBlock}>NOT CONNECTED 😔</Text>
						</View>
						<Text style={styles.modalInfoBlock}>
							Create an account to benefit from the Cashback program!
						</Text>
						<View style={styles.clickOnProfile}>
							<Text style={styles.modalInfoBlock}>
								Click on the Profile icon to start
							</Text>
							<MaterialIcons name='check-box' size={24} color='white' />
							<View>
								<Text style={styles.dontShowMessage}>
									Don't show this message again.
								</Text>
							</View>
						</View>
					</View>
				</View>
			</Modal>

			<View style={styles.infoIcon}>
				<TouchableOpacity onPress={() => onPressInfo()}>
					<MaterialIcons name='info-outline' size={35} color='white' />
				</TouchableOpacity>
			</View>

			<View style={styles.starIcon}>
				<TouchableOpacity onPress={() => onPressStar()}>
					<AntDesign name={icon} size={80} color='#ffdf00' />
				</TouchableOpacity>
			</View>

			<View>
				<Text style={styles.textPoint}>You've collected {props.count}pts!</Text>
			</View>

			<View>
				<Text style={styles.text}>Start using Stickers to earn points!</Text>
			</View>

			<View
				style={{
					borderWidth: 0.25,
					borderColor: '#d1d1d3',
					borderRadius: 50,
					marginTop: 18,
				}}
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
							size={27}
							style={{ ...styles.modalToggle, ...styles.modalClose }}
							color={'#fff'}
							onPress={() => onPressClose()}
						/>
						<View style={styles.modalContent}>
							<Image style={styles.modalImage} source={{ uri: modalImage }} />
							<Text style={styles.modalText}>You'll get 15%</Text>
						</View>
						<Button
							buttonStyle={{
								backgroundColor: 'rgba(78, 116, 255, 1)',
								borderRadius: 8,
								borderWidth: 1,
								borderColor: '#fff',
								marginBottom: 7,
								marginTop: 20,
							}}
							icon={<AntDesign name='arrowright' size={20} color='#ffffff' />}
							title={couponCode}
							type='solid'
							onPress={() => onPressCoupon()}
						/>
						{renderElement()}
					</View>
				</TouchableHighlight>
			</Modal>
			<Modal visible={modalInfoVisible} animationType='slide'>
				<TouchableHighlight
					style={styles.modalInfoView}
					underlayColor={'rgba(0, 0, 0, 1)'}
					activeOpacity={0.9}
					onPress={() => onPressInfoView()}
				>
					<View
						style={{
							marginTop: 70,
							marginBottom: 100,
						}}
					>
						<MaterialIcons
							name='close'
							size={25}
							style={{ ...styles.modalInfoToggle, ...styles.modalInfoClose }}
							color={'#fff'}
							onPress={() => onPressInfoClose()}
						/>
						<View style={styles.modalInfoDesc}>
							<Text style={styles.modalInfoTitle}>- CashBack Infos -</Text>
							<Text style={styles.modalInfoText}>
								Familiar with referral or cashback programs?
							</Text>
							<Text style={styles.modalInfoText}>
								Well Stickapp pushed it to the next level.
							</Text>
							<Text style={styles.modalInfoText}>
								By using our branded stickers within your chats, no matter which
								one you use, Stickapp will reward you. Yeah that's right!!
								You'll get paid by chatting! Isn't that Great?
							</Text>
							<Text style={styles.modalInfoText}>How...you may ask?</Text>
							<Text style={styles.modalInfoText}>
								Word of mouth is the most powerful marketing tool for a brand to
								promote a product, a service or to increase brand awareness. We
								do talk about brands in our everyday life. We promote them by
								referring them to our entourage or simply when we express how
								happy we are about a new purchase. And yet, we do not get
								anything out of it.
							</Text>
							<Text style={styles.modalInfoText}>
								Well with Stickapp, that's about to change. Whenever you use a
								branded sticker from our library, you'll be rewarded. You'll be
								collecting points that will turn into discounts for your future
								online shopping!
							</Text>
							<Text style={styles.modalInfoText}>How does this work??</Text>
							<Text style={styles.modalInfoText}>
								Well since you are promoting a brand, we don't see why you
								should not benefit from that. Stickapp will simply retrocede a
								percentage of the income paid by the brand directly to your
								cashback page so you can use that as a discount.
							</Text>
						</View>
					</View>
				</TouchableHighlight>
			</Modal>
			<ScrollView contentContainerStyle={styles.stickerView}>
				{coupons.map((coupon, i) => {
					return (
						<TouchableOpacity key={i} onPress={() => onPressImage(coupon)}>
							<Image
								key={i}
								style={styles.tinyImage}
								source={{ uri: coupon.Image }}
							/>
						</TouchableOpacity>
					);
				})}
			</ScrollView>
		</View>
	);
>>>>>>> 631899d606e682155595b3ad48331592273e490b
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#111224',
	},
	dontShowMessage: {
		marginTop: -28,
		fontSize: 13,
		color: 'white',
		marginLeft: 35,
	},
	clickOnProfile: {
		// marginTop: 20,
		fontSize: 18,
	},
	firstModalBlock: {
		marginBottom: 20,
	},
	modalInfoBlock: {
		color: 'white',
		fontSize: 18,
		textAlign: 'center',
		backgroundColor: '#111224',
		marginBottom: 40,
	},
	modalTextBlock: {
		color: 'white',
		fontSize: 20,
		textAlign: 'center',
		backgroundColor: '#111224',
		// marginBottom: ,
	},
	modalBlockClose: {
		marginBottom: 10,
	},
	modalPass: {
		marginLeft: 275,
		borderWidth: 2.5,
		borderColor: '#fff',
		borderRadius: 15,
		alignSelf: 'center',
	},
	modalBlock: {
		flex: 1,
		justifyContent: 'center',
		padding: 30,
		backgroundColor: 'rgba(10, 10, 10, .3)',
	},
	modalBlockView: {
		backgroundColor: '#111224',
		borderRadius: 20,
		padding: 70,
		alignItems: 'center',
		justifyContent: 'center',
		borderColor: 'white',
		borderWidth: 4,
	},
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 22,
	},
	textPoint: {
		color: 'white',
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 25,
	},
	text: {
		color: 'white',
		textAlign: 'center',
		justifyContent: 'center',
		fontSize: 15,
		marginTop: 5,
		marginBottom: 5,
	},
	starIcon: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: -20,
		marginBottom: 10,
	},
	infoIcon: {
		justifyContent: 'flex-end',
		marginTop: 10,
		marginRight: 10,
		alignItems: 'flex-end',
	},
	stickerView: {
		flexDirection: 'row',
		marginHorizontal: 15,
		justifyContent: 'space-between',
		flexWrap: 'wrap',
		marginTop: 20,
	},
	tinyImage: {
		width: 100,
		height: 100,
		borderRadius: 5,
		marginBottom: 30,
		borderWidth: 1,
		borderColor: '#fff',
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
		marginBottom: 10,
	},
	modalContent: {
		flex: 1,
		justifyContent: 'center',
		// alignItems: 'center',
		// marginBottom: 25,
		borderWidth: 3,
		borderColor: 'white',
		borderRadius: 20,
		backgroundColor: 'white',
	},
	modalImage: {
		flex: 1,
		width: 360,
		borderColor: 'white',
		borderRadius: 15,
	},
	modalInfoTitle: {
		color: '#fff',
		fontSize: 36,
		fontWeight: '600',
		marginBottom: 25,
		marginLeft: 20,
	},
	modalText: {
		color: '#303030',
		fontSize: 25,
		textAlign: 'center',
		backgroundColor: '#fff',
	},
	modalInfoView: {
		flex: 1,
		backgroundColor: '#111224',
		justifyContent: 'center',
	},
	modalInfoDesc: {
		justifyContent: 'space-between',
		marginBottom: 110,
	},
	modalInfoText: {
		color: '#fff',
		fontSize: 16,
		textAlign: 'center',
		lineHeight: 0,
		marginBottom: 10,
		margin: 10,
	},
	modalInfoToggle: {
		marginLeft: 320,
		borderWidth: 3,
		borderColor: '#fff',
		borderRadius: 15,
		alignSelf: 'center',
	},
	modalInfoClose: {
		marginTop: 180,
		marginBottom: -38,
		marginRight: -10,
	},
});

function mapStateToProps(state) {
	return { count: state.count };
}

function mapDispatchToProps(dispatch) {
	return {
		removePoints: function () {
			dispatch({ type: 'removePoints' });
		},
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CashBackScreen);
