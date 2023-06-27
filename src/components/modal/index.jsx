import React from 'react';
import { Modal, View, Text, SafeAreaView, Image } from 'react-native';

import { styles } from './styles';
import lapiz from '../../../assets/Img/lapiz-14.png';
// import { Header } from '../../components/index';
import MiBoton from '../button';
import Header from '../header';

const CustomModal = ({ isVisible, animationType, selectedEvent, onCancel, onDelete }) => {
  return (
    <SafeAreaView>
      <Modal visible={isVisible} animationType={animationType}>
        <Header title="Detalles" />
        <View style={styles.container}>
          <View style={styles.detailContainer}>
            <View style={styles.detailDos}>
              <View style={styles.containerMen}>
                <Image
                  source={require('../../../assets/Img/lapiz-14.png')}
                  style={{ width: 70, height: 70, resizeMode: 'contain' }}
                />
                <Text style={styles.detailMessage}>¿Completaste la tarea?</Text>
                <Text style={styles.detailSub}>Si has finalizado la tarea, puedes eliminarla</Text>
              </View>
              <Text style={styles.selectedEvent}>{selectedEvent?.value}</Text>
              <View style={styles.buttonContainer}>
                <MiBoton title="Cancelar" onPress={onCancel} />
                <MiBoton title="Eliminar" onPress={() => onDelete(selectedEvent.id)} />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default CustomModal;
