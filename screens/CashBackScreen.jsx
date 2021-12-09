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
} from 'react-native';
import { Button, Header, searchBar } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

function CashBackScreen(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalImage, setModalImage] = useState(0);
  const [couponPressed, setCouponPressed] = useState(false);
  const [coupon, setCoupon] = useState('');
  const [visitPressed, setVisitPressed] = useState(false);
  console.log('/////modalVisible', modalVisible);
  console.log('/////modalImage', modalImage);
  console.log('/////visitPressed', visitPressed);

  const brands = [
    {
      image: require('../assets/adidas.png'),
    },

    {
      image: require('../assets/apple.jpg'),
    },

    {
      image: require('../assets/balenciaga.jpg'),
    },

    {
      image: require('../assets/dior.jpg'),
    },

    {
      image: require('../assets/gucci.jpg'),
    },

    {
      image: require('../assets/nike.jpg'),
    },
    {
      image: require('../assets/fila.jpg'),
    },
    {
      image: require('../assets/hermès.jpg'),
    },
    {
      image: require('../assets/versace.jpg'),
    },
    {
      image: require('../assets/arrow.png'),
    },
    {
      image: require('../assets/befruity.jpg'),
    },
    {
      image: require('../assets/fitfood.png'),
    },
    {
      image: require('../assets/grubers.jpg'),
    },
    {
      image: require('../assets/icisalade.png'),
    },
    {
      image: require('../assets/logitech.png'),
    },
    {
      image: require('../assets/mk.jpg'),
    },
    {
      image: require('../assets/my.png'),
    },
    {
      image: require('../assets/pizzab.png'),
    },
    {
      image: require('../assets/samsung.jpg'),
    },
    {
      image: require('../assets/sns.png'),
    },
    {
      image: require('../assets/zara.png'),
    },
  ];

  let couponCode;
  if (couponPressed === true) {
    couponCode = '   STICKAPP2K21';
  } else {
    couponCode = '   Redeem coupon';
  }

  const onPressImage = (brand) => {
    console.log('---press detected #image');
    setModalVisible(true);
    setModalImage(brand.image);
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
  };

  const onPressVisit = () => {
    console.log('---press detected #visit');
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
          icon={<MaterialIcons name="logout" size={20} color="#ffffff" />}
          title="Visit                      "
          type="solid"
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
        placement="left"
        backgroundColor="#111224"
        leftComponent={{
          text: 'My Cash Back',
          style: { color: '#ffffff', fontWeight: '600', fontSize: 20 },
        }}
        rightComponent={{ icon: 'search', color: '#fff' }}
      />

      <View style={styles.infoIcon}>
        <MaterialIcons name="info-outline" size={24} color="white" />
      </View>

      <View style={styles.starIcon}>
        <AntDesign name="staro" size={85} color="#ffdf00" />
      </View>

      <View>
        <Text style={styles.textPoint}>You've collected 0pts!</Text>
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
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <TouchableOpacity
          style={styles.modalView}
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
              size={24}
              style={{ ...styles.modalToggle, ...styles.modalClose }}
              color={'#fff'}
              onPress={() => onPressClose()}
            />
            <View style={styles.modalContent}>
              <Image style={styles.modalImage} source={modalImage} />
              <Text style={styles.modalText}>You get 15%</Text>
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
              icon={<AntDesign name="arrowright" size={20} color="#ffffff" />}
              title={couponCode}
              type="solid"
              onPress={() => onPressCoupon()}
            />
            {renderElement()}
          </View>
        </TouchableOpacity>
      </Modal>
      <ScrollView contentContainerStyle={styles.stickerView}>
        {brands.map((brand, i) => {
          return (
            <TouchableOpacity key={i} onPress={() => onPressImage(brand)}>
              <Image key={i} style={styles.tinyImage} source={brand.image} />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111224',
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
  },
  starIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -25,
    marginBottom: 12,
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
    marginLeft: 310,
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
  modalText: {
    color: '#303030',
    fontSize: 25,
    textAlign: 'center',
    backgroundColor: '#fff',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default CashBackScreen;
