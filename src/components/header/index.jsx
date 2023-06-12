import React from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';

import { styles } from './styles';

const Header = ({ title, text }) => {
  return (
    <SafeAreaView style={styles.containerSafe}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Image
          source={require('../../../assets/Img/tareaColor.png')}
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

export default Header;
