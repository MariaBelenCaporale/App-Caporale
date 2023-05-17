import { StyleSheet } from 'react-native';

import { theme } from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    height: 120,
    justifyContent: 'center',
    backgroundColor: theme.colors.grey,
    borderRadius: 5,
    marginVertical: 5,
    marginTop: 20,
  },
  item: {
    marginHorizontal: 10,
    color: theme.colors.black,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
