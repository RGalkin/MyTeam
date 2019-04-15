import React from 'react';
import { StyleSheet,View,Text,Touchableopacity,Image} from 'react-native';


export default class GroupPage  extends React.Component {
  goToPlayer = () => {
    this.props.navigation.navigate('PlayerPage');
    };
  
    render() {
      return (
        <View>
              <Text style={styles.text1}>קבוצה</Text>
              <Touchableopacity onPress= {this.goToPlayer}>
                 <Image
                  style={{width: 100, height: 100}}
                 source={{uri: 'https://img.icons8.com/ios/50/000000/football2-filled.png'}}
                  />
               </Touchableopacity>
        </View>
      );
    }
}


const styles = StyleSheet.create({
  text1: {
    flex: 1,
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  }
});

