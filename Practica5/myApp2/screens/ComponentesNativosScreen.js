import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

import ActivityIndicator from '../components/ActivityIndicator';
import KeyboardAvoiding from '../components/KeyboardAvoiding';

export default function ComponentesNativosScreen() {

  return (
    <ScrollView style={styles.container}>

      <ActivityIndicator />

      <KeyboardAvoiding />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
});
