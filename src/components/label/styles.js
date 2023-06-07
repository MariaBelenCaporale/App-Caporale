import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Quicksand-Medium',
    color: theme.colors.black,
    paddingVertical: 3,
  },
  subLabel: {
    fontSize: 12,
    fontFamily: 'Quicksand-Regular',
    paddingVertical: 3,
    color: theme.colors.black,
  },
});
