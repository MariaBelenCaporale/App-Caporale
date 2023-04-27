import { StyleSheet } from 'react-native';

import { theme } from '../../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    height: 80,
    justifyContent: 'center',
    backgroundColor: theme.colors.black,
    borderRadius: 5,
    marginVertical: 5,
  },
  item: {
    marginHorizontal: 10,
    color: theme.colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
