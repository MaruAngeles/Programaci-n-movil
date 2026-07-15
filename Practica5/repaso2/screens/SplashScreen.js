
/*Zona 1: Importancia de archivos y Componentes */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Perfil} from '../components/Perfil';

/*Zona 2: Main -Componentes */
export default function App() {
  return (
    <View style={styles.container}>
        <Text>Bienvenido a Restaurante</Text>
        <Text>Menú</Text>
      
      <tarjetaPlatillo style={styles.tarjetaRoja} nombre = "Milanesa con papas" precio = "$180" paisOrigen = "México" />
      
      <tarjetaPlatillo style={styles.tarjetaVerde} nombre = "Nuggets" precio = "$150" paisOrigen = "USA" />

      <tarjetaPlatillo style={styles.tarjetaAzul} nombre = "Pizza peperoni" precio = "$200" paisOrigen = "Italia" />

      <StatusBar style="auto" />
    </View>
  );
}

/*Zona 3:Estilos y posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  tarjetaVerde:{backgroundColor: '#C8A2C8',},
  tarjetaRoja:{backgroundColor: '#FF6B6B',},
  tarjetaAzul:{backgroundColor: '#87CEEB'}
});
