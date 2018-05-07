import React from 'react';
import { StyleSheet, Platform, Image, Text, TextInput, TouchableOpacity, View, Button, Alert } from 'react-native';
import {ScreenHeader} from '../components/ScreenHeader';
import BookingCalendar from '../components/BookingCalendar';
import {TABBAR_GREY,GREEN, WHITE, GREY1, BACKGROUND_GREY} from '../styles';
import Ionicons from "react-native-vector-icons/Ionicons";
import {InfoButton} from '../components/Buttons/InfoButton';
import {BookingNavigator} from '../config/router'


export default class Booking extends React.Component {
  constructor(){
    super();
    this.state = {
      date: 'false',
      time: 'false',
      rooms: 'false',
  }
  }
  
    render() {
      return (
        <BookingNavigator/>
      );
    }
  }

  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      flexDirection:'column',
      backgroundColor: BACKGROUND_GREY,
      justifyContent: 'space-around',
      alignItems: 'stretch',

    },
    rightButton: {
      left: 100,
      top: 5,
      position: 'relative',
    },
  });