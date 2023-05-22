import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Registro } from '../../screens';

const Stack = createNativeStackNavigator();

const RegistroNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Bienvenida">
      <Stack.Screen name="Registro" component={Registro} />
    </Stack.Navigator>
  );
};

export default RegistroNavigator;
