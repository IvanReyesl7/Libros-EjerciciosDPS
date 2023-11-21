import {View,Text,StyleSheet, TextInput, ActivityIndicator,Button,Modal} from "react-native"
import React, {useState} from "react"
import { Firebase_auth } from "../firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { useNavigation } from "@react-navigation/native"


const Login = () =>{


    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [loading,setLoading] = useState(false);
    const auth = Firebase_auth;
    
    const navigation = useNavigation();
   

    const SignIn = async () => {
        
        setLoading(true);
        try{
            const response = await signInWithEmailAndPassword(auth,email,password);
            console.log(response);

            
            navigation.navigate("Libro");
        }catch(error){
            console.log(error);
            alert("Error al ingresar" + error.message);
        } finally {
            setLoading(false);
        }
   }

   const SignUp = async () => {
        
    setLoading(true);
    try{
        const response = await createUserWithEmailAndPassword(auth,email,password);
        console.log(response);
        alert("Revisa tu correo");
    }catch(error){
        console.log(error);
        alert("Error al ingresar" + error.message);
    } finally {
        setLoading(false);
    }
}


    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>App De Registro de Libros</Text>
            <TextInput value={email} style={styles.input} placeholder="Email" autoCapitalize="none" onChangeText={(text) => setEmail(text)}></TextInput>
            <TextInput value={password} secureTextEntry={true} style={styles.input} placeholder="password" autoCapitalize="none" onChangeText={(text) => setPassword(text)}></TextInput>
        
        { loading ? <ActivityIndicator size="large" color="#000ff"/>
         : <>

            <View style={{marginBottom:10}}><Button color="#0F4C75" title="LogIn" onPress={SignIn}></Button></View>
            <View><Button color="#0F4C75" title="Crea una Cuenta" onPress={SignUp}></Button></View>
         
           </>}

        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 20,
        flex: 1,
        justifyContent: "center"
    },
    input:{
        marginVertical: 4,
        height: 50,
        borderWidth: 1,
        borderRadius:4,
        padding: 10,
        backgroundColor: "#fff",
    },titulo:{
        fontSize:50,
        fontWeight: "700",
    }
})