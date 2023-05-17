import React from 'react';
import { View, Text, Button } from 'react-native';

import { styles } from './styles';

const PantallaTres = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitleBuscar}>
        Buscá a tu amig@ y compartí tareas, o ingresá y comenzá armando tu lista.
      </Text>
      <View style={styles.containerButton}>
        <Button title="Buscar" onPress={() => navigation.navigate('PantallaUno')} />
        <Button title="Iniciar" onPress={() => navigation.navigate('PantallaInicio')} />
      </View>
    </View>
  );
};

export default PantallaTres;
