import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../Screens/Login/SignUp';
import Login from '../Screens/Login/Login';
import SignUp from '../Screens/Login/SignUp';
import Gender from '../Screens/Gender/Gender';
import Information from '../Screens/Infomation/Information';
import HeightModal from '../Screens/Common modal/HeightModal';
import Orientation from '../Screens/Common modal/Orientation';
import InterestModal from '../Screens/Common modal/IntresetModal';
import PartnerInfomation from '../Screens/Infomation/PartnerInfomation';
import Looking from '../Screens/Looking/Looking';
import Home from '../Screens/Home/Home';
import AddPhoto from '../Screens/AddPhoto/AddPhoto';
import Chat from '../Screens/Chat/Chat';
import ChatList from '../Screens/Chat/ChatList';
import UserType from '../Screens/Gender/UserType';
import Header from '../Screens/Common modal/Header';
import Notification from '../Screens/Common modal/Notification';
import GenderPartner from '../Screens/Gender/GenderPartner';
import SingleLooking from '../Screens/Single/SingleLooking';
import SingleInformationField from '../Screens/Single/SingleInfomation';
const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
          <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Gender"
          component={Gender}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Information"
          component={Information}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HeightModal"
          component={HeightModal}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Orientation"
          component={Orientation}
          options={{headerShown: false}}
        />
          <Stack.Screen
          name="InterestModal"
          component={InterestModal}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="PartnerInfomation"
          component={PartnerInfomation}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Looking"
          component={Looking}
          options={{headerShown: false}}
        />
          <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="AddPhoto"
          component={AddPhoto}
          options={{headerShown: false}}
        />
          <Stack.Screen
          name="Chat"
          component={Chat}
          options={{headerShown: false}}
        />
           <Stack.Screen
          name="ChatList"
          component={ChatList}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="UserType"
          component={UserType}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Header"
          component={Header}
          options={{headerShown: false}}
        />
          <Stack.Screen
          name="Notification"
          component={Notification}
          options={{headerShown: false}}
        />
          <Stack.Screen
          name="GenderPartner"
          component={GenderPartner}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="SingleLooking"
          component={SingleLooking}
          options={{headerShown: false}}
        />
          <Stack.Screen
          name="SingleInformationField"
          component={SingleInformationField}
          options={{headerShown: false}}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
};
export default AppNavigator;
