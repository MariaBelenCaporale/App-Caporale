import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../../screens';

const Stack = createNativeStackNavigator();

const HomeNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
