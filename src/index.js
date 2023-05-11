import { useFonts } from 'expo-font';
import { useState } from 'react';
import { View, ActivityIndicator } from 'react-native';

import { theme } from './constants';
import { PantallaUno, PantallaInicio } from './screens/index';
import { styles } from './styles';
export default function App() {
  const [userNumber, setUserNumber] = useState(null);

  const onIngresar = (number) => {
    setUserNumber(number);
  };
  const Content = () => (userNumber ? <PantallaInicio /> : <PantallaUno onIngresar={onIngresar} />);

  return (
    <View style={styles.container}>
      <Content />
    </View>
  );
}
