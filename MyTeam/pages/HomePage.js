import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default class HomePage extends React.Component{

  btnCalendar = () => {
    this.props.navigation.navigate('Calendarp');
  };

  btnGroup = () => {
    this.props.navigation.navigate('GroupPage');
  };

  btnTrainingHistory = () => {
    this.props.navigation.navigate('TrainingHistory');
  };

  btnPlayerGallery = () => {
    this.props.navigation.navigate('PlayerGallery');
  };


  render() {
    return (
      <View style={styles.container}>
        <Button title='לוח שנה' onPress={this.btnCalendar} />
        <Button title='קבוצה' onPress={this.btnGroup} />
        <Button title='היסטוריית אימונים' onPress={this.btnTrainingHistory} />
        <Button title='גלריה' onPress={this.btnPlayerGallery} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Button: {
    borderColor: 'red',

  }
});
