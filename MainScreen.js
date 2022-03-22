// import React from 'react'
// import { View, Text,ScrollView, ImageBackground,Image } from 'react-native'

// export default function MainScreen() {
//   return (
//   <ScrollView style={{flex:1, backgroundColor:'#fffff',}}>
//     <Text>

//     {/* <ImageBackground source={require('/image1.png')}>
//     </ImageBackground> */}
//     </Text>
//     <Image style={{height:200}  } source={(require('./img/image2.png'))
//                     }
//                     >

//                     </Image>
  
//   </ScrollView>
//   )
// }
import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const image = { uri: "https://reactjs.org/logo-og.png" };

const MainScreen = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Inside</Text>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
});

export default MainScreen;