import React from 'react';
import { Modal, View, Text, Button } from 'react-native';

import { styles } from './styles';

const CustomModal = ({ isVisible, animationType, selectedEvent, onCancel, onDelete }) => {
  return (
    <Modal visible={isVisible} animationType={animationType}>
      <View style={styles.container}>
        <Text style={styles.title}>Detalle de tarea</Text>
        <View style={styles.detailContainer}>
          <Text style={styles.detailMessage}>¿Completaste la tareas?</Text>
          <Text style={styles.selectedEvent}>{selectedEvent?.value}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Cancel" color="#E02F05" onPress={onCancel} />
          <Button title="Delete" color="#E02F05" onPress={() => onDelete(selectedEvent.id)} />
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
