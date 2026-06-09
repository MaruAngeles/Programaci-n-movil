/*Zona 1: Importancia de archivos y Componentes */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Saludo} from './components/Saludo';
import { Saludos2 } from './components/Saludos2';
import {Perfil} from './components/Perfil';

/*Zona 2: Main -Componentes */
export default function App() {
  return (
    <View style={styles.container}>
      
      <Perfil nombre = "Maru" carrera = "Ing" materia = "Móvil" cuatri = "9"/>
      
      <Perfil nombre = "Maru" carrera = "Ing" materia = "POO" cuatri = "6"/>
      {/* <Text> ------------------------------------- </Text>
      <Image source={require('./assets/wave.png')}/>
      <Text>Hola Mundo React Native </Text>
      <Text> ------------------------------------- </Text>
      <Saludo/>

      <Text> ------------------------------------- </Text>
      <Saludos2/> */}
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
  },
});
