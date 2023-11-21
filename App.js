import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "./components/login"
import Libro from './components/listLibros';
import addLibro from './components/AddLibro';
import AddWishedLibro from './components/AddWishedLibro';
import Wishlist from './components/Wishlist';
import ListWishlist from "./components/ListWishlist"
import { useState } from 'react';
import { onAuthStateChanged } from "firebase/auth"
import { useEffect } from 'react';
import { Firebase_auth } from './firebase';
 

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(()=> {
    onAuthStateChanged(Firebase_auth, (user)=>{
      console.log("user", user);
      setUser(user);
    })
  },[])

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        {user ? (
                  <Stack.Screen name='Libro' component={Libro} options={{headerShown: false}}></Stack.Screen>
        ) : (        <Stack.Screen name='Login' component={Login} options={{headerShown: false}}></Stack.Screen>)}
        <Stack.Screen name='addLibro' component={addLibro} options={{presentation:"modal"}}></Stack.Screen>
        <Stack.Screen name='WishList' component={Wishlist} options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name='AddWishedLibro' component={AddWishedLibro} options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name='ListWishList' component={ListWishlist} options={{headerShown:false}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});