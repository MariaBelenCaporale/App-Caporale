import { StyleSheet } from 'react-native';

import { theme } from '../../constants/theme';

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    marginTop: 55,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: theme.colors.primary,
  },
  input: {
    width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.primary,
    color: theme.colors.black,
  },
});
