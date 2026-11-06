/* 1 - Zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, ActivityIndicator, ImageBackground } from 'react-native';
import { useState, useEffect } from 'react';

/* Imagen de fondo */
const imagenFondo = require('../assets/fondo.jpeg');

/* 2 - Zona del main */
export default function ImageBackgroungScreen() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <ImageBackground source={imagenFondo} style={styles.background} resizeMode="cover">
        <View style={styles.splashContainer}>
          <ActivityIndicator
            size="large"
            color="#f0f0f0"
            style={{ marginTop: 20 }}
          />
          <Text style={styles.splashLoading}>Cargando...</Text>
        </View>
      </ImageBackground>
    );
  }

  return (
    <ImageBackground source={imagenFondo} style={styles.background} resizeMode="cover">
      <View style={styles.overlay}>
        <Text style={styles.titulo}>BIENVENIDOS</Text>
      </View>
      <StatusBar style="light" />
    </ImageBackground>
  );
}

/* 3 - Zona estilos y posicionamiento */
const styles = StyleSheet.create({
  // Estilos de la imagen de fondo
  background: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Estilos del Splash (capa oscura sobre la imagen)
  splashContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  splashLoading: {
    color: '#d1fae5',
    fontSize: 12,
    marginTop: 20,
  },
  // Estilos de la presentacion principal
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 20,
    paddingHorizontal: 40,
    borderRadius: 15,
    alignItems: 'center',
  },
  titulo: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
