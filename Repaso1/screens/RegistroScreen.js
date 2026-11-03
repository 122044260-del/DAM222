import React, { useState } from 'react';
import { View, Text, TextInput, Switch, Button, Alert, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

export default function RegistroScreen() {
  const [nombre, setNombre] = useState('');
  const [carrera, setCarrera] = useState('');
  const [semestre, setSemestre] = useState('');

  const [taller, setTaller] = useState(false);
  const [constancia, setConstancia] = useState(false);
  const [deportes, setDeportes] = useState(false);

  const enviarRegistro = () => {
    if (nombre.trim() === '' || carrera.trim() === '' || semestre.trim() === '') {
      Alert.alert('Campos incompletos', 'Debes llenar todos los campos.');
      return;
    }

    if (isNaN(semestre)) {
      Alert.alert('Error', 'El semestre debe ser un número.');
      return;
    }

    Alert.alert(
      'Registro enviado',
      `Nombre: ${nombre}\nCarrera: ${carrera}\nSemestre: ${semestre}\nTaller: ${taller ? 'Sí' : 'No'}\nConstancia: ${constancia ? 'Sí' : 'No'}\nDeportes: ${deportes ? 'Sí' : 'No'}`
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.titulo}>Registro de Evento Universitario</Text>

        <TextInput
          style={styles.input}
          placeholder="Nombre completo"
          value={nombre}
          onChangeText={setNombre}
        />
        <TextInput
          style={styles.input}
          placeholder="Carrera"
          value={carrera}
          onChangeText={setCarrera}
        />
        <TextInput
          style={styles.input}
          placeholder="Semestre"
          value={semestre}
          onChangeText={setSemestre}
          keyboardType="numeric"
        />

        <Text style={styles.subtitulo}>Opciones</Text>

        <View style={styles.filaSwitch}>
          <Text>¿Asistirás al taller?</Text>
          <Switch value={taller} onValueChange={setTaller} />
        </View>
        <View style={styles.filaSwitch}>
          <Text>¿Requiere constancia?</Text>
          <Switch value={constancia} onValueChange={setConstancia} />
        </View>
        <View style={styles.filaSwitch}>
          <Text>¿Participarás en deportes?</Text>
          <Switch value={deportes} onValueChange={setDeportes} />
        </View>

        <View style={styles.botonContainer}>
          <Button title="Enviar Registro" onPress={enviarRegistro} color="#007BFF" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 30,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },
  filaSwitch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  botonContainer: {
    marginTop: 30,
    borderRadius: 8,
    overflow: 'hidden',
  },
});
