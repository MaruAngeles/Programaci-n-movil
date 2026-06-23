/* Zona 1: Importación de archivos y Componentes */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import AppScroll from './screens/PracticaScroll';



/*Zona 2: Main -Componentes */
export default function App() {
  return (
    <AppScroll />
  );
}


/*Zona 3:Estilos y posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});