import React, { useState, useEffect } from "react";
import {View,Text,TextInput,Button,Switch,Image,ImageBackground,StyleSheet,Alert,Platform,SafeAreaView,} from "react-native";

export default function Practica() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [aceptaTerminos, setAceptaTerminos] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);


  // Validar registro
  const registrar = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  
    if (nombre.trim() === "") {
      alert('ERROR, POR FAVOR COLOCA EL NOMBRE.');
      Alert.alert('ERROR, POR FAVOR COLOCA EL NOMBRE.');
      return;
    }
    if (correo.trim() === "") {
     alert('ERROR, POR FAVOR COLOCA EL CORREO.');
      Alert.alert('ERROR, POR FAVOR COLOCA EL CORREO.');
      return;
    }
    if (!emailRegex.test(correo)) {
      alert('ERROR, POR FAVOR COLOCA EL CORREO DE MANERA CORRECTA.');
      Alert.alert('ERROR, POR FAVOR COLOCA EL CORREO DE MANERA CORRECTA.');
      return;
    }
    if (!aceptaTerminos) {
      alert('FALTAN LOS TERMINOS, DEBES ACEPTAR LOS TERMINOS.');
      Alert.alert('FALTAN LOS TERMINOS, DEBES ACEPTAR LOS TERMINOS.');
      return;
    }else{
      alert(`Registro exitoso, Hola ${nombre}, tu registro fue completado.\nCorreo: ${correo}`);
      Alert.alert(`Registro exitoso, Hola ${nombre}, tu registro fue completado.\nCorreo: ${correo}`);
    

    setNombre("");
    setCorreo("");
    setAceptaTerminos(false);
    }
  };

  // Pantalla Splash (2 segundos)
  if (showSplash) {
    return (
      <View style={styles.splashContainer}>
        <Image
          source={require("./logo.jpeg")} // <- Imagen local
          style={[styles.splashImage,{width: "40%",height: "30%" }]}
        />
      </View>
    );
  }

  // Pantalla principal
  return (
      <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require("./fondo.jpeg")} // <-Imagen local
        style={styles.background}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>Registro de Usuario</Text>

         
          <TextInput
            style={styles.input}
            placeholder="Nombre completo"
            placeholderTextColor="#999"
            value={nombre}
            onChangeText={setNombre}
          />
          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
            value={correo}
            onChangeText={setCorreo}
          />

         
          <View style={styles.switchContainer}>
            <Text style={{ color: "#fff" }}>Aceptar términos:</Text>
            <Switch
              value={aceptaTerminos}
              onValueChange={setAceptaTerminos}
              thumbColor={aceptaTerminos ? "#00c853" : "#ccc"}
            />
          </View>

         
          <Button title="Registrar" color="#6200ee" onPress={registrar} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

// Estilos
const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  splashImage: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  splashText: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
 background: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  width: "100%",    // ocupa todo el ancho
  height: "100%",   // ocupa toda la altura
},
  overlay: {
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: 20,
    borderRadius: 15,
    width: "90%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },
});
