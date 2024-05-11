import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  SafeAreaView,
} from 'react-native';

const Chat = ({navigation}) => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isFirstMessage, setIsFirstMessage] = useState(true);

  const sendMessage = () => {
    if (inputText.trim() !== '') {
      const newMessage = {
        text: inputText,
        sentByUser: isFirstMessage,
      };
      setMessages([...messages, newMessage]);
      setInputText('');
      setIsFirstMessage(!isFirstMessage);
    }
  };
  const back = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
       <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : null}> 
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 7}}>
        <TouchableOpacity
          onPress={back}
          style={{position: 'absolute', left: 10, marginTop: 5}}>
          <Image
            style={{width: 20, height: 20, resizeMode: 'contain'}}
            source={require('../../Assets/back.png')}
          />
        </TouchableOpacity>
        <View
          style={{
            marginLeft: 60,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={require('../../Assets/Females.png')} />
          <View style={{marginLeft: 15}}>
            <Text style={styles.text}>Lisa Ray</Text>
            <Text style={styles.text1}>18 Year</Text>
          </View>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.messagesContainer}>
        {messages.map((message, index) => (
          <View
            key={index}
            style={[
              styles.messageContainer,
              message.sentByUser ? styles.sentMessage : styles.receivedMessage,
            ]}>
            <Text style={styles.messageText}>{message.text}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={{flexDirection: 'row',justifyContent:'space-evenly', marginBottom:12}}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={inputText}
            onChangeText={setInputText}
            placeholderTextColor={"#000"}
            placeholder="Type your message..."
          />
        </View>
        <View>
        <TouchableOpacity onPress={sendMessage}>
          <Image source={require('../../Assets/btn.png')} />
        </TouchableOpacity>
        </View>
        
      </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  messagesContainer: {
    flexGrow: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  messageContainer: {
    alignSelf: 'flex-end',
    maxWidth: '80%',
    marginVertical: 5,
    borderRadius: 10,
    padding: 10,
  },
  sentMessage: {
    backgroundColor: '#007AFF',
    alignSelf: 'flex-end',
  },
  receivedMessage: {
    backgroundColor: '#000',
    alignSelf: 'flex-start',
  },
  messageText: {
    color: '#ffffff',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
   // paddingBottom: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#EA003D',
    width: '75%',
  },
  input: {
    flex: 1,
    marginRight: 10,
  
color:'#000',
    paddingVertical: 5,
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
  },
  text1: {
    fontSize: 14,
    fontWeight: '400',
    color: '#000',
  },
});

export default Chat;
