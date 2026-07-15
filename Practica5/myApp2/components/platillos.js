import React from 'react';

import {View,Text,StyleSheet} from 'react-native';

export function platillos(props){
return(
    <View style={styles.card}>
        <Text>
        Nombre:{props.nombre}
        </Text>
        
        <Text>
        precio:{props.precio}
        </Text>

        <Text>
        paisOrigen:{props.paisOrigen}
        </Text>
    </View>
    )
}


const styles=StyleSheet.create({
    card:{
    backgroundColor:'#6BCB77',
    padding:15,
    margin:10,
    borderRadius:10
    }
});