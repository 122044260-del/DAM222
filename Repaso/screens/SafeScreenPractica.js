/* 1. Zona de importaciones */
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

/* 2. Zona main */
export default function SafeScreen() {
  // Estado: Empieza en falso (no muestra el texto extra)
  const [mostrarTexto, setMostrarTexto] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Práctica de Uriel y Aaron</Text>

      {/* Si el estado es verdadero, aparece este texto */}
      {mostrarTexto && (
        <Text style={styles.textoOculto}>
          ¡Aquí está la información que estaba escondida!
        </Text>
      )}

      {/* Botón que invierte el estado al presionarlo */}
      <Button 
        title={mostrarTexto ? "Ocultar texto" : "Mostrar texto"}
        onPress={() => setMostrarTexto(!mostrarTexto)} 
      />

      <StatusBar style="auto" />
    </View>
  );
}

/* 3. Zona Estilos y posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center', 
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  textoOculto: {
    fontSize: 16,
    color: 'blue',
    marginBottom: 20,
  }
});