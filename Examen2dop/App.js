import { StatusBar } from 'expo-status-bar';
import { useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ImageBackground, SafeAreaView, TextInput } from 'react-native-web';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const[nombre, setNombre] = useState('');
  const[carrera, setCarrera] = useState('');
  const[biografia, setBiografia] = useState('');
  const[correo, setCorreo] = useState('');
  const[telefono, setTelefono] = useState('');

  const mostrarAlerta = () => {

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
      source={{uri: '',}}
      style={styles.background}
      >
    <View style={styles.container}>
      <text style={styles.label}>Nombre completo</text>
      
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
    backgroundColor: 'rgba(0,0,0,0.5',
    padding:20,
    borderRadius: 10,
  },

  title:{
    fontSize: 28,
    color: '#fff',
    marginBottom:10,
    textAlign: 'center',
  },

});
