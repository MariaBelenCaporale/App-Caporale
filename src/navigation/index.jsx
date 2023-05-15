import { NavigationContainer } from '@react-navigation/native';

import { MainNavigator } from './main';

const Navigator = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default Navigator;
