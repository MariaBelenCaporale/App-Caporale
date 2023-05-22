import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AgregarTarea } from '../../screens';

const Stack = createNativeStackNavigator();

const AgregarTareaNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="AgregarTarea">
      <Stack.Screen name="Tarea" component={AgregarTarea} />
    </Stack.Navigator>
  );
};

export default AgregarTareaNavigator;
