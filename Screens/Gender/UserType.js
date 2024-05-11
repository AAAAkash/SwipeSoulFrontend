import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Header from '../Common modal/Header';
import { setSelectedUsertype } from '../../Redux/Action/Action';
import { useDispatch } from 'react-redux';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const UserType = ({navigation}) => {
  const dispatch = useDispatch();
  const SingleNavigation = () => {
    dispatch(setSelectedUsertype('Single'));
    navigation.navigate('Gender');
  };
  const CoupleNavigation = () => {
    dispatch(setSelectedUsertype('Couple'));
    navigation.navigate('GenderPartner');
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header  navigation={navigation}  />

      <View style={styles.viewOne}>
        <Text style={styles.textStyle}>Select Usertype. </Text>
        {/* <Text style={styles.textStyle1}>How do you identify?</Text> */}
      </View>
      <View style={styles.view}>
   
      <View style={styles.userTypeView}>
        <TouchableOpacity style={styles.UsertTypeButton} onPress={SingleNavigation} >
          <Text style={styles.UsertTypeText}>Single</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.userTypeView}>
        <TouchableOpacity style={styles.UsertTypeButton} onPress={CoupleNavigation}>
          <Text style={styles.UsertTypeText}>Couple</Text>
        </TouchableOpacity>
      </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'InterVariable-Italic',
    color: '#000',
    fontWeight: '700',
    fontSize: 24,
  },
  textStyle1: {
    fontFamily: 'InterVariable-Italic',

    fontWeight: '600',
    fontSize: 18,
    marginTop: windowHeight * 0.01,
  },
  viewOne: {
    marginLeft: windowWidth * 0.06,
    marginTop: windowHeight * 0.04,
  },
  container: {
    flex: 1,
  },
  UsertTypeButton: {
    height: windowHeight * 0.1,
    width: '85%',

    borderRadius: 15,
    borderColor: '#EA003D',

    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginTop: windowHeight * 0.03,
    backgroundColor: '#DDDDDD',
    padding: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  UsertTypeText: {
    fontFamily: 'InterVariable-Italic',
    fontSize: 19,
    color: '#000',
    fontWeight: '600',
  },
  userTypeView: {
    alignItems: 'center',
  },
  view:{
    justifyContent:'center',
    position:'absolute',
    bottom: windowHeight * 0.4,
    width:'100%',
  }
});
export default UserType;
