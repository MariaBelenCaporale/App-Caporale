import { StyleSheet } from 'react-native';

import { theme } from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: theme.colors.primary,
    borderBottomWidth: 1,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 20,
    backgroundColor: theme.colors.primary,
  },
  info: {
    marginLeft: 15,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 14,
    color: theme.colors.black,
  },
  address: {
    fontSize: 14,
    color: theme.colors.black,
    fontWeight: 'bold',
  },
});
