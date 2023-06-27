import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useSelector } from 'react-redux';

import RegistroNavigator from './registro';
import TabsNavigator from './tabs';

const Navigation = () => {
  const userId = useSelector((state) => state.registro.userId);

  return (
    <NavigationContainer>{userId ? <TabsNavigator /> : <RegistroNavigator />}</NavigationContainer>
  );
};

export default Navigation;
