import React from 'react';
import { View, Text, Button } from 'react-native';

import { styles } from './styles';
import { theme } from '../../constants';

const PantallaAmigo = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>¡Listo!</Text>
      <Text style={styles.subtitle}>
        Hemos agregado a tu amigo. Recibirás una notificación en cuanto acepte la solicitud.
      </Text>
      <View style={styles.containerButton}>
        <Button
          buttonColor={theme.colors.primary}
          title="Tareas"
          onPress={() => navigation.navigate('PantallaInicio')}
        />
      </View>
    </View>
  );
};

export default PantallaAmigo;
