import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Bienvenida } from '../../screens';

const Stack = createNativeStackNavigator();

const BienvenidaNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Bienvenida">
      <Stack.Screen name="Bienvenida" component={Bienvenida} />
    </Stack.Navigator>
  );
};

export default BienvenidaNavigator;
