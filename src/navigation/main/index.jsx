import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import AgregarAmigo from '../../screens/AgregarAmigo';
import AgregarTarea from '../../screens/AgregarTarea';
import Bienvenida from '../../screens/Bienvenida';
import PantallaAmigo from '../../screens/PantallaAmigo';
import Registro from '../../screens/Registro';
import Home from '../../screens/home';
import PantallaUno from '../../screens/pantallaUno';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AgregarTarea" component={AgregarTarea} />
        <Stack.Screen name="Bienvenid@" component={Bienvenida} />
        <Stack.Screen name="Registro" component={Registro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
