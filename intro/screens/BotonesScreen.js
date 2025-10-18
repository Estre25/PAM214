import { Text, StyleSheet, View, Pressable, TouchableOpacity, Switch, Image } from 'react-native'
import { useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native-web';

export default function BotonesScreen()
{
  const [accion, setAccion] = useState('nada');
  const [isDisabled, setIsDisabled] = useState(false);
  return (
      <View style={styles.container}>
        <Text>Activado:</Text>
        <Switch 
          onValueChange={() => setIsDisabled(!isDisabled)}
          value={!isDisabled}
        />
        <Text>{accion}</Text>
        <Pressable 
          onPressIn={()=>setAccion('Pressable In')}
          onPressOut={()=>setAccion('Pressable Out')}
          onLongPress={()=>setAccion('Pressable Long')}
          disabled={isDisabled}
        >
          {({pressed}) => (
            <View style={[styles.card, !pressed && styles.shadow]}>
              <Image 
                source={require('./descarga.jpeg')} 
                style={styles.image}
              />
              <Text>
                {pressed ? 'Tarjeta presionada.' : 'Tarjeta no presionada.'}
              </Text>
            </View>
          )}
        </Pressable>
        <TouchableOpacity
          activeOpacity={0.2}
          onPress={() => setAccion('Opacity')}
          disabled={isDisabled}
        >
          <View style={[styles.card, styles.shadow]}>
            <Image 
              source={require('./majin.jpeg')} 
              style={styles.image}
            />
            <Text>Esta es una tarjeta.</Text>
          </View>
        </TouchableOpacity>
        <TouchableWithoutFeedback
          onPress={() => setAccion('Without Feedback')}
          disabled={isDisabled}
        >
          <View style={[styles.card, styles.shadow]}>
            <Image 
              source={require('./frezeer.jpeg')} 
              style={styles.image}
            />
            <Text>Esta es una tarjeta.</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    ) 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: 200,
    height: 250,
    padding: 20,
    display: "flex",
    flexDirection: 'column',
    borderRadius: 8,
    margin: 15,
    backgroundColor: '#f9f9f9'
  },
  image: {
    flex: 1,
    width: '100%',
    borderRadius: 8,
    marginBottom: 8,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 10,
  },
});
