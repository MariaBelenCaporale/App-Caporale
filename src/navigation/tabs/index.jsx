import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Registro, Bienvenida } from '../../screens';

const BottomTab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <BottomTab.Screen
        name="Home"
        component={Bienvenida}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <BottomTab.Screen
        name="Tareas"
        component={Registro}
        options={{
          tabBarLabel: 'Tareas',
        }}
      />
      <BottomTab.Screen
        name="Regisro"
        component={Registro}
        options={{
          tabBarLabel: 'Chat',
        }}
      />
    </BottomTab.Navigator>
  );
};

export default TabsNavigator;
