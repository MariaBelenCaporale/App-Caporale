import React from 'react';
import { View, Keyboard, TouchableWithoutFeedback } from 'react-native';

import { styles } from './styles';
import { Header } from '../../components/index';

const Home = ({ navigation }) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header title="Home" />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Home;
