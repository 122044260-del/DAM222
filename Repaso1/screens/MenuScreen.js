/* 1. Zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View} from 'react-native';
import { useState } from 'react';
import Tarjetas from './Tarjetas';
import SafeScreen from './SafeScreen';
import PressableSwitch from './PresableSwitch';
import RegistroScreen from './RegistroScreen';

/* 2. Zona main */
export default function MenuScreen() {

    /* Creacion de una variable llamada screen */
    const[screen, setScreen] = useState('menu');

    switch(screen){
        case 'tarjetas':
            return <Tarjetas></Tarjetas>
        case 'safeScreen':
            return <SafeScreen></SafeScreen>
        case 'pressable':
            return <PressableSwitch></PressableSwitch>
        case 'textinput':
            return <RegistroScreen></RegistroScreen>
        case 'menu':
            default: 

            return (

                <View style={styles.container}>

                    <Text> Menu de Practicas </Text>
                    <Button title='Tarjetas' onPress={ ()=> setScreen('tarjetas') }></Button>

                    <Button style={styles.boton} title='SafeAreaView & ScrollView' onPress={ ()=> setScreen('safeScreen') }></Button>
                    <Button style={styles.boton} title='Pressable & switch' onPress={ ()=> setScreen('pressable') }></Button>
                    <Button style={styles.boton} title='TextInput & Alert' onPress={ ()=> setScreen('textinput') }></Button>

                    <StatusBar style="auto" />

                </View>
            );
    }
}

/* 3. Zona Estilos y posicionamiento */
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
  },

  boton: {
    margin: 10,
  },
});