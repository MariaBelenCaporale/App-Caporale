import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: theme.colors.primary,
  },
  welcome: {
    color: theme.colors.black,
    fontFamily: 'Quicksand-Bold',
    backgroundColor: theme.colors.primary,
    fontSize: 40,
    padding: 20,
  },
});
