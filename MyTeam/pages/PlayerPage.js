import React from 'react';
import { StyleSheet, Text,View, Image} from 'react-native';


export default class PlayerPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{width: 100, height: 100}}
          source={{uri: 'https://img.icons8.com/ios/50/000000/football2-filled.png'}}
        />
        <Text>{"\n"}</Text>
        <Text>שם פרטי:</Text>
        <Text>שם משפחה:</Text>
        <Text>טלפון:</Text>
        <Text>תאריך לידה:</Text>
        <Text>תפקיד בקבוצה:</Text>
        <Text>אזרחות:</Text>
        <Text>ארץ לידה:</Text>
      </View>
    );
  }
}



const styles = StyleSheet.create({
    button:{
     backgroundColor:'red',
     borderRadius: 15,
     alignItems: 'center', 
     justifyContent: 'center', 
     borderBottomColor: 'red', 
     borderBottomWidth: 2 
   },
   container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    txtInput :{
    textAlign: 'right',
    width:200,
    height : 50
   },
 });