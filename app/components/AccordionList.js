import React, {Component} from 'react';
import { StyleSheet, Platform, Image, Text, TextInput, TouchableHighlight, View, Button, Alert, Picker } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';

import {TABBAR_GREY,GREEN, WHITE, GREY1} from '../styles';
import BookingCalendar from '../components/BookingCalendar';
import RoomPicker from '../components/RoomPicker';



  
  export default class AccordionList extends Component {
    constructor(){
        super();
        this.state = {
            activeSection: false,
            collapsed: true,
            room: '',
            date: '',
          };   
    }
  
      toggleExpanded = () => {
        this.setState({ collapsed: !this.state.collapsed });
      }
    
      setSection(section) {
        this.setState({ activeSection: section });
      }
    
      renderHeader(section, i, isActive) {
        return (
          <Animatable.View duration={400} style={[styles.header, isActive ? styles.active : styles.inactive]} transition="backgroundColor">
            <Text style={styles.headerText}>{section.title} </Text> 
          </Animatable.View>
        );
      }
    
      renderContent(section, i, isActive) {
        return (
          <Animatable.View duration={400}  style={[styles.content, isActive ? styles.active : styles.inactive]} transition="backgroundColor">
            {section.content}
          </Animatable.View>
        );
      }

      

      onRoomChanged(newRoom) {
        this.setState({room:newRoom, activeSection:false})
      }
    
      render() {
       var SECTIONS = [
          {
            title: 'Välj datum',
            content: <BookingCalendar 
            initialDate={this.state.date} 
            callbackParent={(newDate) => this.onDateChanged(newDate)}
            />,
            icon: 'ion-ios-calendar-outline',
          },
          {
            title: 'Välj rum',
            content: <RoomPicker 
            initialRoom={this.state.room} 
            callbackParent={(newRoom) => this.onRoomChanged(newRoom)}/>,
            icon: 'ion-ios-home-outline',
          }
        ];

        return (
          <View style={styles.container}>
          <View style = {styles.dataContainer}>
            <Text style={styles.data}>Vald dag:  {this.state.date} {'\n'} 
                Valt rum: {this.state.room} {'\n'} </Text> 
          </View>
            <Accordion
              activeSection={this.state.activeSection}
              sections={SECTIONS}
              renderHeader={this.renderHeader}
              renderContent={this.renderContent}
              duration={400}
              onChange={this.setSection.bind(this)}
            />
          </View>
        );
      }
    }
  
  const styles = StyleSheet.create({
    container: {
     // flex: 1,
    },
    title: {
      textAlign: 'center',
      fontSize: 40,
      fontWeight: '300',
      marginBottom: 20,
    },
    header: {
      backgroundColor: TABBAR_GREY,
      padding: 10,
      borderBottomColor: WHITE,
      borderBottomWidth: 1,
    },
    headerText: {
      textAlign: 'left',
      fontSize: 16,
      fontWeight: '500',
      color: WHITE,
    },
    content: {
      flex:1,
      backgroundColor: '#fff',
    },
    active: {
      backgroundColor: GREEN,
    },
    inactive: {
      backgroundColor: GREY1,
    },
    selectTitle: {
      fontSize: 14,
      fontWeight: '500',
      padding: 10,
    },
    data: {
      color:WHITE,
      fontSize: 16,
      textAlign: 'center'
    }
  });