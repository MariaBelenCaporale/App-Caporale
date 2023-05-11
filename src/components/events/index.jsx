import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { View, FlatList } from 'react-native';

import EventItem from './item';
import { styles } from './styles';
=======
import { FlatList } from 'react-native';

import EventItem from './item';
>>>>>>> f0985db6932a683aeaf005d6ab114dac0aebbd6b
=======
import { FlatList } from 'react-native';

import EventItem from './item';
>>>>>>> f0985db6932a683aeaf005d6ab114dac0aebbd6b

const Events = ({ events, onSelectItem }) => {
  const renderItem = ({ item }) => <EventItem item={item} onSelectItem={onSelectItem} />;

  const keyExtractor = (item) => item.id;

  return (
    <FlatList
      renderItem={renderItem}
      data={events}
      keyExtractor={keyExtractor}
      alwaysBounceVertical={false}
    />
  );
};

export default Events;
