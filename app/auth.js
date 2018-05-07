import React, { Component } from 'react';
import { StyleSheet, ScrollView, Image, Text, View, Button, Alert, TouchableOpacity } from 'react-native';
import { AsyncStorage } from "react-native";
import {firebase, firestore} from 'react-native-firebase';

export const USER_KEY = "no key yet";

export const onSignIn = () => AsyncStorage.setItem(USER_KEY, 'true');

export const onSignOut = () => AsyncStorage.removeItem(USER_KEY); 

//-------------------- FIREBASE----------------------------------

export const updateUserKey = () => firebase.auth().currentUser.uid;



export const getUserInformation= () => {
    
    this.ref.get().then((res) =>  {
      // check and do something with the data here.
      if (res.empty) {
        alert('no documents found');
      } else {// do something with the data
        this.setState({loading:false});
        this.setState({
          firstname: res.get('firstname'),
          lastname: res.get('lastname'),
          email: res.get('email'),
        });
      }
    });
  }