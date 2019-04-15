import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';




export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txtValue1: 'תעודת זהות',
      txtValue2: 'סיסמא'
    }
  }

  txtChange = (id) => {
    this.setState({ txtValue: id.target.value });
  };

  btnEnter = () => {
    this.props.navigation.navigate('Home');
  };



  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: 'https://img.icons8.com/ios/50/000000/football2-filled.png' }}
        />
        <Text>{"\n"}</Text>
        <TextInput style={styles.txtInput} value={this.state.txtValue1} onChange={this.txtChange}></TextInput>
        <TextInput style={styles.txtInput} value={this.state.txtValue2} onChange={this.txtChange}></TextInput>
        <Button style={styles.button} title='כניסה' onPress={this.btnEnter} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
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
