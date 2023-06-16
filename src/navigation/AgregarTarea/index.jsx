import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AgregarTarea from '../../screens/AgregarTarea';

const Stack = createNativeStackNavigator();

const AgregarTareaNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="AgregarTarea">
      <Stack.Screen name="AgregarTarea" component={AgregarTarea} />
    </Stack.Navigator>
  );
};

export default AgregarTareaNavigator;
