import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function SplashScreen() {
  return (
    <View style={styles.container}>

      <Image
        source={require('../assets/images/logo.png')}
        style={styles.logo}
      />

      <Text style={styles.title}>
        Registro de Libros
      </Text>

      <Text style={styles.subtitle}>
        Bienvenido
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf5ea',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 180,
    height: 180,
    resizeMode: 'contain',
    marginBottom: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#5D4037',
  },

  subtitle: {
    fontSize: 18,
    color: '#8D6E63',
    marginTop: 10,
  },
});