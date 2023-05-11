import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.secondary,
  },
  title: {
    fontSize: 22,
    color: theme.colors.primary,
    fontFamily: 'Quicksand-Bold',
  },
});
