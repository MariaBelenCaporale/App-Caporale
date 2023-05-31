import React from 'react';
import { View, Text, Keyboard, TouchableWithoutFeedback } from 'react-native';

import { styles } from './styles';

const Home = () => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.textoEnter}>Bienvenid@!</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Home;
