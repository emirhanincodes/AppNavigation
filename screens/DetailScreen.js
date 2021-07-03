import React from 'react'
import {View,Text,Button,StyleSheet} from 'react-native'


const DetailScreen = ({navigation}) => {
    return(
      <View style={{flex:1,alignItems: 'center',justifyContent: 'center'}}>
        <Text>Detail Screen</Text>
        <Button
        title="GO to detail screen again"
        onPress={()=> navigation.push("Detail Screen")}
        />
        <Button
        title="GO to home screen"
        onPress={()=> navigation.navigate("Home Screen")}
        />
        <Button
        title="GO to back"
        onPress={()=> navigation.goBack()}
        />
        <Button
        title="GO to first screen"
        onPress={()=> navigation.popToTop()}
        />
      </View>
    )
  }
export default DetailScreen;