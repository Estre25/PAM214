import { Text, StyleSheet, View, TextInput, Button, Alert } from 'react-native'
import React, {useState} from "react";

export default function TexTinput()
{
  const [nombre, setNombre] = useState('');
  const [password, setPassword] = useState('');
  const [comentario, setComentario] = useState('');
  // Esta alerta se ejecutara directamente en el celular
  const mostrarAlerta = () => {
    // trim para verificar que no hay espacios en blanco.
    if([nombre.trim(),password.trim(),comentario.trim()].includes('')){
      alert('ERROR, POR FAVOR RELLENA TODOS LOS CAMPOS.');//navegador
      Alert.alert('ERROR, POR FAVOR RELLENA TODOS CAMPO.');//celular
    }else{
      Alert.alert(`HOLA,${nombre}!`, 'TU NOMBRE HA SIDO REGISTRADO CON EXITO');
      alert(`HOLA,${nombre}!, TU NOMBRE HA SIDO REGISTRADO CON EXITO. TU CONTRASEÑA ES ${password}`);
      
      setNombre('');
      setPassword('');
      setComentario('');
    }
  };
  return (
      <View style= {styles.container}>
        <Text style= {styles.label}>INGRESA TU NOMBRE: </Text>
        <TextInput
        style={styles.input}
        placeholder='ESTRELLA'
        value={nombre}
        onChangeText={setNombre}
        keyboardType='default'
        autoCapitalize='words'
        />
         <TextInput
        style={styles.input}
        placeholder='password'
         value={password}
        onChangeText={setPassword}
        keyboardType='numeric'
        secureTextEntry={true}
        />
         <TextInput
        style={styles.input}
         value={comentario}
        onChangeText={setComentario}
        multiline={true}
        numberOfLines={4}
        />
        <Button
        title='Saludar'
        onPress={mostrarAlerta}
        color='purple' 
        />
      </View>
    ) 
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1, //Sirve para ver el borde del input
    borderRadius: 8, // Bordes redondeados
    paddingHorizontal: 15, // Espacio interno a los lados
    marginBottom: 20, // Espacio debajo del input
    fontSize: 16,
  },
});