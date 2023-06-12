import { useState } from 'react';
import { Button, ScrollView, Text, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { styles } from './styles';
import { ImageSelector, LocationSelector } from '../../components';
import { theme } from '../../constants';
import { savePlace } from '../../store/place.slice';

const NewPlace = ({ navigation }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [image, setImage] = useState('');
  const [coords, setCoords] = useState(null);

  const enableButton = text && image && coords;

  const onHandlerChangeText = (text) => {
    setText(text);
  };

  const onHandlerSubmit = () => {
    dispatch(savePlace({ title: text, image, coords })).unwrap();
    navigation.navigate('Places');
  };

  const onImage = (imageUri) => {
    setImage(imageUri);
  };
  const onLocation = (location) => {
    setCoords(location);
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Nombre nueva ubicacion</Text>
        <TextInput
          style={styles.input}
          placeholder="Nuevo Mexico, CDMX 12345"
          onChangeText={onHandlerChangeText}
          value={text}
        />
        <ImageSelector onImage={onImage} />
        <LocationSelector />
        <LocationSelector onLocation={onLocation} />
        <Button
          disabled={!enableButton}
          title="Grabar direccion"
          color={theme.colors.rosa}
          onPress={onHandlerSubmit}
        />
      </View>
    </ScrollView>
  );
};

export default NewPlace;
