import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';


export default class GroupPage extends React.Component {
  constructor() {
    super(
      this.state = {
        isVisible: false
      }
    )
  }

  handlePicker = () => {
    this.setState({
      isVisible: false
    })
  }

  showPicker = () => {
    this.setState({
      isVisible: true
    })
  }

  hidePicker = () => {
    this.setState({
      isVisible: false
    })
  }

  render() {
    return (
      <View>
        <Text style={styles.text1}>אימון</Text>
        <Text style={styles.text1}>תאריך:</Text>
        <TouchableOpacity style={styles.button} onPress={this.showPicker}>
          <Text>Show DatePicker</Text>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={this.state.isVisible}
          onConfirm={this.handlePicker}
          onCancel={this.hidePicker}
          mode={'date'}
        />
        <Text style={styles.text1}>שעה:</Text>
        <TouchableOpacity style={styles.button} onPress={this.showPicker}>
          <Text>Show DatePicker</Text>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={this.state.isVisible}
          onConfirm={this.handlePicker}
          onCancel={this.hidePicker}
          mode={'time'}
        />
        <Text style={styles.text1}>מיקום:</Text>
        <Picker
          selectedValue={this.state.language}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ language: itemValue })
          }>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    flex: 1,
    textAlign: 'center',
  },
  button: {
    width: 250,
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 30,
    justifyContent: 'center',
    marginTop: 15
  },
});

