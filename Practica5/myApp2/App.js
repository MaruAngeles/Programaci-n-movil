 /*Zona 1: Importancia de archivos y Componentes */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import MenuScreen from './screens/MenuScreen';
import PracticaScroll from './screens/PracticaScroll';



 /*Zona 2: Main -Componentes */
 export default function App() {
  return (
   <MenuScreen></MenuScreen>
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
 });