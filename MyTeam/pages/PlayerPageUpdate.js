import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';



export default class PlayerPageUpdate extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button />
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: 'https://img.icons8.com/ios/50/000000/football2-filled.png' }}
        />
        <Text>{"\n"}</Text>
        <Text>שם פרטי:</Text>
        <TextInput style={styles.txtInput} onChange={this.txtChange}></TextInput>
        <Text>שם משפחה:</Text>
        <TextInput style={styles.txtInput} onChange={this.txtChange}></TextInput>
        <Text>טלפון:</Text>
        <TextInput style={styles.txtInput} onChange={this.txtChange}></TextInput>
        <Text>תאריך לידה:</Text>
        <TextInput style={styles.txtInput} onChange={this.txtChange}></TextInput>
        <Text>תפקיד בקבוצה:</Text>
        <TextInput style={styles.txtInput} onChange={this.txtChange}></TextInput>
        <Text>אזרחות:</Text>
        <TextInput style={styles.txtInput} onChange={this.txtChange}></TextInput>
        <Text>ארץ לידה:</Text>
        <TextInput style={styles.txtInput} onChange={this.txtChange}></TextInput>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: 'red',
    borderBottomWidth: 2
  },
  txtInput: {
    textAlign: 'right',
    width: 200,
    height: 50
  },
});