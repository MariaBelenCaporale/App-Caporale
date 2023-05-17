import React from 'react';
import { View, Text, Button } from 'react-native';

import { styles } from './styles';

const PantallaStart = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>¡Bienvenid@!</Text>
      <Button title="Ingresar" onPress={() => navigation.navigate('PantallaTres')} />
    </View>
  );
};

export default PantallaStart;
