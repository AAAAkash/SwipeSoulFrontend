import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Modal,
} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import Header from '../Common modal/Header';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
import {setSelectedPhonenumber} from '../../Redux/Action/Action';
import {useDispatch} from 'react-redux';
const Login = ({navigation}) => {
  const [phoneCountryCode, setPhoneCountryCode] = useState('IN');
  const [phoneCountryCallingCode, setPhoneCountryCallingCode] = useState('91');
  const [showPhoneCountryPicker, setShowPhoneCountryPicker] = useState(false);
  const [login, SetLogin] = useState('');
  const [otp, setOtp] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const handleNext = () => {
    if (!login ) {
      Alert.alert('Please fill in phone number fields.');

    } else if (!otp) {
      Alert.alert('Please fill in OTP fields.');
    }
    else if (login.length !== 10) {
      Alert.alert('Phone number must be 10 digits long.');
    } else if (otp.length !== 6) {
      Alert.alert('OTP must be 6 digits long.');
    } else {
      setModalVisible(true);
      dispatch(setSelectedPhonenumber(login));
    }
  };
  
  handleNavigation = () => {
    navigation.navigate('UserType');
  };
  const closeModalAndNavigate = () => {
    setModalVisible(false);
    handleNavigation();
  };
  const openCountryPicker = () => {
    setShowPhoneCountryPicker(true);
  };

  const onCountrySelect = country => {
    setPhoneCountryCode(country.cca2);
    setPhoneCountryCallingCode(country.callingCode);
    setShowPhoneCountryPicker(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{flex: 1}} // Set flex: 1 to ensure it takes up the entire screen
        behavior={Platform.OS === 'ios' ? 'padding' : null} // Adjust behavior for different platforms
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0} // Adjust vertical offset for different platforms
      >
        <Header navigation={navigation} />

        <View style={styles.viewOne}>
          <Text style={styles.textStyle1}> Let's explore!</Text>
          <Text style={styles.textStyle}>What's your number? </Text>
        </View>
        <View style={styles.viewTwo}>
          <TouchableOpacity
            // style={{right: windowWidth * 0.06}}
            onPress={openCountryPicker}>
            <CountryPicker
              countryCode={phoneCountryCode}
              visible={showPhoneCountryPicker}
              onSelect={onCountrySelect}
              withFilter={true}
            />
          </TouchableOpacity>
          <Text style={styles.countryCode}>(+{phoneCountryCallingCode})</Text>
          <View style={styles.line}></View>
          <TextInput
            style={styles.input2}
            value={login}
            onChangeText={SetLogin}
            maxLength={10}
            placeholder="Phone number here.."
            placeholderTextColor={'#999'}
            keyboardType="phone-pad"
          />
          <TouchableOpacity style={{marginLeft: windowWidth * 0.1}}>
            <Text style={{fontSize: 16, color: '#000', fontWeight: '600'}}>
              Get Otp
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewTwo}>
          <TextInput
            style={styles.input}
            value={otp}
            onChangeText={setOtp}
            maxLength={6}
            placeholder="6-digt verification code"
            placeholderTextColor={'#999'}
            keyboardType="phone-pad"
          />
        </View>

        <View style={styles.nextView}>
          <TouchableOpacity onPress={handleNext} style={styles.next}>
            <Text style={styles.logintext}>Next</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
      <Modal transparent={true} visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={{fontSize: 22, fontWeight: '600', color: '#000'}}>
              Turn on your location
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: '#000',
                marginTop: windowHeight * 0.02,
              }}>
              We use your location to show you best matches in your area.
            </Text>
            <TouchableOpacity
              onPress={() => closeModalAndNavigate()}
              style={styles.modalButton}>
              <Text style={{color: '#fff', fontSize: 16}}>
                Current Location
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={{marginTop: windowHeight * 0.02}}>
              <Text style={{color: '#000', fontSize: 16}}>Not now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
  },
  textStyle: {
    fontFamily: 'InterVariable-Italic',
    color: '#000',
    fontWeight: '700',
    fontSize: 24,
  },
  textStyle1: {
    fontFamily: 'InterVariable-Italic',
     color: '#aaa',
    fontWeight: '600',
    fontSize: 22,
  },
  viewOne: {
    marginTop: windowHeight * 0.04,
    // alignItems:'center',
    marginLeft: windowWidth * 0.06,
  },
  viewTwo: {
    marginTop: windowHeight * 0.04,
    width: '92%',

    borderRadius: 15,

    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: windowWidth * 0.045,
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
  input: {
    fontSize: 16,
    height: windowHeight * 0.073,
    color: '#000',
   
    width: windowWidth* 0.9
  },
  input2: {
    fontSize: 16,

    color: '#000',
    height: windowHeight * 0.073,
  },

  back: {
    marginTop: windowHeight * 0.02,
    marginLeft: windowWidth * 0.04,
  },
  img: {
    height: windowHeight * 0.03,
    width: windowWidth * 0.03,
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
  nextView: {
    marginTop: 'auto',
    alignItems: 'center',
    marginBottom: 9,
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
  countryCode: {
    color: '#000',
    // right: windowWidth * 0.06,
  },
  line: {
    height: '70%',
    width: 1,
    backgroundColor: '#000',
    marginHorizontal: 10,
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    //  width: windowHeight *0.5
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: windowWidth * 0.8,
    borderRadius: 20,
  },
  modalButton: {
    borderRadius: 15,
    width: windowWidth * 0.63,
    alignItems: 'center',
    height: windowHeight * 0.07,
    justifyContent: 'center',
    backgroundColor: '#EA003D',
    marginTop: windowHeight * 0.02,
  },
});

export default Login;
