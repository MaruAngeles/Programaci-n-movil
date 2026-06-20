import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  ActivityIndicator,
  StyleSheet
} from 'react-native';

export default function ActivityIndicatorCarga() {

  const [loading, setLoading] = useState(false);
  const [mensaje, setMensaje] = useState('');

  const cargarDatos = () => {

    setLoading(true);
    setMensaje('Cargando información...');

    setTimeout(() => {
      setLoading(false);
      setMensaje('Datos cargados correctamente');
    }, 3000);

  };

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Simulación de carga
      </Text>

      <Button
        title="Obtener Datos"
        onPress={cargarDatos}
      />

      <ActivityIndicator
        size="large"
        color="green"
        animating={loading}
      />

      <Text style={styles.texto}>
        {mensaje}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 20,
    marginBottom: 20,
  },
  texto: {
    marginTop: 20,
    fontSize: 16,
  },
});
