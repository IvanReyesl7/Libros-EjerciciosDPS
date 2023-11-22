import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { db } from "../firebase";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";

export default function Wishlist({ id, nombre, genero, precio, comprado }) {
  const Eliminar = () => {
    const docRef = doc(db, "WishList", id);
    deleteDoc(docRef);
  };

  const setComprado = () =>{
    const docRef = doc(db, "WishList", id);
    updateDoc(docRef, {comprado: true});
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
            <TouchableHighlight style={styles.ifComprado}>
              <Text style={styles.texto}>comprado</Text>
            </TouchableHighlight>
          ) : (
            <TouchableHighlight style={styles.NoComprado} onPress={ () =>{setComprado()}}>
              <Text style={styles.texto}>No comprado</Text>
            </TouchableHighlight>
          )}

          <TouchableHighlight
            style={styles.eliminar}
            onPress={() => {
              Eliminar();
            }}
          >
            <Text style={styles.texto}>Eliminar</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "600",
  },
  eliminar: {
    padding: 10,
    backgroundColor: "red",
    marginVertical: 20,
    borderRadius: 10,
  },
  texto: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  NoComprado: {
    padding: 10,
    backgroundColor: "gray",
    marginVertical: 20,
    borderRadius: 10,
  },
  ifComprado: {
    padding: 10,
    backgroundColor: "green",
    marginVertical: 20,
    borderRadius: 10,
  },
});
