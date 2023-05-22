import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  Keyboard,
  Image,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';

import { styles } from './styles';
import { Card, Header } from '../../components/index';

const AgregarAmigo = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header
          title="Agregar"
          text="Ingresá el número de móvil de tu amig@ e invital@ a participar"
        />
        <Card style={styles.inputContainer}>
          <Text style={styles.textoRef}>Número de móvil</Text>
          <TextInput
            placeholder="11 32323232"
            style={styles.input}
            autoCorrect={false}
            minLength={6}
            blurOnSubmit
          />
        </Card>
        <Button color="#1E1E1E" title="Enviar" onPress={() => setModalVisible(true)} />

        <Modal
          animationType="slide"
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.containerModal}>
            <View style={styles.modalView}>
              <Text style={styles.textoModal}>¡Invitación enviada con éxito!</Text>
            </View>

            <View style={styles.contieneImg}>
              <Image
                source={require('../../../assets/Img/invitacioneEnviada.png')}
                style={{ width: 500, height: 200, resizeMode: 'contain' }}
              />
            </View>

            <View style={styles.buttonContainer}>
              <Button title="Inicio" color="#FCCE2A" onPress={() => navigation.navigate('')} />
            </View>
          </View>
        </Modal>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AgregarAmigo;
