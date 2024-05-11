import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  Animated,
  Easing,
  PanResponder,
  ScrollView,
} from 'react-native';
import {withSpring} from 'react-native-reanimated';
import {useSelector} from 'react-redux';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
import {useTheme} from '@react-navigation/native';

const Home = ({navigation}) => {
  const [otherScreen, setOtherScreen] = useState(false);
  const [initialScreen, setInitialScreen] = useState(true);
  const [swipeUpAnim] = useState(new Animated.Value(0));
  const [selectedInterestOption, setSelectedInterestOption] = useState('');
  const selectedUsertype = useSelector(state => state.selectedUsertype);
  console.log(selectedUsertype);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const pan = new Animated.ValueXY();
  const scrollViewRef = useRef(0);
  const {colors} = useTheme();
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (e, gesture) => {
      if (Math.abs(gesture.dx) > Math.abs(gesture.dy)) {
        // Only track horizontal movement
        Animated.event([null, {dx: pan.x}], {useNativeDriver: false})(
          e,
          gesture,
        );
      }
    },
    onPanResponderRelease: (e, gesture) => {
      if (
        gesture.dx > 110 &&
        Math.abs(gesture.dy) <
          Math.abs(gesture.dx) * Math.tan((10 * Math.PI) / 180)
      ) {
        swipeRight();
        // resetPosition();
      } else if (
        gesture.dx < -120 &&
        Math.abs(gesture.dy) <
          Math.abs(gesture.dx) * Math.tan((10 * Math.PI) / 180)
      ) {
        swipeLeft();
        // resetPosition();
      } else {
        resetPosition();
      }
    },
  });

  const swipeRight = () => {
    Animated.timing(pan, {
      toValue: {x: windowWidth + 100, y: 0},
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      setCurrentIndex(currentIndex + 1);
      setNextIndex(nextIndex + 1);
      resetPosition();
    });
  };

  const swipeLeft = () => {
    Animated.timing(pan, {
      toValue: {x: -windowWidth - 100, y: 0},
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      setCurrentIndex(currentIndex + 1);
      setNextIndex(nextIndex + 1);
      resetPosition();
    });
  };

  const resetPosition = () => {
    Animated.spring(pan, {
      toValue: {x: 0, y: 0},
      useNativeDriver: false,
    }).start();
  };

  const profiles = [
    {
      name: 'John',
      age: '25',
      gender: 'Male',
      interest: 'Interest 1',
      image: [
        require('../../Assets/ty.jpeg'),
        require('../../Assets/yu.jpeg'),
        require('../../Assets/Females.png'),
        require('../../Assets/ty.jpeg'),
        require('../../Assets/Females.png'),
      ],
    },
    {
      name: 'Tasha 2',
      age: '28',
      gender: 'Female',
      interest: 'Interest 2',
      image: [
        require('../../Assets/ty.jpeg'),
        require('../../Assets/yu.jpeg'),
        require('../../Assets/Females.png'),
        require('../../Assets/ty.jpeg'),
        require('../../Assets/Females.png'),
      ],
    },
    {
      name: 'Tom 3',
      age: '28',
      gender: 'Female',
      interest: 'Interest 3',
      image: [
        require('../../Assets/ty.jpeg'),
        require('../../Assets/yu.jpeg'),
        require('../../Assets/Females.png'),
        require('../../Assets/ty.jpeg'),
        require('../../Assets/Females.png'),
      ],
    },
    {
      name: 'Anneabell 4',
      age: '28',
      gender: 'Female',
      interest: 'Interest 4',
      image: [
        require('../../Assets/ty.jpeg'),
        require('../../Assets/yu.jpeg'),
        require('../../Assets/Females.png'),
        require('../../Assets/ty.jpeg'),
        require('../../Assets/Females.png'),
      ],
    },
    {
      name: 'joker 5',
      age: '28',
      gender: 'Female',
      interest: 'Interest 5',
      image: [
        require('../../Assets/ty.jpeg'),
        require('../../Assets/yu.jpeg'),
        require('../../Assets/Females.png'),
        require('../../Assets/ty.jpeg'),
        require('../../Assets/Females.png'),
      ],
    },
    {
      name: 'Batman 6',
      age: '28',
      gender: 'Female',
      interest: 'Interest 6',
      image: [
        require('../../Assets/ty.jpeg'),
        require('../../Assets/yu.jpeg'),
        require('../../Assets/Females.png'),
        require('../../Assets/ty.jpeg'),
        require('../../Assets/Females.png'),
      ],
    },
  ];
  const chat = () => {
    navigation.navigate('ChatList');
  };
  const Notification = () => {
    navigation.navigate('Notification');
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
  const handleOtherScreen = () => {
    Animated.timing(swipeUpAnim, {
      toValue: 1,
      duration: 500,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start(() => {
      setOtherScreen(true);
      setInitialScreen(false);
    });
  };

  const handleInitialScreen = () => {
    Animated.timing(swipeUpAnim, {
      toValue: 0,
      duration: 500,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start(() => {
      setOtherScreen(false);
      setInitialScreen(true);
    });
  };

  const handleDotPress = index => {
    setCurrentIndex(index);
    scrollViewRef.current.scrollTo({x: index * windowWidth, animated: true});
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      {initialScreen && (
        <View style={{flex: 1}}>
          <View style={styles.container}>
            <Image
              style={styles.logopng}
              source={require('../../Assets/logo.png')}
            />
            <TouchableOpacity onPress={Notification}>
              <Image
                style={styles.vectorbell}
                source={require('../../Assets/Vectorbell.png')}
              />
            </TouchableOpacity>
          </View>
          {profiles
            .slice(currentIndex, currentIndex + 2)
            .map((profile, index) => {
              const position = index === 0 ? 0 : windowWidth * 0;
              const opacity = index === 0 ? 1 : 0.5;
              const height = index === 0 ? 0 : -windowHeight * 0.75;

              return (
                <Animated.View
                  key={currentIndex + index}
                  style={[
                    styles.cardContainer,
                    {
                      zIndex: index === 0 ? 2 : 1,
                      transform: [
                        {translateX: index === 0 ? pan.x : position},
                        {translateY: index === 0 ? pan.y : 0},
                        {perspective: 1000},
                        {
                          rotate:
                            index === 0
                              ? pan.x.interpolate({
                                  inputRange: [
                                    -windowWidth / 2,
                                    0,
                                    windowWidth / 2,
                                  ],
                                  outputRange: ['-10deg', '0deg', '10deg'],
                                  extrapolate: 'clamp',
                                })
                              : '0deg',
                        },
                      ],
                      opacity: opacity,
                      marginTop: height,
                      height: windowHeight * 0.75,
                    },
                  ]}
                  {...(index === 0 ? panResponder.panHandlers : {})}>
                  <View style={styles.viewone}>
                    <ImageBackground
                      style={styles.imgeone}
                      source={require('../../Assets/Profile.png')}>
                      {selectedUsertype === 'Couple' ? (
                        <View style={styles.card}>
                          <Text style={{color: '#fff'}}>Couple</Text>
                        </View>
                      ) : (
                        <>
                          <View style={styles.card}>
                            <Text style={{color: '#fff'}}>Single</Text>
                          </View>
                        </>
                      )}
                    </ImageBackground>
                    {selectedUsertype === 'Single' ? (
                      <View style={styles.namecard1}>
                        <View style={styles.nameView}>
                          <Text style={styles.name}>{profile.name}</Text>

                          <Text style={styles.age}>
                            {' '}
                            {profile.age},{profile.gender}
                          </Text>

                          <Text style={styles.name}>{profile.interest}</Text>
                        </View>
                      
                      </View>
                    ) : (
                      <>
                        <View style={styles.namecard}>
                          <View style={styles.nameView}>
                            <Text style={styles.name}>{profile.name}</Text>
                            <Text style={styles.age}>25, Male</Text>
                          </View>
                          <View
                            style={[
                              styles.nameView,
                              {marginTop: windowHeight * 0.01},
                            ]}>
                            <Text style={styles.name}>{profile.name}</Text>
                            <Text style={styles.age}>25, Male</Text>
                          </View>
                       
                        </View>
                      </>
                    )}
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',
                      marginTop: windowHeight * -0.02,

                      zIndex: 6,
                      // backgroundColor: 'grey',
                    }}>
                    <TouchableOpacity onPress={swipeLeft}>
                      <Image
                        style={{
                          resizeMode: 'contain',
                          height: windowHeight * 0.12,
                          width: windowWidth * 0.35,
                        }}
                        source={require('../../Assets/Maincancel.png')}
                      />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleOtherScreen}>
                      <View
                        style={{
                          backgroundColor: '#fff',
                          height: windowHeight * 0.09,
                          width: windowWidth * 0.19,
                          borderRadius: 25,
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: 50,
                          shadowColor: '#000',
                          shadowOffset: {
                            width: 0,
                            height: 2,
                          },
                          shadowOpacity: 0.25,
                          shadowRadius: 3.84,

                          elevation: 5,
                          
                        }}>
                        <Text
                          style={{
                            color: colors.primary,
                            fontWeight: 'bold',
                            fontSize: windowHeight * 0.04,
                          }}>
                          i
                        </Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={swipeRight}>
                      <Image
                        style={{
                          resizeMode: 'contain',
                          height: windowHeight * 0.12,
                          width: windowWidth * 0.35,
                        }}
                        source={require('../../Assets/Mainlike.png')}
                      />
                    </TouchableOpacity>
                  </View>
                </Animated.View>
              );
            })}

          <View style={styles.buttonContainer}>

           
            <TouchableOpacity>
              <Image
                style={styles.Icons}
                source={require('../../Assets/HomeIcon.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={chat}>
              <Image
                style={styles.Icons}
                source={require('../../Assets/ChatIconMain.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.Icons}
                source={require('../../Assets/ProfileIconMain.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.Icons}
                source={require('../../Assets/SettingIconMain.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
      {otherScreen && (
        // <Animated.View
        //   style={[
        //     styles.otherScreen,
        //     {
        //       transform: [
        //         {
        //           translateY: swipeUpAnim.interpolate({
        //             inputRange: [0, 1],
        //             outputRange: [windowHeight, 0],
        //           }),
        //         },
        //       ],
        //     },
        //   ]}>
        <>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              // backgroundColor:'grey'
            }}>
            <View style={styles.back}>
              <TouchableOpacity onPress={handleInitialScreen}>
                <Image
                  style={styles.img}
                  source={require('../../Assets/back.png')}
                />
              </TouchableOpacity>
            </View>
            <View>
              <Image
                style={{
                  resizeMode: 'contain',
                  height: windowHeight * 0.09,
                  width: windowWidth * 0.4,
                  marginTop : windowHeight * 0.02
                }}
                source={require('../../Assets/logo.png')}
              />
            </View>
            <View />
          </View>
          <ScrollView
            style={{flex: 1}}
            contentContainerStyle={{paddingBottom: windowHeight * 0.2}}
            keyboardShouldPersistTaps="handled">
            <ScrollView
              style={styles.imageScrollView}
              ref={scrollViewRef}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              onScroll={event => {
                const {contentOffset, layoutMeasurement, contentSize} =
                  event.nativeEvent;
                const currentIndex = Math.floor(
                  contentOffset.x / layoutMeasurement.width,
                );
                setCurrentIndex(currentIndex);
              }}>
              {profiles[currentIndex].image.map((imageSource, index) => (
                <Image
                  key={index}
                  source={imageSource}
                  style={styles.imageItem}
                />
              ))}
            </ScrollView>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: windowHeight * 0.01,
              }}>
              {profiles[currentIndex].image.map((_, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleDotPress(index)}
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    marginHorizontal: 5,
                    backgroundColor:
                      index === currentIndex ? '#EA003D' : '#ccc',
                  }}
                />
              ))}
            </View>
            <View style={styles.otherScreen1}>
      
              <View style={styles.cardContainer}>
                {/* <Text style={styles.cardTitle}>
                More Information about this account
              </Text> */}

                <View style={styles.cardContent}>
                  {selectedUsertype === 'Single' ? (
                    <>
                      <Text style={styles.cardText}> John</Text>
                      <Text style={styles.cardText1}> 25, Male</Text>
                      <Text style={styles.cardText1}> 5'6"</Text>

                      <Text
                        style={[
                          styles.cardText,
                          {marginTop: windowHeight * 0.04},
                        ]}>
                        Interest
                      </Text>
                      <View style={styles.interestContainer}>
                        {interestOptions.map((option, index) => (
                          <TouchableOpacity
                            key={index}
                            style={[
                              styles.interestButton,
                              {
                                backgroundColor:
                                  selectedInterestOption === option
                                    ? '#EA003D'
                                    : '#DDDDDD',
                              },
                            ]}
                            onPress={() => handleInterestOptionPress(index)}>
                            <Text
                              style={[
                                styles.interestText,
                                {
                                  color:
                                    selectedInterestOption === option
                                      ? '#fff'
                                      : '#000',
                                },
                              ]}>
                              {option}
                            </Text>
                          </TouchableOpacity>
                        ))}
                      </View>
                    </>
                  ) : (
                    <>
                      <Text style={styles.cardText}> John</Text>
                      <Text style={styles.cardText1}> 25, Male</Text>
                      <Text style={styles.cardText1}> 5'6"</Text>

                      <Text
                        style={[
                          styles.cardText,
                          {marginTop: windowHeight * 0.01},
                        ]}>
                        Interest
                      </Text>
                      <View style={styles.interestContainer}>
                        {interestOptions.map((option, index) => (
                          <TouchableOpacity
                            key={index}
                            style={[
                              styles.interestButton,
                              {
                                backgroundColor:
                                  selectedInterestOption === option
                                    ? '#EA003D'
                                    : '#DDDDDD',
                              },
                            ]}
                            onPress={() => handleInterestOptionPress(index)}>
                            <Text
                              style={[
                                styles.interestText,
                                {
                                  color:
                                    selectedInterestOption === option
                                      ? '#fff'
                                      : '#000',
                                },
                              ]}>
                              {option}
                            </Text>
                          </TouchableOpacity>
                        ))}
                      </View>
                      <Text
                        style={[
                          styles.cardText,
                          {marginTop: windowHeight * 0.07},
                        ]}>
                        Tasha
                      </Text>
                      <Text style={styles.cardText1}>25, Female</Text>
                      <Text style={styles.cardText1}> 5'5"</Text>
                      <Text
                        style={[
                          styles.cardText,
                          {marginTop: windowHeight * 0.01},
                        ]}>
                        Interest
                      </Text>
                      <View style={styles.interestContainer}>
                        {interestOptions.map((option, index) => (
                          <TouchableOpacity
                            key={index}
                            style={[
                              styles.interestButton,
                              {
                                backgroundColor:
                                  selectedInterestOption === option
                                    ? '#EA003D'
                                    : '#DDDDDD',
                              },
                            ]}
                            onPress={() => handleInterestOptionPress(index)}>
                            <Text
                              style={[
                                styles.interestText,
                                {
                                  color:
                                    selectedInterestOption === option
                                      ? '#fff'
                                      : '#000',
                                },
                              ]}>
                              {option}
                            </Text>
                          </TouchableOpacity>
                        ))}
                      </View>
                    </>
                  )}
                </View>
              </View>
            </View>
            <View />
          </ScrollView>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              backgroundColor: 'transparent',
              marginTop: windowHeight * -0.1,

              zIndex: 6,
            }}>
            <TouchableOpacity onPress={swipeLeft}>
              <Image
                style={{
                  resizeMode: 'contain',
                  height: windowHeight * 0.12,
                  width: windowWidth * 0.35,
                }}
                source={require('../../Assets/Maincancel.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={swipeRight}>
              <Image
                style={{
                  resizeMode: 'contain',
                  height: windowHeight * 0.12,
                  width: windowWidth * 0.35,
                }}
                source={require('../../Assets/Mainlike.png')}
              />
            </TouchableOpacity>
          </View>
          {/* // </Animated.View> */}
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    paddingRight: '14%',
    paddingLeft: '14%',
    justifyContent: 'space-between',
    marginTop: 'auto',
    height: windowHeight * 0.07,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewone: {
    alignItems: 'center',
    marginTop: windowHeight * 0.038,
    // justifyContent:'center',
    zIndex: 2,
    // backgroundColor:'grey'
  },
  imgeone: {
    height: windowHeight * 0.45,
    width: windowWidth * 0.8,
    // borderRadius: 20,
    resizeMode: 'contain',
    overflow: 'hidden',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  card: {
    backgroundColor: 'darkorange',
    width: windowWidth * 0.15,
    borderRadius: 20,
    marginLeft: windowWidth * 0.02,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameView: {
    left: windowWidth * 0.02,
  },
  name: {
    fontWeight: '700',
    fontSize: 24,
    color: '#000',
  },
  age: {
    fontWeight: '500',
    fontSize: 15,
    color: '#000',
  },
  namecard: {
    // height: windowHeight * 0.23,
    width: windowWidth * 0.8,
    justifyContent: 'center',
    marginLeft: windowWidth * 0.05,
    marginRight: windowWidth * 0.05,
    // marginBottom: windowHeight * 0.03,
    //  borderRadius: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  namecard1: {
    height: windowHeight * 0.2,
    width: windowWidth * 0.8,
    // justifyContent: 'center',
    marginLeft: windowWidth * 0.05,
    marginRight: windowWidth * 0.05,
    // marginBottom: windowHeight * 0.03,
    //  borderRadius: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  Icons: {
    resizeMode: 'contain',
    height: windowHeight * 0.07,
    width: windowWidth * 0.08,
  },
  logopng: {
    resizeMode: 'contain',
    height: windowHeight * 0.08,
    width: windowWidth * 0.4,
  },
  vectorbell: {
    resizeMode: 'contain',
    height: windowHeight * 0.04,
    width: windowWidth * 0.2,
  },
  otherScreen: {
    flex: 1,
  },
  otherScreen1: {
    // flex: 1,
    marginLeft: windowWidth * 0.05,
    marginRight: windowWidth * 0.05,
    marginBottom: windowHeight * 0.03,
    borderRadius: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 20,
    top: windowHeight * 0.02,
  },
  buttonView: {
    width: windowWidth * 0.2,
    marginLeft: windowWidth * 0.6,
    marginTop: -windowHeight * 0.04,
  },
  buttonViewotherscreen: {
    width: windowWidth * 0.2,
    marginLeft: windowWidth * 0.7,
  },
  cardContainer: {
    //  flex: 1,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  cardContent: {
    flex: 1,
  },
  cardText: {
    // marginBottom: windowHeight * 0.02,
    color: '#000',
    fontWeight: '500',
    fontSize: 18,
    marginTop: windowHeight * 0.01,
  },
  cardText1: {
    // marginBottom: 5,
    color: '#000',
    fontWeight: '500',
    fontSize: 16,
    marginTop: windowHeight * 0.01,
  },
  interestContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // marginTop: windowHeight * 0.03
  },
  interestButton: {
    borderRadius: 20,
    paddingVertical: 7,
    paddingHorizontal: 9,
    alignItems: 'center',
    margin: 2,
  },
  interestText: {
    fontSize: 16,
    fontWeight: '500',
  },
  imageScrollView: {
    flexDirection: 'row',
    shadowColor: '#DDD',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop:windowHeight * 0.02
  },
  imageItem: {
    width: windowWidth * 1,
    height: windowHeight * 0.6,

    borderRadius: 20,
  },
  dotsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
  },
  img: {
    height: windowHeight * 0.03,
    width: windowWidth * 0.03,
  },
  back: {
    marginTop: windowHeight * 0.06,
    marginLeft: windowWidth * 0.04,
  },
});

export default Home;
