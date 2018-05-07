import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  View
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {GREEN, GREY1, WHITE, TABBAR_GREY, BACKGROUND_GREY} from '../styles';

export default class BookingCalendar extends Component {
  constructor({ initialDate }) {
    super();
    this.state = {
      selected: initialDate,
    };
    
  }

   onDayPress(day) {
    this.setState({
      selected: day.dateString
    })
    this.onDateChanged(day)
  }

  onDateChanged(day) {
    var newDate = day.dateString;
    this.props.callbackParent(newDate); // we notify our parent
  }

  

  render() {
    return (
      <View style={styles.container}>
        <Calendar
          onDayPress={this.onDayPress.bind(this)}
          style={styles.calendar}
          hideExtraDays
          markedDates={{[this.state.selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}}}
          displayLoadingIndicator
          firstDay={1} //week starts on monday instead of sunday

          theme={{
            calendarBackground: BACKGROUND_GREY,
            textSectionTitleColor: GREEN,
            dayTextColor: WHITE,
            todayTextColor: GREEN,
            selectedDayTextColor: WHITE,
            monthTextColor: WHITE,
            selectedDayBackgroundColor: GREEN,
            arrowColor: WHITE,
            // textDisabledColor: 'red',
            'stylesheet.calendar.header': {
              week: {
                marginTop: 5,
                flexDirection: 'row',
                justifyContent: 'space-between'
              }
            }
          }}
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  calendar: {
    borderTopWidth: 5,
    paddingTop: 5,
    borderBottomWidth: 5,
    borderColor: GREY1,
    height: 'auto',
  },
  text: {
    textAlign: 'center',
    borderColor: '#bbb',
    padding: 5,
    backgroundColor: WHITE,
  },
  // container: {
  //   flex: 1,
  //   backgroundColor: 'gray'
  // }
});