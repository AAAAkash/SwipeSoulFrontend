import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet,
  Alert,
  BackHandler,
} from 'react-native';
import React, {useEffect} from 'react';
// import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const SignUp = ({navigation}) => {
  // const Email = () => {
  //   navigation.navigate('Emailinfo');
  // };
  const Phone = () => {
    navigation.navigate('Login');
  };

  useEffect(() => {
    const backAction = () => {
      if (navigation.isFocused()) {
        Alert.alert('Confirm', 'Are you sure you want to exit?', [
          {
            text: 'Yes',
            onPress: () => BackHandler.exitApp(),
          },
          {
            text: 'No',
            style: 'cancel',
          },
        ]);

        return true;
      }
      navigation.goBack();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, [navigation]);
  // useEffect(() => {
  //   const configureGoogleSignIn = async () => {
  //     try {
  //       await GoogleSignin.hasPlayServices();
  //       GoogleSignin.configure({
  //         androidClientId:
  //           '193279469310-iik7s6g39ve8er7gea8bjgf62992ml38.apps.googleusercontent.com',
  //         offlineAccess: false,
  //       });
  //     } catch (error) {
  //       console.error('Google Sign-In Configuration Error', error);
  //     }
  //   };

  //   configureGoogleSignIn();
  // }, []);

  // const handleGoogleSignIn = async () => {
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     const userInfo = await GoogleSignin.signIn();
  //     console.log('Google Sign In Success', userInfo);
  //     Alert.alert(
  //       'Google Sign In Success',
  //       'You have successfully signed in with Google.',
  //       [
  //         {
  //           text: 'OK',
  //           onPress: () => navigation.navigate('Who'),
  //         },
  //       ]
  //     );
  //   } catch (error) {
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //       // User cancelled the sign-in
  //       console.log('Google Sign In Cancelled');
  //     } else if (error.code === statusCodes.IN_PROGRESS) {
  //       console.log('Google Sign In in progress');
  //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //       console.log('Play services not available or outdated');
  //     } else {
  //       console.warn('Google Sign In Error', error);
  //     }
  //   }
  // };

  // const renderAppleSignInButton = () => {
  //   if (Platform.OS === 'ios') {
  //     return (
  //       <TouchableOpacity
  //         style={{
  //           flexDirection: 'row',
  //           width: windowWidth * 0.9,
  //           alignItems: 'center',
  //           borderWidth: 2,
  //           borderColor: '#fff',
  //           borderRadius: 30,
  //           height: windowHeight * 0.07,
  //           marginTop: windowHeight * 0.02,
  //         }}>
  //         <Image
  //           style={{
  //             height: windowHeight * 0.03,
  //             width: windowWidth * 0.04,
  //             marginLeft: windowWidth * 0.05,
  //           }}
  //           source={require('../Assets/apple.png')}
  //         />

  //         <Text style={{ color: '#fff', marginLeft: windowWidth * 0.22,fontFamily:'Righteous-Regular' }}>
  //           SIGN IN WITH APPLE
  //         </Text>
  //       </TouchableOpacity>
  //     );
  //   }
  //   return null;
  // };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          marginTop: '4%',
          alignSelf: 'center',
          justifyContent: 'center',
        }}>
        <Image
          style={{
            height: windowHeight * 0.3,
            width: windowWidth * 0.5,
            // backgroundColor:'gray',
            resizeMode: 'contain',
          }}
          source={require('../../Assets/logo.png')}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          justifyContent: 'center',
          marginTop: windowHeight * 0.002,
        }}>
        <Text style={styles.textStyle}>Welcome to SwipeSoul</Text>
      </View>
      <View
        style={{
          alignSelf: 'center',
          justifyContent: 'center',
          marginTop: windowHeight * 0.005,
        }}>
        <Text style={styles.textStyle2}>Login to continue.</Text>
      </View>

      <View style={{alignItems: 'center', marginTop: '4%'}}>
        <View
          style={{
            width: '85%',
            marginTop: '9%',
            fontFamily: 'InterVariable-Italic',
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'InterVariable-Italic',
              color: '#000',
              fontSize: 14,
            }}>
           By tapping Continue you're agree to our  {''}
          </Text>
          <TouchableOpacity style={{alignSelf: 'flex-start'}}>
            <Text
              style={{
                fontFamily: 'InterVariable-Italic',
                color: '#FC1212',
                fontWeight: '700',
                fontSize: 14,
              }}>
               Terms of services  {''}
            </Text>
          </TouchableOpacity>

          <Text
            style={{
              fontFamily: 'InterVariable-Italic',
              color: '#000',
              fontSize: 14,
            }}>
           and  {''}
          </Text>
          <TouchableOpacity style={{}}>
            <Text
              style={{
                fontFamily: 'InterVariable-Italic',
                color: '#FC1212',
                fontWeight: '700',
                fontSize: 14,
              }}>
              Privacy Policy.
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center', marginTop: windowHeight * 0.07}}>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: '#800000'}]}
            onPress={Phone}>
            <Text style={[styles.buttonText, {color: '#fff'}]}>
              Continue With Phone Number
            </Text>
          </TouchableOpacity>

          <Text style={{fontSize: 17, marginTop: windowHeight * 0.02}}>OR</Text>

          <TouchableOpacity style={styles.button}>
            <Image
              style={{
                height: 25,
                width: 25,
                resizeMode: 'contain',
                marginRight: windowWidth * 0.09,
              }}
              source={require('../../Assets/google.png')}
            />
            <Text style={styles.buttonText}>Continue With Google</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default SignUp;

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'InterVariable-Italic',
    color: '#000',
    fontWeight: '400',
    fontSize: 17,
  },
  textStyle2: {
    fontFamily: 'InterVariable-Italic',
    color: '#000',
    fontWeight: '700',
    fontSize: 27,
  },
  button: {
    flexDirection: 'row',
    width: windowWidth * 0.9,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EA003D',
    marginTop: windowHeight * 0.025,
    borderRadius: 15,
    height: windowHeight * 0.079,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#000',
    fontFamily: 'InterVariable-Italic',
    fontWeight: '500',
    fontSize: 20,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
