import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { theme } from '../../constants';
import { AgregarTarea, Home, Registro } from '../../screens';

const BottomTab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: 'Quicksand-Regular',
          fontSize: 12,
        },
        tabBarStyle: {
          backgroundColor: theme.colors.black,
        },
        tabBarActiveTintColor: theme.colors.secondary,
        tabBarInactiveTintColor: theme.colors.primary,
      }}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Tareas"
        component={AgregarTarea}
        options={{
          tabBarLabel: 'Tareas',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'bookmark' : 'bookmark-outline'} size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Regisro"
        component={Registro}
        options={{
          tabBarLabel: 'Registro',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'chatbubble-ellipses' : 'chatbubble-ellipses-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default TabsNavigator;
