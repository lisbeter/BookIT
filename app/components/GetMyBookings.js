import React, {Component} from 'react';
import firebase from 'react-native-firebase';
import { TouchableHighlight, Button, FlatList, View, Text, TextInput, Alert } from 'react-native';
import { Icon, List, ListItem, SearchBar, Divider } from 'react-native-elements';
import Ionicons from "react-native-vector-icons/Ionicons";
import {GREEN, WHITE, BACKGROUND_GREY} from '../styles';

class GetMyBookings extends React.Component {
    constructor() {
        super();
        this.ref = firebase.firestore().collection('Users');
        this.unsubscribe = null;
        this.state = {
            loading: true,
            //listOfMyBookings: [],
            uid: firebase.auth().currentUser.uid,
            title: '',
            time: '',
            roomName: '',
            location: '',
            bookings: [],
        };
        this.ref = firebase.firestore().collection('Users').doc(this.state.uid).collection('bookings');
    }
    
    componentDidMount() {
        this.getInformation(); 
      }    
    

    // getInformation() {
    //     this.ref.get().then((res) =>  {
    //       // check and do something with the data here.
    //       if (res.empty) {
    //         alert('no documents found');
    //       } else {// do something with the data
    //         this.setState({loading:false});
    //         this.setState({
    //           bookings: res.get('bookings'),
    //         })
    //       }
    //     });
    //   }

      getInformation() {
        const bookings = [];
        this.ref.get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const roomName = doc.get('room');
            const information = doc.get('information');
            const bookingTitle = doc.get('title');
            const bookingStart = doc.get('startTime');
            const bookingEnd = doc.get('endTime');
            const bookingDate = doc.get('date');
                bookings.push({
                    title: bookingTitle,
                    room: roomName,
                    info: information,
                    id: doc.id,
                    time: bookingStart + '-' + bookingEnd,
                    date: bookingDate,
                });
          })
        })
        .catch((error) => {
            alert(error.toSting());
        });
          this.setState({ 
              bookings,
              loading: false,
              });
      }

    //   getLocation(locationKey) {
    //     var roomName = '';
    //     var roomRef = firebase.firestore().collection('Rooms').doc(locationKey);
    //     roomRef.get().then((res) => {
    //         if (res.empty){
    //             alert('no document found');
    //         } else {
    //           roomName = res.get('roomName'); 
    //           alert(roomName);
    //           return roomName;
    //         }
    //         }
    //     )
    //   }

      removeBooking(item) {
        const bookingArray = this.state.bookings;
         for (var i=0; i < bookingArray.length; i++){
             if (bookingArray[i] === item){
                var roomRef = firebase.firestore().collection('Rooms').doc(bookingArray[i].location).collection('bookings').doc(bookingArray[i].id).delete();
                var bookingsRef = firebase.firestore().collection('Bookings').doc(bookingArray[i].id).delete();
                var remove = this.ref.doc(bookingArray[i].id).delete();
                bookingArray.splice(i, 1);
                
            } 
        }
          this.setState({
            bookings : bookingArray
          });
    }       

      cancel(item) {
            Alert.alert(
                'Avboka reservation',
                'Är du säker på att du vill avboka ditt rum?',
                [
                  {text: 'Avbryt', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                  {text: 'Avboka', onPress: () => {this.removeBooking(item)}}
                ],

                { cancelable: true }) 
            }
     
render() {
    if (this.state.loading) {
        return null; // or render a loading icon
      }

    return (
    <View>
      <FlatList 
        style = {styles.flatList}
        data = {this.state.bookings}
        renderItem= {({item}) => 
            <View>
                    <Divider/>
                    <View style = {styles.bookingContainer}>
                    <TouchableHighlight
                    onPress= {() => this.cancel(item)}>
                    <View style = {styles.cancelContainer}>
                        <Ionicons
                            name='ios-close-circle-outline'
                            size={30}
                            color = {GREEN}/> 
                    </View>
                    </TouchableHighlight>
                    <View style= {styles.bookingTextContainer}> 
                    <Text style={styles.item}>{item.title} {'\n'}
                    <Text style={styles.subtitle}>{item.room} {'\n'} 
                    {item.date}: {item.time}
                    </Text>
                    </Text>
                    </View>
                    </View>
                    <Divider/>
            </View>}
                                
        
        keyExtractor={(item, index) => index.toString()}
        />
        
    </View>
    )
}
};

//ListHeaderComponent={this.renderHeader}
const styles = {
    bookingContainer:{
        flexDirection: 'column',
        flex:1,
    },
    bookingTextContainer:{
        flex:1,
        width:250,
    },
    buttonText: {
        fontSize: 18,
        color: GREEN,
    },
    cancelContainer: {
        alignSelf: 'flex-end',
        flex: 1,
        padding: 5,
        marginBottom: -40,
    },
    flatList: {
        width: 300,
    },
    item: {
      flex: 1,
      padding: 10,
      fontSize: 18,
      color: WHITE,
      
    },
    subtitle: {
        fontSize: 12,
    }
};

export default GetMyBookings;