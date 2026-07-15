import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  FlatList,
  ActivityIndicator,
  Alert,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";

export default function App() {

  //===========================
  // ESTADOS (useState)
  //===========================

  // Guarda el nombre que escribe el usuario
  const [nombre, setNombre] = useState("");

  // Guarda la edad
  const [edad, setEdad] = useState("");

  // Arreglo donde se almacenarán los registros
  const [personas, setPersonas] = useState([]);

  // Controla si aparece el círculo de carga
  const [loading, setLoading] = useState(false);

  //===========================
  // useEffect
  //===========================

  // Se ejecuta UNA SOLA VEZ cuando inicia la aplicación
  useEffect(() => {
    Alert.alert("Bienvenido", "La aplicación inició correctamente.");
  }, []);

  //===========================
  // Función Agregar
  //===========================

  const agregarPersona = () => {

    // Validar que no existan campos vacíos
    if (nombre === "" || edad === "") {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return;
    }

    // Validar que la edad sea numérica
    if (isNaN(edad)) {
      Alert.alert("Error", "La edad debe ser un número");
      return;
    }

    // Mostrar ActivityIndicator
    setLoading(true);

    // Esperar 2 segundos
    setTimeout(() => {

      // Crear objeto
      const nuevaPersona = {
        id: Date.now().toString(),
        nombre: nombre,
        edad: edad,
      };

      // Agregar al arreglo
      setPersonas([...personas, nuevaPersona]);

      // Limpiar cajas de texto
      setNombre("");
      setEdad("");

      // Ocultar ActivityIndicator
      setLoading(false);

      // Mostrar mensaje
      Alert.alert("Éxito", "Persona agregada correctamente");

    }, 2000);
  };

  //===========================
  // INTERFAZ
  //===========================

  return (

    // ScrollView permite hacer scroll si la pantalla es pequeña
    <ScrollView>

      <View style={styles.container}>

        {/* Imagen */}
        <Image
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
          style={styles.imagen}
        />

        {/* Título */}
        <Text style={styles.titulo}>
          REPASO REACT NATIVE
        </Text>

        {/* Nombre */}
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={nombre}
          onChangeText={setNombre}
        />

        {/* Edad */}
        <TextInput
          style={styles.input}
          placeholder="Edad"
          keyboardType="numeric"
          value={edad}
          onChangeText={setEdad}
        />

        {/* Botón */}
        <Pressable
          style={styles.boton}
          onPress={agregarPersona}
        >
          <Text style={styles.textoBoton}>
            Agregar Persona
          </Text>
        </Pressable>

        {/* ActivityIndicator */}
        {loading && (
          <ActivityIndicator
            size="large"
            color="blue"
            style={{ marginBottom: 20 }}
          />
        )}

        {/* FlatList */}
        <FlatList

          data={personas}

          keyExtractor={(item) => item.id}

          renderItem={({ item }) => (

            <View style={styles.tarjeta}>

              <Text style={styles.textoLista}>
                Nombre: {item.nombre}
              </Text>

              <Text style={styles.textoLista}>
                Edad: {item.edad}
              </Text>

            </View>

          )}

        />

      </View>

    </ScrollView>

  );
}

//===========================
// ESTILOS
//===========================

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
    backgroundColor: "#F2F2F2",
  },

  imagen: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginBottom: 15,
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: "#999",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },

  boton: {
    backgroundColor: "#2196F3",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },

  textoBoton: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

  tarjeta: {
    backgroundColor: "white",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#DDD",
  },

  textoLista: {
    fontSize: 18,
  },

});