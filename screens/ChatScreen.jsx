import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import socketIOClient from 'socket.io-client';

var socket = socketIOClient('http://10.3.11.7:3000');

function ChatScreen(props) {
  const [messages, setMessages] = useState([]);
  const [listMessages, setListMessages] = useState([]);
  // console.log("////////////SETMESSAGES", messages);

  useEffect(() => { 
    socket.on('sendMessageToAll', (newMessageData)=> {
      setListMessages([...listMessages, newMessageData]);
    });
  }, [listMessages]);

  const onSend = useCallback((messages = []) => {
    console.log('MESSAGES', messages[0].text);
    socket.emit('sendMessages', messages[0].text);
    console.log('---------onSend');
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  const onPressKeyboard = (text) => {
    console.log('ONPRESSKEYBOARD', text);
  };

  return (
    <GiftedChat
      onInputTextChanged={(text) => onPressKeyboard(text)}
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  );
}

export default ChatScreen;
