import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  input: {
    width: '70%',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.secondary,
    color: theme.colors.black,
    fontFamily: 'Quicksand-Bold',
    fontSize: 16,
  },
});
