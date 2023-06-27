import { StyleSheet } from 'react-native';

import { theme } from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 120,
    marginVertical: 10,
    justifyContent: 'flex-start',
    backgroundColor: theme.colors.primary,
    alignItems: 'flex-start',
    borderRadius: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.23,
    shadowRadius: 10,

    elevation: 4,
  },
  item: {
    marginHorizontal: 20,
    marginVertical: 20,
    color: theme.colors.black,
    fontSize: 25,
    fontFamily: 'Quicksand-Medium',
  },
});
