import { useFonts } from 'expo-font';
import { useState } from 'react';
import { View, ActivityIndicator } from 'react-native';

import { theme } from './constants';
import Navigator from './navigation';
import { styles } from './styles';

export default function App() {
  const [userNumber, setUserNumber] = useState(null);

  const onIngresar = (number) => {
    setUserNumber(number);
  };
  // const Content = () => (userNumber ? <PantallaInicio /> : <PantallaUno onIngresar={onIngresar} />);

  const [loaded] = useFonts({
    'Quicksand-Regular': require('../assets/Fonts/Quicksand-Regular.ttf'),
    'Quicksand-Light': require('../assets/Fonts/Quicksand-Light.ttf'),
    'Quicksand-Medium': require('../assets/Fonts/Quicksand-Medium.ttf'),
    'Quicksand-Bold': require('../assets/Fonts/Quicksand-Bold.ttf'),
    'Quicksand-SemiBold': require('../assets/Fonts/Quicksand-SemiBold.ttf'),
  });

  //Si no cargan las fuentes se muestra el Activity Indicator
  if (!loaded) {
    return <ActivityIndicator size="large" color={theme.colors.black} />;
  }

  return (
    <View style={styles.container}>
      <Navigator />
    </View>
  );
}
