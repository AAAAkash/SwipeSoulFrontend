import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';

const DATA = [
  {
    id: '1',
    name: 'John Doe',
    imageUrl: require('../../Assets/Females.png'),
    time: '12:20',
  },
  {
    id: '2',
    name: 'Jane Doe',
    imageUrl: require('../../Assets/Females.png'),
    time: '12:25',
  },
  {
    id: '3',
    name: 'Jane Doe',
    imageUrl: require('../../Assets/Females.png'),
    time: '12:25',
  },
  {
    id: '5',
    name: 'John Doe',
    imageUrl: require('../../Assets/Females.png'),
    time: '12:20',
  },
  {
    id: '6',
    name: 'Jane Doe',
    imageUrl: require('../../Assets/Females.png'),
    time: '12:25',
  },
  {
    id: '7',
    name: 'Jane Doe',
    imageUrl: require('../../Assets/Females.png'),
    time: '12:25',
  },
];

const ChatList = ({navigation}) => {
  const [inputText, setInputText] = useState('');

  const back = () => {
    navigation.goBack();
  };

  const Chat = () => {
    navigation.navigate('Chat');
  };

  const renderItem = ({item}) => (
    <TouchableOpacity onPress={Chat}>
      <View style={styles.item}>
        <Image source={item.imageUrl} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 20,
        }}>
        <TouchableOpacity
          onPress={back}
          style={{position: 'absolute', left: 10, marginTop: 15}}>
          <Image
            style={{width: 20, height: 20, resizeMode: 'contain'}}
            source={require('../../Assets/back.png')}
          />
        </TouchableOpacity>
        <Text style={{fontSize: 22, fontWeight: '500', color: '#000'}}>
          Chat
        </Text>
      </View>

      <ScrollView>
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              onChangeText={setInputText}
              placeholderTextColor={'#000'}
              placeholder="Search..."
            />
          </View>

          <View style={styles.flatListContainer}>
            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
  flatListContainer: {
    width: '96%',
  },
  item: {
    flexDirection: 'row',
    padding: 10,
    borderColor: '#C8C8C8',
    borderRadius: 8,
    borderWidth: 1,
    marginTop: 16,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#DDD',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontWeight: 'bold',
    color: '#000',
  },
  time: {
    color: '#000',
  },
  input: {
    flex: 1,
    marginRight: 10,
    paddingVertical: 5,
    color: '#000',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#EA003D',
    width: '94%',
  },
});

export default ChatList;
