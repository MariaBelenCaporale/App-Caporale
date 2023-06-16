import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

const EventItem = ({ item, onSelectItem }) => {
  return (
    <TouchableOpacity onPress={() => onSelectItem(item.id)}>
      <View style={styles.container}>
        <Text style={styles.item}>{item.value}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default EventItem;
