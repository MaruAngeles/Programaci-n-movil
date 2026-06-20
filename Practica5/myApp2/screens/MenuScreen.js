/*Zona 1: Importancia de archivos y Componentes */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import React,{useState} from 'react';
import TarjetasScreen from './TarjetasScreen'
import Componente1 from './Componente1'
import { Button } from 'react-native-web';
import ComponentesNativosScreen from './ComponentesNativosScreen';


/*Zona 2: Main -Componentes */
export default function App() {
    const [screen,setScreen]= useState('manu');
    switch(screen){
        case 'tarjetas':
            return <TarjetasScreen/>;
        case 'componente1':
            return <Componente1/>;
        case 'componentesNativos':
            return <ComponentesNativosScreen />;

        case 'menu':
            default:   
            return (
                <View>
                    <Text>Menu de Practicas</Text>
                    <Button title= "Practica Tarjetas" onPress={()=> setScreen('tarjetas')} />
                        
                    <Button title= "Practica Componente1" onPress={()=> setScreen('componente1')} />

                    <Button title="Practica Componentes Nativos" onPress={() => setScreen('componentesNativos')}/>

                </View>
  ); //return
} //switch
} //funtion

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
