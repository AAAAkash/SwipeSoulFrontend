import {View, Text,TouchableOpacity,Image,StyleSheet,Dimensions} from 'react-native';
import React from 'react';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const Header = ({navigation}) => {
  
  return (
    <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
    <View style={styles.back}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
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
        }}
        source={require('../../Assets/logo.png')}
      />
    </View>
    <View />
  </View>
  );
};
const styles = StyleSheet.create({
    img : {
        height: windowHeight * 0.03,
        width: windowWidth * 0.03,
      },
      back: {
        marginTop: windowHeight * 0.02,
        marginLeft: windowWidth * 0.04,
      },
});

export default Header;
