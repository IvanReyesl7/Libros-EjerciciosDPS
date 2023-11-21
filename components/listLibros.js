import {View,Text,StyleSheet,Button, ScrollView,TouchableHighlight} from "react-native"
import React, {useState} from "react"
import { useNavigation } from "@react-navigation/native"
import Libro from "./libro";
import { db } from "../firebase" 
import { collection, onSnapshot,orderBy,query } from "firebase/firestore";
import { useEffect } from "react";


export default function listLibros() {
    const navigation = useNavigation();
    const [libros,setLibros] = useState([]);

    useEffect(() => {
        const collectionRef = collection(db, "Libros");
        const q = query(collectionRef);
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          
          setLibros(
            querySnapshot.docs.map((doc) => ({
                id: doc.id,
                nombre: doc.data().nombre,
                genero: doc.data().genero,
                precio: doc.data().precio,
                publicacion: doc.data().publicacion,
                autor: doc.data().autor,
            }))
          );
        });
        return unsubscribe; 
      }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Libros</Text>
      <ScrollView>{libros.map((product) => (
          <Libro key={product.id} {...product} />
        ))}</ScrollView>
      <View style={{flexDirection: "row"}}>
      <TouchableHighlight style={styles.btnAddLibro} onPress={()=>{navigation.navigate("addLibro")}}>
        <Text style={styles.texto}>AGREGAR LIBRO</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.btnWishList} onPress={()=>{navigation.navigate("ListWishList")}}>
        <Text style={styles.texto}>WISHLIST</Text>
      </TouchableHighlight>
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
    input:{
        marginVertical: 4,
        height: 50,
        borderWidth: 1,
        borderRadius:4,
        padding: 10,
        backgroundColor: "#fff",
    },
    titulo:{
        fontSize:40,
        fontWeight: "600",
    },btnAddLibro: {
        padding: 10,
        backgroundColor: "#0F4C75",
        marginVertical: 10,
        borderRadius: 10,
        marginRight: 20,
      },
      btnWishList: {
        padding: 10,
        backgroundColor: "#0F4C75",
        marginVertical: 10,
        borderRadius: 10,
    
      },texto:{
        fontSize:15,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
      }
})