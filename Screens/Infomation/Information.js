import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TextInput,
  ScrollView,
  SafeAreaView,
} from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import HeightModal from '../Common modal/HeightModal';
import Orientation from '../Common modal/Orientation';
import InterestModal from '../Common modal/IntresetModal';
import Header from '../Common modal/Header';
import {useSelector} from 'react-redux';

const Touchable = ({label, placeholder, onPress, value}) => {
  return (
    <TouchableOpacity onPress={onPress ? onPress : () => {}}>
      <Text style={styles.genderText}>{label}</Text>
      <View style={styles.viewTwo1}>
        <TouchableOpacity
          style={styles.inputToouchable}
          onPress={onPress ? onPress : () => {}}>
          <Text
            style={{
              color: value ? '#000' : '#999',
              fontSize: 16,
              marginTop: windowHeight * 0.02,
              paddingLeft: windowWidth * 0.03,
            }}>
            {value || placeholder}
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const Information = ({navigation}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedBirthday, setSelectedBirthday] = useState(null);

  const [isHeightModalVisible, setHeightModalVisible] = useState(false);
  const [selectedHeight, setSelectedHeight] = useState('');

  const [isOrientationModalVisible, setOrientationModalVisible] =
    useState(false);
  const [selectedOrientation, setSelectedOrientation] = useState('');
  const [isintrestlVisible, setIntrestVisible] = useState(false);
  const [selectedintreset, setSelectedIntrest] = useState('');

  const [selectedInterestOption, setSelectedInterestOption] = useState('');
  const ReduxGender = useSelector(state => state.selectedPartnerGender);
  console.log(ReduxGender, 'ReduxGenderhello');
  const [reduxgender, setReduxgender] = useState('');

  useEffect(() => {
    switch (ReduxGender) {
      case 'Male & Male':
        setReduxgender('Male');
        break;
      case 'Female & Female':
        setReduxgender('Female');
        break;
      case 'Male & Female':
        setReduxgender('Male');
        break;
      default:
        console.log('Unexpected value:', ReduxGender);
    }
  }, [ReduxGender]);

  const handleGenderFieldPress = () => {
    if (reduxgender === 'Male' || reduxgender === 'Female') {
      setOrientationModalVisible(true);
    }
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.log('Selected Date:', date);
    setSelectedBirthday(date.toLocaleDateString());

    hideDatePicker();
  };

  const showHeightModal = () => {
    setHeightModalVisible(true);
  };

  const hideHeightModal = () => {
    setHeightModalVisible(false);
  };

  const handleHeightSelection = height => {
    setSelectedHeight(height);
    console.log('Selected Height:', height);
    hideHeightModal();
  };

  const hideIntrestModal = () => {
    setIntrestVisible(false);
  };

  const handleIntrestSelection = intrest => {
    console.log('Selected Orientation:', intrest);
    setSelectedIntrest(intrest);
    hideIntrestModal();
  };

  const handleNavigation = () => {
    navigation.navigate('PartnerInfomation');
  };
  const interestOptions = [
    'Option1',
    'Option2',
    'Option3',
    'Option4',
    'Option5',
    'Option6',
    'Option7',
    'Option8',
    'Option9',
    'Option10',
  ];
  const handleInterestOptionPress = index => {
    setSelectedInterestOption(interestOptions[index]);
  };

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <Header navigation={navigation} />
        <View style={styles.container}>
          <View style={styles.viewtext}>
            <Text style={styles.text}>My Information</Text>
            <Text style={styles.textStyle1}>Fill your Infomation here !!</Text>
          </View>
        </View>
        <ScrollView style={{flex: 1}}>
          <Text style={styles.genderText1}>Name</Text>
          <View style={styles.viewTwo11}>
            <TextInput
              style={styles.input}
              placeholder="Enter Your name "
              placeholderTextColor={'#999'}
            />
          </View>
          <Text style={styles.genderText1}>Gender</Text>
          <View style={styles.viewTwo11}>
            <TouchableOpacity
              onPress={
                ReduxGender !== 'Male & Male' &&
                ReduxGender !== 'Female & Female'
                  ? handleGenderFieldPress
                  : null
              }>
              {/* <View style={styles.viewTwo11}> */}
              <Text
                style={styles.input1}
                placeholder="Your Gender here"
                placeholderTextColor={'#999'}
                editable={false}>
                {reduxgender}
              </Text>
              {/* </View> */}
            </TouchableOpacity>
          </View>

          <View
            style={{
              marginLeft: windowWidth * 0.05,
            }}>
            <Touchable
              label="Birthday"
              placeholder="Select your birthday"
              onPress={showDatePicker}
              value={selectedBirthday}
            />
            <Touchable
              label="Height"
              placeholder="Select your height"
              placeholderTextColor={'#999'}
              onPress={() => showHeightModal()}
              value={selectedHeight}
            />
          </View>
          <View style={{marginLeft: windowWidth * 0.05}}>
            <Text
              style={{
                fontSize: 22,
                marginTop: windowHeight * 0.02,
                color: '#000',
              }}>
              Interest
            </Text>
            <Text style={{fontSize: 16}}>
              {' '}
              select your interest from options below{' '}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                width: '105%',
                alignItems: 'center',
                padding: '2%',
                //  backgroundColor:'gray'
                marginTop: windowHeight * 0.01,
              }}>
              {interestOptions.map((option, index) => (
                <TouchableOpacity
                  key={index}
                  style={{
                    // borderWidth: 1,
                    borderRadius: 20,
                    paddingVertical: 7,
                    paddingHorizontal: 9,
                    alignItems: 'center',
                    // borderColor: '#EA003D',
                    backgroundColor:
                      selectedInterestOption === option ? '#EA003D' : '#DDDDDD',
                    margin: 2,
                    // shadowOffset: {
                    //   width: 0,
                    //   height: 3,
                    // },
                    // shadowOpacity: 0.27,
                    // shadowRadius: 4.65,
                    // elevation: 6,
                  }}
                  onPress={() => handleInterestOptionPress(index)}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '500',
                      color:
                        selectedInterestOption === option ? '#fff' : '#000',
                    }}>
                    {option}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>
        {/* <View style={styles.nextView}>
            <TouchableOpacity onPress={handleNavigation} style={styles.next}>
              <Text style={styles.logintext}>Next</Text>
            </TouchableOpacity>
          </View> */}
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />

        <Orientation
          visible={isOrientationModalVisible}
          onClose={() => setOrientationModalVisible(false)}
          onSubmit={orientation => {
            setSelectedOrientation(orientation);
            if (orientation === 'Male') {
              setReduxgender('Male');
            } else if (orientation === 'Female') {
              setReduxgender('Female');
            }
            setOrientationModalVisible(false);
          }}
        />

        <InterestModal
          visible={isintrestlVisible}
          onClose={hideIntrestModal}
          onSubmit={handleIntrestSelection}
        />
      </SafeAreaView>
      <HeightModal
        visible={isHeightModalVisible}
        onClose={() => {
          console.log('Height Modal Closed');
          hideHeightModal();
        }}
        onSubmit={handleHeightSelection}
      />
      <View style={styles.nextView}>
        <TouchableOpacity onPress={handleNavigation} style={styles.next}>
          <Text style={styles.logintext}>Next</Text>
        </TouchableOpacity>
      </View>
    </>
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
  viewtext: {
    left: windowWidth * 0.06,
  },
  text: {
    color: '#000',
    fontWeight: '700',
    fontSize: 24,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: windowHeight * 0.02,
  },
  genderText: {
    fontFamily: 'InterVariable-Italic',
    fontSize: 20,
    color: '#000',
    fontWeight: '600',
    marginTop: windowHeight * 0.02,
  },
  genderText1: {
    fontFamily: 'InterVariable-Italic',
    fontSize: 20,
    color: '#000',
    fontWeight: '600',
    marginTop: windowHeight * 0.02,
    marginLeft: windowWidth * 0.06,
  },
  viewTwo: {
    width: '90%',
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewTwo1: {
    marginTop: windowHeight * 0.01,
    width: '95%',
    borderColor: 'lightgrey',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    height: windowHeight * 0.07,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  input2: {
    fontSize: 16,
    color: '#000',
    height: windowHeight * 0.07,
  },
  inputToouchable: {
    fontSize: 16,
    height: windowHeight * 0.073,
    color: '#000',
    padding: 5,
  },
  viewTwo11: {
    marginTop: windowHeight * 0.01,
    width: '90%',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: windowWidth * 0.05,
    backgroundColor: '#DDDDDD',
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
    // backgroundColor:'gray',
    width: windowWidth * 0.9,
    paddingLeft: windowWidth * 0.03,
  },
  input1: {
    fontSize: 16,
    height: windowHeight * 0.073,
    color: '#000',
    // backgroundColor:'gray',
    width: windowWidth * 0.9,
    paddingLeft: windowWidth * 0.03,
    top: windowHeight * 0.021,
  },
  textStyle1: {
    fontFamily: 'InterVariable-Italic',
    fontWeight: '600',
    fontSize: 18,
    color: '#000',
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

export default Information;
