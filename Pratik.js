import React from 'react'
import { View, Text,ScrollView, ImageBackground, StyleSheet} from 'react-native'
import { TextInput } from 'react-native-paper';

export default function MainScreen() {

  return (   
      <>
      <Text>{/*  */}

     <ImageBackground source={require('./img/image2.png')} style={{height:500,width:350,flex:1 } }></ImageBackground> 
      </Text>
     <Text style={styles.image}>Let's go starteed! Enter your mobile number</Text>

     
     <TextInput style={{marginTop:25, marginHorizontal:20,  }}
      label="Enter Your Mobile No"
      
    //   value={text}
    //   onChangeText={text => setText(text)}
    />
    
      </>
     )
}

const styles = StyleSheet.create({
    
    image: {
     justifyContent: "center",
     color:"black",
     textAlign:"center",
     marginTop:20,
     fontWeight:"bold"
           
    },
    
  });

