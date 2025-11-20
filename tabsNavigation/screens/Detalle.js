import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Detalle({ navigation }) { 
    return(
        <View style={styles.container}>
            <Text style={styles.mainText}>Detalles de Usuario</Text>
            <Text style={styles.subText}>Usando navegación Stack</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    mainText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#007bff',
        marginBottom: 20,
        textAlign: 'center',
    },
    subText: {
        fontSize: 18,
        color: '#666',
        textAlign: 'center',
    },
});