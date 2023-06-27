import React, { useState } from 'react';
import { TextInput, Button, View } from 'react-native';

import { styles } from './styles';
import { theme } from '../../constants';

const Input = ({
  onAgregarDetalle,
  placeholder,
  value,
  onChangeText,
  buttonTitle,
  onHandlerButton,
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
      />

      <Button title={buttonTitle} color={theme.colors.black} onPress={onHandlerButton} />
    </View>
  );
};
export default Input;
