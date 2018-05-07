import React from 'react';
import { RefreshControl, StyleSheet, Platform, Image, Text, TextInput, TouchableOpacity, View, Button, Alert, ActivityIndicator} from 'react-native';
import moment from 'moment/min/moment-with-locales';
import firebase from 'react-native-firebase';
import Timeline from 'react-native-timeline-listview';
import {TABBAR_GREY,GREEN, WHITE, GREY1, BACKGROUND_GREY, RED} from '../styles';


export default class BookingTimeList extends React.Component {
constructor({selectedDate, selectedRoom, selectedRoomID, listOfBookings}){
  super()
  // this.onEndReached = this.onEndReached.bind(this)
  // this.renderFooter = this.renderFooter.bind(this)
  this.onRefresh = this.onRefresh.bind(this)
  this.onEventPress = this.onEventPress.bind(this)

  this.data = listOfBookings;

  this.state = {
    isRefreshing: false,      
    waiting: false,
    date: selectedDate,
    roomID: selectedRoomID,
    selected: [],

  }


} 

componentDidMount(){
  this.onRefresh()
}

updateSelectedArray(data){
  var arrayOfSelected = this.state.selected;

  if (arrayOfSelected.includes(data)){
    arrayOfSelected.splice( arrayOfSelected.indexOf(data), 1 );
  } else {
    arrayOfSelected.push(data)
  }
  this.setState({selected: arrayOfSelected})

  return  arrayOfSelected;
}


onEventPress(data){

  const selectedArray = this.updateSelectedArray(data)

  if(!(data.lineColor == RED)){
    if(!(data.dotColor == GREEN)){
      data.dotColor = GREEN
      data.title = 'V A L D'
      data.lineWidth = 3
      data.circleSize = 30
    }
    else{
      data.dotColor = BACKGROUND_GREY
      data.title = 'Ledigt'
      data.lineWidth = 2
      data.circleSize = 20
    }

    this.onTimeChanged(selectedArray)    
  }
}

onTimeChanged(array) {
    this.props.onChange(array); // we notify our parent
}

onRefresh(){
  this.setState({isRefreshing: true});
  //refresh to initial data
  setTimeout(() => {
    //refresh to initial data
    this.setState({
      data: this.data,
      isRefreshing: false
    });
  }, 20);
}


// onEndReached() {
//   if (!this.state.waiting) {
//       this.setState({waiting: true});

//       //fetch and concat data
//       setTimeout(() => {
//         var newData = this.getBookings.bind();
//         //refresh to initial data
//         var data = this.state.data.concat(
//           [
//             newData
//           ]
//           )

//         this.setState({
//           waiting: false,
//           data: data,
//         });
//       }, 2000);
//   }
// }

renderFooter() {
  if (this.state.waiting) {
      return <ActivityIndicator />;
  } else {
      return null;
  }
}

render() {
  return (
    <View style={styles.container}>
      <Timeline 
         style={styles.list}
                              data={this.data}
                              circleSize={20}
                              circleColor= {GREEN}
                              dotColor = {BACKGROUND_GREY}
                              lineColor={GREEN}
                              timeContainerStyle={{minWidth:52, marginTop: -5}}
                              timeStyle={{textAlign: 'left', backgroundColor: BACKGROUND_GREY, color:WHITE, padding:5, borderRadius:13}}
                              descriptionStyle={{color: GREY1, alignSelf: 'center'}}
                              titleStyle= {{color: WHITE, alignSelf: 'center'}}
                              options={{
                                enableEmptySections: true, //solves bug
                                removeClippedSubviews: false, //should solve bug but doesn't
                                style:{paddingTop:5},
                                refreshControl: (
                                 <RefreshControl
                                   refreshing={this.state.isRefreshing}
                                   onRefresh={this.onRefresh}
                                 />
                               ),
                              }}
                              innerCircle={'dot'}
                              onEventPress={this.onEventPress}
                              separator = {true}
                              separatorStyle = {{backgroundColor:GREY1 }}
                              renderFullLine= {true}
      />
    </View>
  );
}
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  padding: 20,
  backgroundColor:BACKGROUND_GREY
},
list: {
  flex: 1,
  marginTop:20,
},
});