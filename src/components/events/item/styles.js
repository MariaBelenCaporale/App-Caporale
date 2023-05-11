import { StyleSheet } from 'react-native';

import { theme } from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    height: 80,
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    marginVertical: 5,
  },
  item: {
    marginHorizontal: 10,
    color: theme.colors.black,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
