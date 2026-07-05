import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { StatusBar } from "expo-status-bar";

import ActivityindicatorCarga from "../components/ActivityindicatorCarga";
import ActivityindicatorDemo from "../components/ActivityindicatorDemo";
import KeyboardAvoidingView from "../components/KeyboardAvoidingView";

export default function ComponentesNativos(){
    return(

        <View style={styles.pantalla}>

            <statusbar style="dark" />

            <ScrollView
                contentContainerStyle={styles.container}
                keyboardShouldPersistTaps="handled"
            >
                <Text style={styles.encabezado}> Practica 16</Text>
                <text style={styles.subtitulo}> Componentes Nativos: ActivityIndicator Y KeyboardAvoidingView</text>

                <ActivityIndicatorDemo />
                <ActivityIndicatorCarga />
                <KeyboardAvoidingView />
            </ScrollView>
        </View>



    )
}