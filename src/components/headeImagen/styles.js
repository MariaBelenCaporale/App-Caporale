import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    width: '100%',
    marginVertical: 30,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 30,
    color: theme.colors.black,
    fontFamily: 'Quicksand-Medium',
  },
});
