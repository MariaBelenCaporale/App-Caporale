import { StyleSheet } from 'react-native';

import { theme } from '../../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
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
