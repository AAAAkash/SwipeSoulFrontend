import {View, Text, ImageBackground, StyleSheet, Alert} from 'react-native';
import React, {useEffect} from 'react';

const Splash = ({navigation}) => {
  useEffect(() => {
    const splashTimeout = setTimeout(() => {
        navigation.navigate('SignUp');
      //navigation.navigate('Singleprofile');
     // navigation.navigate('Home');
      // navigation.navigate('SingleMainProfile');
      // navigation.navigate('Singleprofile');
      // navigation.navigate('OtpScreen');
      // navigation.navigate('Addphotocouple');
      //  navigation.navigate('Setting');
      //   navigation.navigate('LifeStyleCouple');
      // navigation.navigate('Helpandsupport');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../Assets/logo.png')}
        style={styles.imageBackground}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBackground: {
    width: '90%',
    aspectRatio: 1,
  },
});

export default Splash;
