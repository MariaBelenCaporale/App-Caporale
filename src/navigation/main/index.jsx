import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  PantallaUno,
  AgregarAmigo,
  AgregarTarea,
  Bienvenida,
  PantallaAmigo,
  Registro,
  Home,
} from '../../screens';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Bienvenida">
      <Stack.Screen name="Bienvenid@" component={Bienvenida} />
      <Stack.Screen name="PantallaUno" component={PantallaUno} />
      <Stack.Screen name="PantallaAmigo" component={PantallaAmigo} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Registro" component={Registro} />
      <Stack.Screen name="AgregarTarea" component={AgregarTarea} />
      <Stack.Screen name="AgregarAmigo" component={AgregarAmigo} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
