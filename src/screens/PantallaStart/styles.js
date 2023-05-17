import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: theme.colors.secondary,
  },
  welcome: {
    color: theme.colors.primary,
    fontFamily: 'Quicksand-Bold',
    fontSize: 30,
    padding: 20,
  },
  subtitle: {
    color: theme.colors.primary,
    fontFamily: 'Quicksand-SemiBold',
    fontSize: 20,
  },
});
