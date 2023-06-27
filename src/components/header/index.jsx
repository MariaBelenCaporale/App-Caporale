import React from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';

import { styles } from './styles';

const Header = ({ title, text, source }) => {
  return (
    <SafeAreaView style={styles.containerSafe}>
      <View style={styles.container}>
        <View style={styles.containerTexto}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;
