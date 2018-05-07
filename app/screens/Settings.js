import React,{Component} from 'react';
import { StyleSheet, ScrollView, Image, Text, View, Button, Alert } from 'react-native';
import { List, ListItem} from 'react-native-elements';
import {ScreenHeader} from '../components/ScreenHeader';
import LogoutButton from '../components/LogoutButton';
import ResetPassword from '../components/ResetPassword';
import {WHITE,TABBAR_GREY, GREY1, BACKGROUND_GREY, GREEN} from '../styles';

export default class extends Component {
constructor(props){
  super(props);
}

  render(){
    return(
        <View style={ styles.mainContainer}>
            <ScreenHeader label='Inställningar'/>
            <View style= {styles.contentContainer}>
            <ResetPassword/>
            <LogoutButton/>
            </View>
        </View>
 ); }
}
    
  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'stretch',
      backgroundColor: BACKGROUND_GREY,
    },contentContainer:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
    }
  });
