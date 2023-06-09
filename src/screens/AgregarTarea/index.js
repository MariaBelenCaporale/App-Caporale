import { useState } from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';

import { styles } from './styles';
import { Events, Input, CustomModal, HeaderImagen, MiBoton } from '../../components/index';
import { theme } from '../../constants';

const AgregarTarea = ({ navigation }) => {
  const [text, setText] = useState('');
  const [events, setEvents] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const onAddEvent = () => {
    if (text.length === 0) return;
    setEvents([
      ...events,
      {
        id: Math.random().toString(),
        value: text,
      },
    ]);
    setText('');
  };

  const onHandlerEvent = (id) => {
    setModalVisible(!modalVisible);
    const selectedEvent = events.find((event) => event.id === id);
    setSelectedEvent(selectedEvent);
  };

  const onHandlerCancelModal = () => {
    setModalVisible(!modalVisible);
    setSelectedEvent(null);
  };

  const onHandlerDeleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
    setModalVisible(!modalVisible);
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <HeaderImagen
          title="Agregar tarea"
          source={require('../../../assets/Img/tareaColor.png')}
          style={{
            width: 120,
            height: 120,
            resizeMode: 'contain',
          }}
        />

        <Input
          buttonColor={theme.colors.rosa}
          buttonTitle="Agregar"
          onChangeText={(text) => setText(text)}
          onHandlerButton={onAddEvent}
          placeholder="Agregar nueva tarea"
          value={text}
        />

        <Events events={events} onSelectItem={onHandlerEvent} />

        <CustomModal
          isVisible={modalVisible}
          animationType="slide"
          onCancel={onHandlerCancelModal}
          onDelete={onHandlerDeleteEvent}
          selectedEvent={selectedEvent}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AgregarTarea;
