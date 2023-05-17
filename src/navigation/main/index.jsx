import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  PantallaUno,
  PantallaTres,
  PantallaInicio,
  PantallaStart,
  PantallaAmigo,
} from '../../screens';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="PantallaStart">
      <Stack.Screen name="PantallaStart" component={PantallaStart} />
      <Stack.Screen name="PantallaUno" component={PantallaUno} />
      <Stack.Screen name="PantallaAmigo" component={PantallaAmigo} />

      <Stack.Screen name="PantallaInicio" component={PantallaInicio} />
      <Stack.Screen name="PantallaTres" component={PantallaTres} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
