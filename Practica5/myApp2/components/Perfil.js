import {View, Text, Button, StyleSheet} from 'react-native';
import React, {Fragment, useState} from 'react';

// Perfil usando desestructuracion
export const Perfil = ({nombre, carrera, materia, cuatri,style}) => {
    const [mostrar, setMostrar] =useState(false)

    return(
        <View style={[estilos.tarjeta,style]}>
            <Text style={estilos.nombre}> {nombre}</Text>


            {/* De un lado la función y del otro lo que se quiere ocultar */}
            {mostrar &&
            // <> fragment para renderizar mas rapido 
            <> 
            <Text style={estilos.carrera}> {carrera} </Text>
            <Text style={estilos.otroTexto}> {materia}</Text>
            <Text style={estilos.otroTexto}> {cuatri}</Text>
            </>
            }
            {/* onPress detecta que estas presionando el boton y cambia de verdadero a falso o viceversa */}
            <Button title =" Ver Perfil" onPress={()=> setMostrar(!mostrar)}/>
        </View>
    )
}


const estilos= StyleSheet.create({
    nombre:{
        fontSize: 24, //tamaño de la letra
        fontWeight: 600, // negritas de 100 a 900
        textTransform: 'uppercase', //se pasa a mayusculas

    },
    carrera:{
        fontSize:18,
        color:'white',
        fontFamily:'Roboto',
    },
    otroTexto:{
        fontSize:12,
        fontFamily:'Courier',
        fontStyle:'italic', 
    },
    tarjeta:{
        borderWidth:2,
        padding:25,
        margin:20,

    },
});




export const Menu = (props) => {
     return(
         <View>
             <Text> {props.nombre}</Text>
             <Text> {props.precio} </Text>
             <Text> {props.paisOrigen}</Text>
         </View>
     )
 }