import React from 'react';
import { View, Text, Button, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';

import { styles } from './styles';
import { Card, Header } from '../../components/index';

const PantallaUno = ({ navigation }) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header title="Buscar amig@" />

        <Card style={styles.inputContainer}>
          <Text style={styles.title}>Ingresá teléfono de contacto</Text>
          <TextInput
            placeholder="011 33333333"
            style={styles.input}
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={11}
            autoCapitalize="none"
            blurOnSubmit
          />
        </Card>
        <Button title="Agregar" onPress={() => navigation.navigate('PantallaAmigo')} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default PantallaUno;
