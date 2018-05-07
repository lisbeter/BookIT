import React from 'react';
import { StyleSheet, Platform, Image, Text, ScrollView , View, Button, Alert } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import Ionicons from "react-native-vector-icons/Ionicons";
import {ScreenHeader} from '../components/ScreenHeader';
import ListOfBookings from '../components/ListOfBookings';

export default class Rooms extends React.Component {
  

    render() {
      return (
        
        <View style={styles.mainContainer}>
        <ScreenHeader label='Lediga rum'/>
        <ListOfBookings/>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      //justifyContent: 'center',
      //alignItems: 'center',
      backgroundColor: '#5A6978',
      //flexDirection: 'row'
    }
  });