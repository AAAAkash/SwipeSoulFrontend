import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';

import {launchImageLibrary} from 'react-native-image-picker';
import Header from '../Common modal/Header';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const AddPhoto = ({navigation}) => {
  const [photo1, setPhoto1] = useState(null);
  const [photo2, setPhoto2] = useState(null);
  const [photo3, setPhoto3] = useState(null);
  const [photo4, setPhoto4] = useState(null);
  const [photo5, setPhoto5] = useState(null);
  const [photo6, setPhoto6] = useState(null);
  const openImagePicker = setImage => {
    console.log('pressed');

    let options = {
      mediaType: 'photo',
      maxWidth: 500,
      maxHeight: 500,
      quality: 0.8,
    };

    launchImageLibrary(options, response => {
      console.log('ImagePicker Response:', response);
      if (!response.didCancel && !response.errorCode) {
        console.log('Selected Image URI:', response.assets[0].uri);
        setImage(response.assets[0].uri);

        if (!response.cancelled) {
          const {uri, fileName, type} = response.assets[0];
          let newFile = {
            uri: uri,
            name: fileName,
            type: type,
          };
          //   handleUpload(newFile);
        }
      }
    });
  };
  const deletePhoto = setPhoto => {
    setPhoto(null);
  };
  const handleButtonPress = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
     <Header navigation={navigation}/>

      <View style={styles.viewOne}>
        <Text style={styles.textStyle}>Add at least 2 photos. </Text>
        <Text style={styles.textStyle1}>
          Upload your stunning photoes and get more attention
        </Text>
      </View>
      <View style={{padding: 10}}>
        <View
          style={{
            marginTop: windowHeight * 0.07,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity
            disabled={photo1 !== null}
            style={{
              position: 'relative',
              // borderWidth: 1,
              // borderColor: '#EA003D',
              width: windowWidth * 0.25,
              height: windowWidth * 0.27,
              borderRadius: 20,
              overflow: 'hidden',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#ccc',
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.27,
              shadowRadius: 4.65,
              elevation: 6,
            }}
            onPress={() => openImagePicker(setPhoto1)}>
            {photo1 && (
              <View
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                }}>
                <Image
                  source={{uri: photo1}}
                  style={{width: '100%', height: '100%', position: 'absolute'}}
                />
                <TouchableOpacity
                  style={{position: 'absolute', top: '-7%', right: '9%'}}
                  onPress={() => deletePhoto(setPhoto1)}>
                  <Image
                    style={{
                      width: 16.09,
                      resizeMode: 'contain',
                    }}
                    source={require('../../Assets/Cross.png')}
                  />
                </TouchableOpacity>
              </View>
            )}
            {!photo1 && (
              <Text
                style={{
                  color: '#999',
                  fontSize: 40,
                  textAlign: 'center',
                }}>
                +
              </Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            disabled={photo2 !== null}
            style={{
              position: 'relative',
              // borderWidth: 1,
              // borderColor: '#EA003D',
              width: windowWidth * 0.25,
              height: windowWidth * 0.27,
              borderRadius: 20,
              overflow: 'hidden',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#ccc',
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.27,
              shadowRadius: 4.65,
              elevation: 6,
            }}
            onPress={() => openImagePicker(setPhoto2)}>
            {photo2 && (
              <View
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                }}>
                <Image
                  source={{uri: photo2}}
                  style={{width: '100%', height: '100%', position: 'absolute'}}
                />
                <TouchableOpacity
                  style={{position: 'absolute', top: '-7%', right: '9%'}}
                  onPress={() => deletePhoto(setPhoto2)}>
                  <Image
                    style={{
                      width: 16.09,
                      resizeMode: 'contain',
                    }}
                    source={require('../../Assets/Cross.png')}
                  />
                </TouchableOpacity>
              </View>
            )}
            {!photo2 && (
              <Text
                style={{
                  color: '#999',
                  fontSize: 40,
                  textAlign: 'center',
                }}>
                +
              </Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            disabled={photo3 !== null}
            style={{
              position: 'relative',
              // borderWidth: 1,
              // borderColor: '#EA003D',
              width: windowWidth * 0.25,
              height: windowWidth * 0.27,
              borderRadius: 20,
              overflow: 'hidden',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#ccc',
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.27,
              shadowRadius: 4.65,
              elevation: 6,
            }}
            onPress={() => openImagePicker(setPhoto3)}>
            {photo3 && (
              <View
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                }}>
                <Image
                  source={{uri: photo3}}
                  style={{width: '100%', height: '100%', position: 'absolute'}}
                />
                <TouchableOpacity
                  style={{position: 'absolute', top: '-7%', right: '9%'}}
                  onPress={() => deletePhoto(setPhoto3)}>
                  <Image
                    style={{
                      width: 16.09,
                      resizeMode: 'contain',
                    }}
                    source={require('../../Assets/Cross.png')}
                  />
                </TouchableOpacity>
              </View>
            )}
            {!photo3 && (
              <Text
                style={{
                  color: '#999',
                  fontSize: 40,
                  textAlign: 'center',
                }}>
                +
              </Text>
            )}
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: windowHeight * 0.07,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity
            disabled={photo4 !== null}
            style={{
              position: 'relative',

              backgroundColor: '#ccc',
              width: windowWidth * 0.25,
              height: windowWidth * 0.27,
              borderRadius: 20,
              overflow: 'hidden',
              justifyContent: 'center',
              alignItems: 'center',
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.27,
              shadowRadius: 4.65,
              elevation: 6,
            }}
            onPress={() => openImagePicker(setPhoto4)}>
            {photo4 && (
              <View
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                }}>
                <Image
                  source={{uri: photo4}}
                  style={{width: '100%', height: '100%', position: 'absolute'}}
                />
                <TouchableOpacity
                  style={{position: 'absolute', top: '-7%', right: '9%'}}
                  onPress={() => deletePhoto(setPhoto4)}>
                  <Image
                    style={{
                      width: 16.09,
                      resizeMode: 'contain',
                    }}
                    source={require('../../Assets/Cross.png')}
                  />
                </TouchableOpacity>
              </View>
            )}
            {!photo4 && (
              <Text
                style={{
                  color: '#999',
                  fontSize: 40,
                  textAlign: 'center',
                }}>
                +
              </Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            disabled={photo5 !== null}
            style={{
              position: 'relative',
              backgroundColor: '#ccc',

              width: windowWidth * 0.25,
              height: windowWidth * 0.27,
              borderRadius: 20,
              overflow: 'hidden',
              justifyContent: 'center',
              alignItems: 'center',
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.27,
              shadowRadius: 4.65,
              elevation: 6,
            }}
            onPress={() => openImagePicker(setPhoto5)}>
            {photo5 && (
              <View
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                }}>
                <Image
                  source={{uri: photo5}}
                  style={{width: '100%', height: '100%', position: 'absolute'}}
                />
                <TouchableOpacity
                  style={{position: 'absolute', top: '-7%', right: '9%'}}
                  onPress={() => deletePhoto(setPhoto5)}>
                  <Image
                    style={{
                      width: 16.09,
                      resizeMode: 'contain',
                    }}
                    source={require('../../Assets/Cross.png')}
                  />
                </TouchableOpacity>
              </View>
            )}
            {!photo5 && (
              <Text
                style={{
                  color: '#999',
                  fontSize: 40,
                  textAlign: 'center',
                }}>
                +
              </Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            disabled={photo6 !== null}
            style={{
              position: 'relative',
              backgroundColor: '#ccc',

              width: windowWidth * 0.25,
              height: windowWidth * 0.27,
              borderRadius: 20,
              overflow: 'hidden',
              justifyContent: 'center',
              alignItems: 'center',
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.27,
              shadowRadius: 4.65,
              elevation: 6,
            }}
            onPress={() => openImagePicker(setPhoto6)}>
            {photo6 && (
              <View
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                }}>
                <Image
                  source={{uri: photo6}}
                  style={{width: '100%', height: '100%', position: 'absolute'}}
                />
                <TouchableOpacity
                  style={{position: 'absolute', top: '-7%', right: '9%'}}
                  onPress={() => deletePhoto(setPhoto6)}>
                  <Image
                    style={{
                      width: 16.09,
                      resizeMode: 'contain',
                    }}
                    source={require('../../Assets/Cross.png')}
                  />
                </TouchableOpacity>
              </View>
            )}
            {!photo6 && (
              <Text
                style={{
                  color: '#999',
                  fontSize: 40,
                  textAlign: 'center',
                }}>
                +
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text
          style={[styles.textStyle1, {fontSize: 16, left: windowWidth * 0.03}]}>
          {' '}
          You can change these later
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
  container: {
    flex: 1,
  },
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
export default AddPhoto;
