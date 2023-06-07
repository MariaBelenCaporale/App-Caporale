import React from 'react';
import { View, Text, Button } from 'react-native';

import { styles } from './styles';

const Bienvenida = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Bienvenid@ </Text>
      {/* <Button title="Ingresar" onPress={() => navigation.navigate('Home')} />
      <Button title="Registrate" onPress={() => navigation.navigate('Registro')} /> */}
    </View>
  );
};

export default Bienvenida;
