import { StyleSheet } from 'react-native';

import { theme } from '../../constants';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  input: {
    width: '100%',
    borderBottomColor: theme.colors.black,
    borderBottomWidth: 1,
    paddingVertical: 5,
    minWidth: 70,
    fontSize: 15,
    color: theme.colors.black,
    fontFamily: 'Quicksand-Regular',
  },
  errorContainer: {
    paddingVertical: 5,
  },
  errorMessage: {
    fontSize: 12,
    fontFamily: 'Quicksand-Regular',
    paddingVertical: 5,
    color: 'red',
  },
});
