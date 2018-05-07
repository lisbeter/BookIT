import React from 'react';
import { TabNavigator, TabBarBottom, StackNavigator, SwitchNavigator } from 'react-navigation';
import Ionicons from "react-native-vector-icons/Ionicons";
import {WHITE,GREEN,GREY1,TABBAR_GREY,BACKGROUND_GREY} from '../styles';

import Login from '../screens/Login';
import Rooms from '../screens/Rooms';
import Booking from '../screens/Booking';
import BookingStart from '../screens/BookScreens/BookingStart';
import BookingDetails from '../screens/BookScreens/BookingDetails';
import BookingOverview from '../screens/BookScreens/BookingOverview';
import BookingSummary from '../screens/BookScreens/BookingSummary';
import BookingTime from '../screens/BookScreens/BookingTime';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';


export const BookingNavigator = StackNavigator({
  
    BookingStart: {
    screen: BookingStart,
    navigationOptions: {
      title: 'När vill du boka?',
      headerLeft: null,
    },
  },
  BookingDetails: {
    screen: BookingDetails,
    navigationOptions: ({navigation}) => ({
      title: navigation.state.params.date,
  })
  },
  BookingTime: {
    screen: BookingTime,
    navigationOptions: ({navigation}) => ({
      title: 'Välj tid'
  })
  },
  BookingOverview: {
    screen: BookingOverview,
    navigationOptions: ({navigation}) => ({
      title: navigation.state.params.room,
  })
  },
  BookingSummary: {
    screen: BookingSummary,
    navigationOptions: ({navigation}) => ({
      title: null,
      header: null, 
  })
  },
  }, {
    navigationOptions: ({
      headerStyle: {
        backgroundColor: '#5A6978',
        borderBottomColor: WHITE,
        borderBottomWidth: 1,
      },
      headerTintColor: WHITE,
      headerBackTitle: 'Tillbaka',
    })
  
});

export const SignedOut = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null, //hides header
    }
  }
});

export const SignedIn = TabNavigator ({
  Rooms: {
    screen: Rooms,
    navigationOptions: {
      tabBarLabel: 'Sök ledigt'
  }},
    Booking: {
      screen: Booking,
      navigationOptions: {
        tabBarLabel: 'Boka rum'}},
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'Dina bokningar'}
    },
    Settings: {
        screen: Settings,
        navigationOptions: {
          tabBarLabel: 'Inställningar'}
      }
    },
    {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor}) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Rooms') {
          iconName = `ios-search${focused ? '' : '-outline'}`;
        } else if (routeName === 'Booking') {
          iconName = `ios-add-circle${focused ? '' : '-outline'}`;
        }else if (routeName === 'Profile') {
          iconName = `ios-contact${focused ? '' : '-outline'}`;
        }else if (routeName === 'Settings') {
          iconName = `ios-settings${focused ? '' : '-outline'}`;
        }

        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: GREEN, 
      inactiveTintColor: WHITE,
      style: {
      backgroundColor: TABBAR_GREY,
      },
    },
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
   
  }
);

export const createRootNavigator = (signedIn = false) => {
  return SwitchNavigator(
    {
      SignedIn: {
        screen: SignedIn
      },
      SignedOut: {
        screen: SignedOut
      }
    },
    {
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  );
};