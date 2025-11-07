import { StatusBar } from 'expo-status-bar';
import { useState, useEffect} from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { Button, ImageBackground, SafeAreaView, ScrollView, TextInput } from 'react-native-web';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);

  const mostrarAlerta1 = () => {
    alert('Se ha guardado con exito');
  }
 
  const mostrarAlerta = () => {
    alert('Desea guardar o cancelar');
  }
   const mostrarAlerta2 = () => {
    alert('Se ha cancelado');
  }

   useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false); 
    }, 4000);
    return () => clearTimeout(timer); 
  }, []);

  if(showSplash){
    return(
      <View style={styles.splashContainer}>
        <text style={styles.splashText}>Bienvenido</text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground 
      source={{uri: 'https://wallpapercave.com/wp/wp3850825.jpg',}}
      style={styles.background}
      >
    <View style={styles.overlay}>
      
     <text style={styles.tiltle}>PERFIL PERSONAL</text>
      <text style={styles.label}>Estrella Marco Pérez</text>
      <text style={styles.label}>Ingenieria en Tecnologías de la información e innovación digital</text>
      <text style={styles.label}>Mi nombre es Estrella soy estudiante en la 
        Universidad Politecnica de Querétaro, soy de Santiago Mexquititlan Barrio , Amealco, Querétaro,
        y actualmente vivo en Ciudad Marquez
      </text>
      <text style={styles.label}>124050047@upq.edu.mx</text>
      <text style={styles.label}>4481218681</text>
      <Button 
      title='Editar Perfil'
      onPress={mostrarAlerta}
      color='blue'
      />
      <Button 
      title='Guardar'
      onPress={mostrarAlerta1}
      color='#a4daf5ff'
      />
      <Button 
      title='Cancelar'
      onPress={mostrarAlerta2}
      color='#a4daf5ff'
      />
    </View>
    </ImageBackground>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: '#1f1f1fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  splashText:{
    fontSize: 24,
    color: '#fff',
  },

  background:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay:{
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding:20,
    borderRadius: 10,
  },

  label:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fcfcfcff',
    marginBottom:10,
    textAlign: 'center',
  },

  tiltle:{
    fontSize: 25,
    color: '#fcfcfcff',
    marginBottom:10,
    textAlign: 'center',
  },

});
