import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { PantallaUno, PantallaDos } from '../../screens';
const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="PantallaUno">
      <Stack.Screen name="Inicio" component={PantallaUno} />
      <Stack.Screen name="pantalla dos" component={PantallaDos} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
