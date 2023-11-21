import {View,Text,StyleSheet, TextInput,Button,TouchableHighlight} from "react-native"
import React, {useState} from "react"
import { useNavigation } from "@react-navigation/native"
import { db } from "../firebase" 
import { deleteDoc, doc,updateDoc } from "firebase/firestore";

export default function Wishlist({id,nombre,genero,precio,comprado}) {
  const Eliminar = () =>{
    const docRef = doc(db,"WishList",id);
    deleteDoc(docRef);
}

const ifcomprado = () =>{
  const docRef = doc(db,"WishList",id);
  updateDoc(docRef);
}
const noComprado = () =>{
  const docRef = doc(db,"WishList",id);
  updateDoc(docRef,{
    comprado: false
  });
}

return (


<View>

    <View style={styles.card}>
        <Text style={styles.titulo}>Nombre del Libro:</Text>
        <Text>{nombre}</Text>
        <Text style={styles.titulo}>Genero:</Text>
        <Text>{genero}</Text>
        <Text style={styles.titulo}>Precio:</Text>
        <Text>${precio}</Text>
        <View>
          {comprado ? (
            <TouchableHighlight style={[styles.eliminar,{backgroundColor: "yellow"}]} onPress={()=>{ifcomprado()}} >
              <Text style={styles.texto}>No Comprado</Text>
            </TouchableHighlight>
          ):(
          <TouchableHighlight style={[styles.eliminar,{backgroundColor: "Green"}]} onPress={()=>{noComprado()}}>
            <Text style={styles.texto}>Comprado</Text>
          </TouchableHighlight>
          )}
    <TouchableHighlight style={styles.eliminar} onPress={()=>{Eliminar()}}>
        <Text style={styles.texto}>Eliminar</Text>
    </TouchableHighlight>
    </View>
        
    </View>
</View>
)
}

const styles = StyleSheet.create({
  container:{
      marginHorizontal: 20,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      
  },
  card:{  
      backgroundColor: "#fff",
      borderWidth: 1,
      borderRadius:4,
      padding: 10,
      marginBottom: 10,
  },
  titulo:{
      fontSize:20,
      fontWeight: "600",
  },
  eliminar: {
      padding: 10,
      backgroundColor: "red",
      marginVertical: 20,
      borderRadius: 10,
  
    },texto:{
      fontSize:15,
      fontWeight: "bold",
      color: "white",
      textAlign: "center",
    }
})