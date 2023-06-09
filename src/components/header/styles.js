import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.rosa,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 380,
    borderRadius: 10,
  },

  title: {
    fontSize: 40,
    paddingTop: 80,
    textAlign: 'center',
    color: theme.colors.black,
    fontFamily: 'Quicksand-Medium',
  },
});
