
import { Text, View, Button, FlatList, TouchableOpacity, Modal } from 'react-native';
import styles from './styles';
import { Input } from './components/index';
import { useState } from 'react';

export default function App() {
  const[text, setText] = useState('');
  const [events, setEvents] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const onAddEvent = () => {
    if (text.length === 0) return;
    setEvents([
     ...events,
      {
        id: Math.random().toString(),
        value: text
      }
    ]);
    setText('');
  };

  const onHandlerEvent = (id) => {
    setModalVisible(!modalVisible);
    const selectedEvent = events.find(event => event.id === id);
    setSelectedEvent(selectedEvent);
  }

  const onHandleCancelModal = () => {
    setModalVisible(!modalVisible);
    setSelectedEvent(null);
  }

  const onHandlerDeleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== id));
    setModalVisible(!modalVisible);
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => onHandlerEvent(item.id)}>
      <Text style={styles.item}>{item.value}</Text>
    </TouchableOpacity>
  )


  return (
    <View style={styles.container}>
        <Input 
            buttonColor='#52528C'
            buttonTitle='Add'
            onChangeText={(text) => setText(text)}
            onHandlerButton={onAddEvent}
            placeholder='Enter your name'
            value={text}
        />

      <View style={styles.listContainer}>
        <FlatList 
          renderItem={renderItem}
          data={events}
          keyExtractor={(item) => item.id}
          alwaysBounceVertical={false}
        />
        
      </View>

      <Modal visible={modalVisible} animationType='slide'>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Holisss</Text>
          <View style={styles.modalDetailContainer}>
            <Text style={styles.modalDetailMessage}>Seguro?????</Text>
            <Text style={styles.selectedEvent}>{selectedEvent?.value}</Text>
          </View>
        </View>

<View style={styles.buttonContainer}>
  <Button 
  title='Cerrar'
  color='red'
  onPress={()=> onHandleCancelModal()}
  />

<Button 
  title='Eliminar'
  color='red'
  onPress={()=> onHandlerDeleteEvent(selectedEvent.id)}
  />
</View>
      </Modal>
    </View>
  );
}


