import React, {useState} from 'react';

import {
  View,
  Text,
  TextInput,
  Switch,
  Button,
  Alert,
  StyleSheet
} from 'react-native';



export default function RegistroEventoScreen(){


  const [nombre, setNombre] = useState('');
  const [carrera, setCarrera] = useState('');
  const [semestre, setSemestre] = useState('');

  const [taller, setTaller] = useState(false);
  const [constancia, setConstancia] = useState(false);
  const [deportes, setDeportes] = useState(false);



  const enviarRegistro = () => {


    // Validar campos vacíos
    if(
      nombre === '' ||
      carrera === '' ||
      semestre === ''
    ){

      Alert.alert(
        "Error",
        "Debes llenar todos los datos"
      );

      return;

    }



    // Validar semestre numérico
    if(isNaN(semestre)){


      Alert.alert(
        "Error",
        "El semestre debe ser numérico"
      );

      return;

    }



    // Mostrar registro
    Alert.alert(

      "Registro enviado",

      `Nombre: ${nombre}

Carrera: ${carrera}

Semestre: ${semestre}

Taller: ${taller ? "Sí" : "No"}

Constancia: ${constancia ? "Sí" : "No"}

Deportes: ${deportes ? "Sí" : "No"}`

    );


  };



  return(

    <View style={styles.container}>


      <Text style={styles.title}>
        Registro de Evento Universitario
      </Text>



      <TextInput

        style={styles.input}

        placeholder="Nombre completo"

        value={nombre}

        onChangeText={setNombre}

      />



      <TextInput

        style={styles.input}

        placeholder="Carrera"

        value={carrera}

        onChangeText={setCarrera}

      />



      <TextInput

        style={styles.input}

        placeholder="Semestre"

        keyboardType="numeric"

        value={semestre}

        onChangeText={setSemestre}

      />



      <Text>
        ¿Asistirá al taller?
      </Text>


      <Switch

        value={taller}

        onValueChange={setTaller}

      />




      <Text>
        ¿Requiere constancia?
      </Text>


      <Switch

        value={constancia}

        onValueChange={setConstancia}

      />




      <Text>
        ¿Participará en actividades deportivas?
      </Text>


      <Switch

        value={deportes}

        onValueChange={setDeportes}

      />



      <Button

        title="Enviar Registro"

        onPress={enviarRegistro}

      />



    </View>

  );

}




const styles = StyleSheet.create({

  container:{

    flex:1,

    justifyContent:'center',

    padding:20

  },


  title:{

    fontSize:24,

    textAlign:'center',

    marginBottom:25

  },


  input:{

    borderWidth:1,

    borderColor:'#999',

    padding:10,

    marginBottom:15,

    borderRadius:5

  }


});