import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Modal,
  TouchableHighlight,
} from 'react-native';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { connect } from 'react-redux';

function SignUpScreen(props) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalInfoVisible, setModalInfoVisible] = useState(false);
  const [modalImage, setModalImage] = useState(0);
  // console.log('---username ==', username);
  // console.log('---email ==', email);
  // console.log('---password ==', password);
  // console.log('/////////////error signup', errorsSignup);

  const onSetUsername = (evt) => {
    setUsername(evt);
  };

  const onSetEmail = (evt) => {
    setEmail(evt);
  };

  const onSetPassword = (evt) => {
    setPassword(evt);
  };

  const onPressSignUp = async () => {
    console.log('click detecte #signup');
    const data = await fetch('http://10.3.11.10:3000/sign-up', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `username=${username}&email=${email}&password=${password}`,
    });
    const body = await data.json();
    // console.log('///bodyyy', body);

    if (body.result == true) {
      props.addToken(body.token);
      setModalVisible(true);
    } else {
      return;
    }
  };

  const onPressView = () => {
    console.log('---press detected #view');
    setModalVisible(!modalVisible);
    props.navigation.navigate('Log in');
  };

  const onPressClose = () => {
    console.log('---press detected #close');
    setModalVisible(!modalVisible);
    props.navigation.navigate('Log in');
  };

  return (
    <View style={styles.container}>
      <Modal visible={modalVisible} animationType='slide' transparent={true}>
        <TouchableHighlight
          style={styles.modalView}
          underlayColor={'rgba(10, 10, 10, 0.8)'}
          onPress={() => onPressView()}
        >
          <View
            style={{
              marginTop: 100,
              marginBottom: 200,
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
              <Image
                style={styles.modalImage}
                source={require('../assets/congrats.png')}
              />
              <Text style={styles.modalTextTitle}>Congratulations!</Text>
              <Text style={styles.modalText}>
                Your account has been created.
              </Text>
              <Text style={styles.modalText}>
                Use your credentials to Login.
              </Text>
            </View>
          </View>
        </TouchableHighlight>
      </Modal>
      <Input
        containerStyle={{ marginBottom: 15, width: '70%' }}
        inputStyle={{ marginLeft: 10, color: 'white' }}
        placeholder='username'
        autoCapitalize={false}
        autoCorrect={false}
        // errorStyle={{ color: "red" }}
        // errorMessage="Enter a valid email"
        leftIcon={<Icon name='user' size={24} color='#ffffff' />}
        onChangeText={(evt) => onSetUsername(evt)}
      />
      <Input
        containerStyle={{ marginBottom: 15, width: '70%' }}
        inputStyle={{ marginLeft: 10, color: 'white' }}
        placeholder='email@adress.com'
        autoCapitalize='none'
        autoCorrect={false}
        // errorStyle={{ color: "red" }}
        // errorMessage="Enter a valid email"
        leftIcon={<Icon name='envelope' size={21} color='#ffffff' />}
        onChangeText={(evt) => onSetEmail(evt)}
      />
      <Input
        containerStyle={{ width: '70%' }}
        inputStyle={{ marginLeft: 10, color: 'white' }}
        placeholder='password'
        autoCorrect={false}
        secureTextEntry={true}
        // errorStyle={{ color: "red" }}
        // errorMessage="Password must be at least 6 characters"
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
    padding: 5,
  },
  modalImage: {
    flex: 1,
    width: '100%',
    margin: 20,
    alignSelf: 'center',
  },
  modalTextTitle: {
    textAlign: 'center',
    fontWeight: '500',
    marginBottom: 6,
    fontSize: 20,
  },
  modalText: {
    textAlign: 'center',
    fontWeight: '400',
    marginBottom: 5,
    fontSize: 18,
  },
});

function mapDispatchToProps(dispatch) {
  return {
    addToken: function (token) {
      dispatch({ type: 'addToken', token: token });
    },
  };
}

export default connect(null, mapDispatchToProps)(SignUpScreen);
