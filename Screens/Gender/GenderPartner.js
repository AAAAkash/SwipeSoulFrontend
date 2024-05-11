import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Header from '../Common modal/Header';
import {setSelectedPartnerGender} from '../../Redux/Action/Action';
import {useDispatch} from 'react-redux';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const GenderPartner = ({navigation}) => {
  const [selectedGender, setSelectedGender] = useState(null);
  const dispatch = useDispatch();
  const handleButtonPress = () => {
    if (selectedGender !== null) {
      dispatch(setSelectedPartnerGender(selectedGender));
    }
    navigation.navigate('Information');
  };

  const gender = ['Male & Male', 'Male & Female','Female & Female', ];

  const handleGenderPress = gender => {
    setSelectedGender(gender);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header navigation={navigation} />

      <View style={styles.viewOne}>
        <Text style={styles.textStyle}>Who you are </Text>
        <Text style={styles.textStyle1}>How do you identify?</Text>
      </View>

      <View style={{alignItems: 'center', marginTop: windowHeight * 0.01}}>
        {gender.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.genderButton]}
            onPress={() => handleGenderPress(item)}>
            <Text style={styles.genderText}>{item}</Text>
            {selectedGender === item && (
              <Image
                source={require('../../Assets/tick.png')}
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: 'contain',
                  tintColor: '#EA003D',
                }}
              />
            )}
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.belowtextView}>
        <Text style={styles.textbelow}>{''}</Text>
      </View>
      <View>
        <Text style={[styles.textStyle1,{ width: windowWidth * 0.9,alignSelf:'center',}]}>

        While choosing gender please be concern about that first gender selected will
          be concider as your and send as your partner
        </Text>
      </View>

      <View style={styles.nextView}>
        <TouchableOpacity onPress={handleButtonPress} style={styles.next}>
          <Text style={styles.logintext}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  back: {
    left: windowWidth * 0.02,
  },
  img: {
    height: windowHeight * 0.03,
    width: windowWidth * 0.03,
  },
  viewOne: {
    // flexDirection: 'row',
    // alignItems: 'center',

    // alignItems:'center',
    marginLeft: windowWidth * 0.06,
    marginTop: windowHeight * 0.04,
  },
  viewtext: {
    left: windowWidth * 0.26,
  },
  text: {
    color: '#000',
    fontWeight: '700',
    fontSize: 24,
  },
  genderButton: {
    // borderWidth: 1,
    height: windowHeight * 0.07,
    width: '85%',
    marginTop: windowHeight * 0.02,
    borderRadius: 15,
    borderColor: '#EA003D',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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

  genderText: {
    fontFamily: 'InterVariable-Italic',
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },
  belowtextView: {
    alignItems: 'center',
    marginTop: windowHeight * 0.1,
  },
  textbelow: {
    fontSize: 12,
  },
  textStyle: {
    fontFamily: 'InterVariable-Italic',
    color: '#000',
    fontWeight: '700',
    fontSize: 24,
  },
  textStyle1: {
    fontFamily: 'InterVariable-Italic',
    color: '#000',
    fontWeight: '600',
    fontSize: 18,
    marginTop: windowHeight * 0.01,
  },
  nextView: {
    marginTop: 'auto',
    alignItems: 'center',
    marginBottom: 15,
  },
  next: {
    borderRadius: 20,
    width: windowWidth * 0.87,
    alignItems: 'center',
    height: windowHeight * 0.074,
    justifyContent: 'center',
    backgroundColor: '#EA003D',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  logintext: {
    color: '#fff',
    fontSize: 16,
  },
});

export default GenderPartner;
