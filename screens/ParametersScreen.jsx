import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';

function ParametersScreen(props) {
  // console.log('props-------', props.route.params.user.name);
  const user = {
    avatar: props.route.params.user.avatar,
    name: props.route.params.user.name,
  };

  const onPressSave = () => {
    console.log('press detected #save');
  };

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity>
          <Image style={styles.pp} source={user.avatar} />
          <FontAwesome
            style={styles.camera}
            name='camera'
            size={24}
            color='white'
          />
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity>
          <Text style={styles.text}>
            {user.name}
            {'  '}
            <FontAwesome
              style={styles.pencil}
              name='pencil'
              size={19}
              color='white'
            />
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          borderWidth: 0.25,
          borderColor: '#d1d1d3',
          borderRadius: 50,
          marginBottom: 40,
        }}
      />

      <View>
        <TouchableOpacity>
          <Text style={styles.change}>Change email</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.change}>Change password</Text>
        </TouchableOpacity>
      </View>

      <Button
        containerStyle={{
          alignSelf: 'center',
          marginTop: 40,
          height: 40,
          width: 200,
        }}
        buttonStyle={{
          backgroundColor: '#50c879',
          borderRadius: 3,
        }}
        title='Save changes'
        type='solid'
        onPress={() => onPressSave()}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111224',
  },
  pp: {
    width: 120,
    height: 120,
    borderRadius: 70,
    borderWidth: 1,
    borderColor: '#fff',
    alignSelf: 'center',
    marginTop: 40,
  },
  text: {
    color: '#017afe',
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 35,
    fontSize: 25,
  },
  camera: {
    marginLeft: 220,
    marginTop: -20,
  },
  pencil: {},
  change: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '400',
    marginTop: 3,
    marginBottom: 15,
    padding: 5,
  },
});

export default ParametersScreen;
