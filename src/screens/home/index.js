import React from 'react';
import { View, Text, Keyboard, TouchableWithoutFeedback, Image } from 'react-native';

import { styles } from './styles';

const Home = () => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.containerDatos}>
          <Image
            source={require('../../../assets/Img/cuentaCreada.png')}
            style={{ width: 200, height: 200, resizeMode: 'contain' }}
          />
          <Text style={styles.textoDatos}>Bienvenid@</Text>
          <Text style={styles.textoDatos}>Nombre de Usuario</Text>
        </View>
        <Image
          source={require('../../../assets/Img/ranking.png')}
          style={{ width: 200, height: 200, resizeMode: 'contain' }}
        />
        <View style={styles.containerRanking} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Home;
