import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.black,
  },
  subtitleBuscar: {
    color: theme.colors.primary,
    fontFamily: 'Quicksand-SemiBold',
    fontSize: 20,
    padding: 20,
    textAlign: 'center',
  },
  containerButton: {
    alignItems: 'space-around',
    height: 120,
    justifyContent: 'center',
  },
});
