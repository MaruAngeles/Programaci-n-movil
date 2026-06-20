/*Zona 1: Importancia de archivos y Componentes */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';


/*Zona 2: Main -Componentes */
export default function App() {
  return (
    <View>
        <Text>Aquí va la primer práctica de Componentes Nativos</Text>
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
});
