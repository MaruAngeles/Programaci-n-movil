/*Zona 1: Importancia de archivos y Componentes */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button} from 'react-native';
import React,{useState, useEffect} from 'react';
import TarjetasScreen from './TarjetasScreen'
import Componente1 from './Componente1'
import ComponentesNativosScreen from './ComponentesNativosScreen';
import PressableScreen from './PressableScreen';
import SwitchScreen from './SwitchScreen';
import PracricaScroll from './PracticaScroll';
import { Componente4_0 } from './Componente4_0';
import ComponenteAlerta from './ComponenteAlerta'
import FlatListScreen from './FlatListScreen';
import SectionListScreen from './SectionListScreen';
import { Home } from './Home';
import {ImagenFondo} from './ImagenFondo';
import { SplashScreen } from './SplashScreen';
import ComponentesNativos from './ComponentesNativos';


/*Zona 2: Main -Componentes */
export default function App() {
    const [screen,setScreen]= useState('menu');

    useEffect(() => {
        if (screen === 'splashScreen') {
            const timer = setTimeout(() => {
                setScreen('home');
            }, 6000);
            return () => clearTimeout(timer);
        }
    }, [screen]);

    switch(screen){
        case 'tarjetas':
            return <TarjetasScreen/>;
        case 'componente1':
            return <Componente1/>;
        case 'Switch':
            return <SwitchScreen/>;
        case 'componentesNativos':
            return <ComponentesNativosScreen />;
        case 'Pressable':
            return <PressableScreen />;
        case 'Scroll':
            return <PracricaScroll />;
        case 'Componente4_0':
            return <Componente4_0 />;
        case 'ComponenteAlerta':
            return <ComponenteAlerta />;
        case 'FlatList':
            return <FlatListScreen />;
        case 'SectionList':
            return <SectionListScreen />;
        case 'imagenFondo':
            return <ImagenFondo style={styles.container}/>;
        case 'home':
            return <Home/>;
        case 'splashScreen':
            return <SplashScreen/>;
        case 'ComponentesNativos':
            return <ComponentesNativos/>;
        case 'menu':

        


        case 'menu':
            default:   
            return (
                <View style={styles.container}>
                    <Text style={styles.title}>Menu de Practicas</Text>
                    <Button title= "Practica Tarjetas" onPress={()=> setScreen('tarjetas')} />
                        
                    <Button title= "Practica Componente1" onPress={()=> setScreen('componente1')} />

                    <Button title="Practica Componentes Nativos" onPress={() => setScreen('componentesNativos')}/>

                    <Button title="Practica Switch" onPress={() => setScreen('Switch')}/>

                    <Button title="Pressable" onPress={() => setScreen('Pressable')}/>

                    <Button title="Scroll" onPress={() => setScreen('Scroll')}/>

                    <Button title="Práctica TextInput" onPress={() => setScreen('Componente4_0')}/>

                    <Button title="Práctica Componente Alerta" onPress={() => setScreen('ComponenteAlerta')}/>

                    <Button title="FlatList" onPress={() => setScreen('FlatList')}/>

                    <Button title="SectionList" onPress={() => setScreen('SectionList')}/>

                    <Button title='Imagen Bg' onPress={() => setScreen('imagenFondo')}/>

                    <Button title='Splash' onPress={() => setScreen('splashScreen')}/>

                    <Button title='ComponentesNativos' onPress={() => setScreen('ComponentesNativos')}/>
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
    flexDirection: 'column',
    gap: 10,
  },

  title: {
    fontSize: 24,
    marginBottom: 20,
  }
});
