import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  Modal,
  Image,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { styles } from './styles';
import { Card, Header } from '../../components/index';
import { setName } from '../../redux/actions/actions';

const Registro = ({ navigation }) => {
  const { name } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  // const [name, setName] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header
          title="Registro"
          text="Completá los datos
y comenzá a crear tareas"
        />
        <Card style={styles.inputContainer}>
          <Text style={styles.textoRef}>Nombre y apellido</Text>
          <TextInput
            placeholder="Delfina Paesani"
            style={styles.input}
            autoCorrect={false}
            minLength={6}
            blurOnSubmit
          />
          <Text style={styles.textoRef}>Crear Usuario</Text>
          <TextInput
            placeholder="Delfi"
            style={styles.input}
            autoCorrect={false}
            onChangeText={(value) => dispatch(setName(value))}
            minLength={6}
            blurOnSubmit
          />
        </Card>
        <Button color="#1E1E1E" title="Registrarme" onPress={() => setModalVisible(true)} />

        <Modal
          animationType="slide"
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.containerModal}>
            <View style={styles.modalView}>
              <Text style={styles.textoModal}>¡Felicidades {name}!</Text>
              <Text style={styles.parrafoModal}>Tu cuenta ha sido creada con éxito</Text>
            </View>

            <View style={styles.contieneImg}>
              <Image
                source={require('../../../assets/Img/cuentaCreada.png')}
                style={{ width: 500, height: 200, resizeMode: 'contain' }}
              />
            </View>

            <View style={styles.contieneAgregar}>
              <Text style={styles.textoPregunta}>¿Deseas agregar un amigo?</Text>
            </View>

            <View style={styles.buttonContainer}>
              <Button title="Agregar" color="#1E1E1E" onPress={() => navigation.navigate('Home')} />
              <Button
                title="Ahora no"
                color="#1E1E1E"
                onPress={() => navigation.navigate('Home')}
              />
            </View>
          </View>
        </Modal>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Registro;
