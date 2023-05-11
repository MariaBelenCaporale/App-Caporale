import React from 'react';
import { Modal, View, Text, Button } from 'react-native';

import { styles } from './styles';

const CustomModal = ({ isVisible, animationType, selectedEvent, onCancel, onDelete }) => {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <Modal visible={isVisible} animationType={animationType}>
      <View style={styles.container}>
        <Text style={styles.title}>Detalles</Text>
        <View style={styles.detailContainer}>
          <Text style={styles.detailMessage}>¿Querés eliminar la tarea?</Text>
          <Text style={styles.selectedEvent}>{selectedEvent?.value}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Cancel" color="#52528C" onPress={onCancel} />
          <Button title="Delete" color="#52528C" onPress={() => onDelete(selectedEvent.id)} />
=======
=======
>>>>>>> f0985db6932a683aeaf005d6ab114dac0aebbd6b
    <Modal style={styles.customModal} visible={isVisible} animationType={animationType}>
      <View style={styles.container}>
        <Text style={styles.title}>Detalle de tarea</Text>
        <View style={styles.detailContainer}>
          <Text style={styles.detailMessage}>Nombre de tarea</Text>
          <Text style={styles.selectedEvent}>{selectedEvent?.value}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Volver" color="#1E1E1E" onPress={onCancel} />
          <Button title="Eliminar" color="#1E1E1E" onPress={() => onDelete(selectedEvent.id)} />
<<<<<<< HEAD
>>>>>>> f0985db6932a683aeaf005d6ab114dac0aebbd6b
=======
>>>>>>> f0985db6932a683aeaf005d6ab114dac0aebbd6b
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
