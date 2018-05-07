import React from 'react';
import { StyleSheet, Platform, Image, Text, TextInput, TouchableOpacity, View, Button, Alert } from 'react-native';

import LoginForm from '../components/LoginForm';
import LoginHelp from '../components/LoginHelp';



export default class Login extends React.Component {
constructor(){
  super();
}

  
    render() {
      return (
        <View style={styles.mainContainer}>
        
         <Image source={require('../images/icon.png')} style={[styles.logo]} />
        <Text style={styles.welcome}>
          Välkommen till BookIT!{'\n'} 
        </Text>
        <LoginForm/> 
        <View style= {styles.help}>
        
        </View>
      </View>
      );
    }
  }

  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#5A6978',
    },
    logo: {
      height: 250,
      marginBottom: 16,
      width: 250,
    },
    welcome: {
      fontSize: 24,
      textAlign: 'center',
      margin: 10,
      color: '#FFFFFF',
    },
    help:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'space-around',
      
    }
  });