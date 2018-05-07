import React from 'react';
import { StyleSheet, Platform, Image, Text, TextInput, TouchableOpacity, View, Button, Alert } from 'react-native';
import {TABBAR_GREY,GREEN, WHITE, GREY1} from '../../styles';
import Ionicons from "react-native-vector-icons/Ionicons";



export const InfoButton = (alertText) => {

    return (
        <TouchableOpacity onPress = {alert.bind(alertText)}>

             <Ionicons name='ios-information-circle-outline' size={25} color={GREY1} style={styles.button}/>
             
        </TouchableOpacity>
    );
};

  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      flexDirection:'column',
      backgroundColor: '#5A6978',
      justifyContent: 'space-around',
      alignItems: 'stretch',

    },
    button: {
      left: 100,
      top: 5,
      position: 'relative',
    }
  });