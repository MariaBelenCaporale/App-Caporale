import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import { styles } from './styles';

const MiBoton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </View>
  </TouchableOpacity>
);

export default MiBoton;
