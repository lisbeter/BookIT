import React,{Component} from 'react';
import { StyleSheet, Image, Text, View, Button, Alert, TouchableOpacity } from 'react-native';
import {Overlay} from 'react-native-elements';
import firebase from 'react-native-firebase';
import {GREEN, WHITE, GREY1} from '../styles';

export default class LoginHelp extends Component{
    constructor(){
        super();
        this.state= {
            isVisible: false,
            email: '',
        };
    }

    resetFirebasePassword(){
        alert('Ring Polia :)');
    }

    renderOverlay(){
        if(!this.state.isVisible){
            return null;
        }else{
            return(
                <View style= {styles.overlayContainer}>
                <Overlay
                isVisible={this.state.isVisible}
                >
                <Text>Hello from the other side!</Text>
                </Overlay> 
                </View>
        ); }
       }
       

    render(){
    return(
        <View >
        < TouchableOpacity onPress={ () => {this.resetFirebasePassword()}}> 
        <Text style= {styles.buttonTextStyle}> Glömt lösenord? </Text> 
        </TouchableOpacity>   
        </View>
    );
    }
}

const styles = StyleSheet.create({
    overlayContainer:{
        
    },
    buttonTextStyle: {
        color: GREY1,
        padding: 5,
        fontSize: 10,
    },
    buttonContainer: {
        margin: 10,
        borderRadius: 20,
        width: 250,
        padding: 1,
      },
    formContainer:{
        alignSelf: 'center',
        borderRadius: 20,
        margin: 5,
        borderColor: '#8190A5',
        borderWidth: 0.5,
        width: 250,
        paddingLeft: 40, 
    },
});