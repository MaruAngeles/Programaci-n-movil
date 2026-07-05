import React, { useState } from 'react';
import {View, Text, TextInput, StyleSheet, ImageBackground, Pressable, FlatList, Alert, ActivityIndicator} from 'react-native';

export default function HomeScreen() {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [genero, setGenero] = useState('');
  const [libros, setLibros] = useState([]);
  const [cargando, setCargando] = useState(false);

  const agregarLibro = () => {
    if (titulo === '' || autor === '' || genero === '') {
      Alert.alert('Campos incompletos', 'Llena todos los campos por favor.');
      return;
    }

    setCargando(true);

    setTimeout(() => {
      const nuevoLibro = {
        id: Date.now().toString(),
        titulo: titulo,
        autor: autor,
        genero: genero,
      };

      setLibros([...libros, nuevoLibro]);

      setTitulo('');
      setAutor('');
      setGenero('');
      setCargando(false);

      Alert.alert('Libro agregado', 'Tu libro se guardó correctamente.');
    }, 4000);
  };

  return (
    <ImageBackground
      source={require('../assets/images/fondo.png')}
      style={styles.fondo}
      resizeMode="cover"
    >
      <View style={styles.capa}>
        <Text style={styles.tituloPrincipal}>Catálogo de Libros</Text>

        <TextInput
          style={styles.input}
          placeholder="Título del libro"
          placeholderTextColor="#7A7A7A"
          value={titulo}
          onChangeText={setTitulo}
        />

        <TextInput
          style={styles.input}
          placeholder="Autor"
          placeholderTextColor="#7A7A7A"
          value={autor}
          onChangeText={setAutor}
        />

        <TextInput
          style={styles.input}
          placeholder="Género"
          placeholderTextColor="#7A7A7A"
          value={genero}
          onChangeText={setGenero}
        />

        <Pressable style={styles.boton} onPress={agregarLibro}>
          <Text style={styles.textoBoton}>Agregar libro</Text>
        </Pressable>

        {cargando && (
          <View style={styles.cargando}>
            <ActivityIndicator size="large" color="#5D4037" />
            <Text style={styles.textoCargando}>Guardando libro...</Text>
          </View>
        )}

        <Text style={styles.total}>
            Total de libros: {libros.length}
        </Text>

        <FlatList
          data={libros}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.nombreLibro}>{item.titulo}</Text>
              <Text style={styles.info}>Autor: {item.autor}</Text>
              <Text style={styles.info}>Género: {item.genero}</Text>
            </View>
          )}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
  },

  capa: {
    flex: 1,
    padding: 25,
    backgroundColor: 'rgba(250, 245, 234, 0.80)',
  },

  tituloPrincipal: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#5D4037',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 25,
  },

  input: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#D7CCC8',
  },

  boton: {
    backgroundColor: '#8D6E63',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 5,
  },

  textoBoton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  cargando: {
    marginTop: 20,
    alignItems: 'center',
  },

  textoCargando: {
    marginTop: 8,
    color: '#5D4037',
    fontWeight: 'bold',
  },

  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#D7CCC8',
  },

  nombreLibro: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5D4037',
  },

  info: {
    fontSize: 15,
    color: '#6D4C41',
    marginTop: 4,
  },
  total: {
    marginTop: 15,
    marginBottom: 5,
    fontSize: 17,
    fontWeight: 'bold',
    color: '#5D4037',
  },
});