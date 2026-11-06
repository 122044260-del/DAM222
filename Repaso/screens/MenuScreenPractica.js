/* 1. Zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,Button,View} from 'react-native';
import { useState } from 'react';
import Tarjetas from './Tarjetas';
import SafeScreen from './SafeScreen';


/* 2. Zona main */
export default function MenuScreen() {

    const [screen, setScreen] = useState('menu');

    switch (screen) {
        case 'Tarjetas':
          return <Tarjetas />;
      
        case 'SafeScreen': 
          return <SafeScreen />;
      
        case 'menu':
        default:
        return (
            <View style={styles.container}>

            <Text> Menu de Practica</Text>
            <Button title='Tarjetas' onPress={()=>setScreen('Tarjetas') }></Button>
            <Button title='safeAreaView' onPress={()=>setScreen('SafeScreen') }></Button>


             
            <StatusBar style="auto" />
            </View>
             );
    }//switch
}//funcion

/* 3. Zona Estilos y posicionamiento */
const styles = StyleSheet.create({
container: {

    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center', 
    justifyContent: 'center',
    
  },
  
});