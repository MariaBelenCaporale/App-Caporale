import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
  },
  title: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 35,
    textAlign: 'center',
    color: theme.colors.black,
    fontFamily: 'Quicksand-Regular',
  },
  text: {
    fontSize: 20,
    paddingBottom: 10,
    color: theme.colors.black,
    fontFamily: 'Quicksand-Regular',
    textAlign: 'center',
  },
});
