import React from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';

import { styles } from './styles';

const HeaderImagen = ({ title, text, source }) => {
  return (
    <SafeAreaView style={styles.containerSafe}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Image
          source={source}
          style={{
            width: 120,
            height: 120,
            resizeMode: 'contain',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default HeaderImagen;
