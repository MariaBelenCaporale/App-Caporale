import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    height: 130,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textoEnter: {
    color: theme.colors.black,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    fontFamily: 'Quicksand-Bold',
  },

  containerRanking: {
    backgroundColor: theme.colors.celeste,
  },
});
