import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    marginTop: 50,
  },

  title: {
    fontSize: 30,
    textAlign: 'center',
    color: theme.colors.black,
    fontFamily: 'Quicksand-Medium',
  },
});
