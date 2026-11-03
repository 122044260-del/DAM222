/* 1. Zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, SafeAreaView } from 'react-native';
import { Perfil } from '../components/Perfil';

/* 2. Zona main */
export default function Tarjetas() {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Usamos contentContainerStyle para los elementos dentro del scroll */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        <Perfil style={styles.tarjeta1} nombre="alan" materia="movil" /> 
        <Perfil style={styles.tarjeta2} nombre="gus" cuatri="4"/>
        <Perfil style={styles.tarjeta3} nombre="wendy" carrera="TIID"/>
        
        {/* Tarjetas repetidas para forzar el tamaño de la pantalla y que el scroll funcione */}
        <Perfil style={styles.tarjeta1} nombre="uriel" materia="movil" /> 
        <Perfil style={styles.tarjeta2} nombre="aaron" cuatri="4"/>
        <Perfil style={styles.tarjeta3} nombre="carina" carrera="TIID"/>

        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

/* 3. Zona Estilos y posicionamiento */
const styles = StyleSheet.create({
  safeArea: {
    flex: 1, // Obligatorio aquí para que la pantalla no se quede en blanco
    backgroundColor: '#fff',
  },
  scrollContainer: {
    // Se eliminó flex: 1 y flexDirection: 'row' para permitir el scroll vertical
    alignItems: 'center', 
    paddingVertical: 30,
    gap: 20, // Genera espacio automático entre cada tarjeta
  },
  tarjeta1: {
    backgroundColor: 'green',
  },
  tarjeta2: {
    backgroundColor: 'yellow',
  },
  tarjeta3: {
    backgroundColor: 'pink',
  },
});