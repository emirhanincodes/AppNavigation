import 'react-native-gesture-handler';
import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text, Button, SafeAreaView, StatusBar, StyleSheet, ScrollView, View } from 'react-native'
// import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from './screens/HomeScreen'
import DetailScreen from './screens/DetailScreen'

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer >
      {/* <Stack.Navigator screenOptions={{
        headerStyle:{
          backgroundColor:'#009387'
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
          fontWeight:'bold',
        }
      }}>
        <Stack.Screen name="Home Screen" component={HomeScreen} options={{
          title:'Overview'
          
        }} />
        <Stack.Screen name="Detail Screen" component={DetailScreen} />
      </Stack.Navigator> */}
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
export default App;