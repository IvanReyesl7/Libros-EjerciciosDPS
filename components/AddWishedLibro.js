import {View,Text,StyleSheet, TextInput, ActivityIndicator,Button} from "react-native"
import React, {useEffect, useState} from "react"
import { useNavigation } from "@react-navigation/native"
import { db } from "../firebase" 
import { addDoc, collection } from "firebase/firestore";

export default function AddWishedLibro() {

    const navigation = useNavigation();
    const [nuevoWishList,setNuevoWishlist] = useState({
        nombre:"",
        genero:"",
        precio: 0,
        comprado: false,

    })

  
    const enviar = async () => {
        await addDoc(collection(db,"WishList"), nuevoWishList)
        navigation.goBack();
    }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Ingresar Nuevo Libro</Text>
      <TextInput style={styles.input} placeholder="Nombre del Libro" onChangeText={(texto) =>{ setNuevoWishlist({...nuevoWishList,nombre:texto})}}/>
      <TextInput style={styles.input} placeholder="Genero" onChangeText={(texto) =>{ setNuevoWishlist({...nuevoWishList,genero:texto})}}/>
      <TextInput style={styles.input} placeholder="Precio" onChangeText={(texto) =>{ setNuevoWishlist({...nuevoWishList,precio:texto})}} keyboardType="number-pad"/>
      <Button title="Agregar Libro" onPress={()=>{enviar()}}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
      marginHorizontal: 20,
      flex: 1,
      justifyContent: "center",
      
  },
  input:{
      marginVertical: 4,
      height: 50,
      borderWidth: 1,
      borderRadius:4,
      padding: 10,
      backgroundColor: "#fff",
  },
  titulo:{
      fontSize:30,
      fontWeight: "600",
      //EIRF
  }
})