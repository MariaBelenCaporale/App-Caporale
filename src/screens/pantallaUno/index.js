import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';

import { styles } from './styles';
import { Card, Header, NumberContainer } from '../../components/index';
import { theme } from '../../constants';

const PantallaUno = ({ onIngresar }) => {
  const [numberOption, setNumberOption] = useState('');

  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(null);

  const onHandlerChangeText = (text) => {
    setNumberOption(text.replace(/[^0-9]/g, ''));
  };

  const onHandlerConfirm = () => {
    const chosenNumber = Number(numberOption);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Número inválido', 'El número debe estar entre 1 y 99', [
        { text: 'Okay', style: 'destructive', onPress: () => setNumberOption('') },
      ]);
    } else {
      setConfirmed(true);
      setSelectedNumber(chosenNumber);
      setNumberOption('');
    }
  };

  const onHandlerIngresar = () => {
    onIngresar(selectedNumber);
  };
  const Confirmed = () =>
    confirmed ? (
      <Card style={styles.confirmedContainer}>
        <Text style={styles.confirmedTitle}>Edad ingresada</Text>
        <NumberContainer number={selectedNumber} />
        <Button title="Ingresar" onPress={onHandlerIngresar} color={theme.colors.secondary} />
      </Card>
    ) : null;

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header title="Bienvenid@" />
        <Text style={styles.title}>Pantalla uno, ingresar datos</Text>
        <Card style={styles.inputContainer}>
          <Text style={styles.label}>Ingresar edad</Text>
          <TextInput
            placeholder="Edad"
            style={styles.input}
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            autoCapitalize="none"
            onChangeText={onHandlerChangeText}
            value={numberOption}
            blurOnSubmit
          />
          <View style={styles.buttonContainer}>
            <Button
              title="Confirmar"
              onPress={onHandlerConfirm}
              color="#E02F05"
              disabled={numberOption === ''}
            />
          </View>
        </Card>
        <Confirmed />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default PantallaUno;
