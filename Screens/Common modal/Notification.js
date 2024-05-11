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
    message: 'Shraya likes your photo',
    imageUrl: require('../../Assets/Females.png'),
    imageUrl1: require('../../Assets/UnionDelete.png'),
    time: '2 min ago',
  },
  {
    id: '2',
    message: 'Shraya likes your photo',
    imageUrl: require('../../Assets/Females.png'),
    imageUrl1: require('../../Assets/UnionDelete.png'),
    time: '2 min ago',
  },
  {
    id: '3',
    message: 'Shraya likes your photo',
    imageUrl: require('../../Assets/Females.png'),
    imageUrl1: require('../../Assets/UnionDelete.png'),
    time: '2 min ago',
  },
  {
    id: '5',
    message: 'Shraya likes your photo',
    imageUrl: require('../../Assets/Females.png'),
    imageUrl1: require('../../Assets/UnionDelete.png'),
    time: '2 min ago',
  },
  {
    id: '6',
    message: 'Shraya likes your photo',
    imageUrl: require('../../Assets/Females.png'),
    imageUrl1: require('../../Assets/UnionDelete.png'),
    time: '2 min ago',
  },
  {
    id: '7',
    message: 'Shraya likes your photo',
    imageUrl: require('../../Assets/Females.png'),
    imageUrl1: require('../../Assets/UnionDelete.png'),
    time: '2 min ago',
  },
];

const Notification = ({navigation}) => {
  // const [inputText, setInputText] = useState('');

  const back = () => {
    navigation.goBack();
  };

  // const Chat = () => {
  //   navigation.navigate('Chat');
  // };

  const renderItem = ({item}) => (
    <TouchableOpacity
    style={styles.card}
    // onPress={Chat}
    >
      <View style={styles.item}>
        <Image source={item.imageUrl} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{item.message}</Text>
          <View > 
            <Text style={styles.time}>{item.time}</Text>
            <TouchableOpacity>
            <Image source={item.imageUrl1} style= {styles.Img1} />
            </TouchableOpacity>
          </View>
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
          Notification
        </Text>
      </View>

      <ScrollView>
        <View style={styles.container}>
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
  card:{
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  flatListContainer: {
    width: '94%',
  },
  item: {
    flexDirection: 'row',
    padding: 10,
    borderColor: '#C8C8C8',
    borderRadius: 8,
    borderWidth: 1,
    marginTop: 16,
    width: '100%',

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
    fontWeight: '500',
    color: '#000',
  },
  time: {
    color: '#939393',
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
  Img1:{
    top:6,
    

  }
});

export default Notification;
