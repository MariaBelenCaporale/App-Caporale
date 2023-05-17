import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    marginTop: 55,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  input: {
    width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.secondary,
    color: theme.colors.black,
  },
});
