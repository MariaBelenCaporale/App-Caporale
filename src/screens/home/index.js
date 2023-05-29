import React from 'react';
import { View, Text, Keyboard, TouchableWithoutFeedback, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { styles } from './styles';
import { Header } from '../../components/index';
import { setName } from '../../redux/actions/actions';
const Home = ({ navigation, route }) => {
  const { name } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.textoEnter}>Bienvenid@ {name}!</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Home;
