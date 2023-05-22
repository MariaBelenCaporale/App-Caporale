import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  PantallaUno,
  AgregarAmigo,
  PantallaInicio,
  Bienvenida,
  PantallaAmigo,
  Registro,
} from '../../screens';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="PantallaStart">
      <Stack.Screen name="Bienvenid@" component={Bienvenida} />
      <Stack.Screen name="PantallaUno" component={PantallaUno} />
      <Stack.Screen name="PantallaAmigo" component={PantallaAmigo} />

      <Stack.Screen name="Registro" component={Registro} />
      <Stack.Screen name="PantallaInicio" component={PantallaInicio} />
      <Stack.Screen name="AgregarAmigo" component={AgregarAmigo} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
