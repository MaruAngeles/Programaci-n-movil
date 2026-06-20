import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  StyleSheet
} from 'react-native';

export default function KeyboardAvoiding() {

  const [nombre, setNombre] = useState('');

  return (

    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios'
        ? 'padding'
        : 'height'}
      style={styles.container}
    >

      <Text style={styles.titulo}>
        KeyboardAvoidingView
      </Text>

      <TextInput
        placeholder="Escribe tu nombre"
        style={styles.input}
        value={nombre}
        onChangeText={setNombre}
      />

      <Text>
        Nombre: {nombre}
      </Text>

    </KeyboardAvoidingView>

  );
}

const styles = StyleSheet.create({
  container:{
    padding:20,
    flex:1
  },
  titulo:{
    fontSize:20,
    marginBottom:20
  },
  input:{
    borderWidth:1,
    padding:10,
    marginBottom:20
  }
});
