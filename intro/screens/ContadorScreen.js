//1. imports: Zona de importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';


//2.- Main: Zona de componentes
export default function ContadorScreen() {

const[contador, setContador]= useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Contador:</Text>
      <Text style={styles.texto2}>{contador}</Text>

      <View style={styles.contenedorBotones}>
      <Button color='#4d0dc5ff' title="Agregar" onPress={()=>setContador(contador + 1)}/>
      
      <Button color='#0d72c5ff' title="Quitar" onPress={()=>setContador(contador - 1)}/>
      
      <Button color='#0dbfc5ff' title="Reiniciar" onPress={()=>setContador(0)}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

//3.- Estilos: Zona estetica y posicionamiento 
const styles = StyleSheet.create({
  container: {
    flex: 1, // se asigna espacio
    backgroundColor: '#c9a8f2ff',//color de fondo
    alignItems:'center',//alineación de componentes
    justifyContent:'center',// justificación del contenido
  },
  texto:{
    color:"#1100f97b",
    fontSize: 30,
    fontFamily:'Time New Roman',
    fontWeight:'bold', //en caso de que le texto sea en negrita
    fontStyle:'italic', //texto de lado
    textDecorationLine:'Line-through',//que el texto este tachado
  },
  texto2:{
    color:"#8ee3f4ff",
    fontSize: 40,
    fontFamily:'Courier',
    fontWeight:'900', //en caso de que le texto sea en negrita
    textDecorationLine:'underline',//que el texto este subrayado
  },
  contenedorBotones:{
    marginTop:15,// se alinean los componentes
    flexDirection:'row-reverse',//ordena los componentes en columnas, filas, y ordenamiento al reves
    gap: 15,//separación 
  },

});
