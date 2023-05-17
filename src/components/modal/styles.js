import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    marginTop: 60,
  },
  title: {
    color: theme.colors.black,
    fontSize: 18,
    fontFamily: 'Quicksand-Bold',
    marginBottom: 10,
  },
  detailContainer: {
    paddingVertical: 20,
  },
  detailMessage: {
    fontSize: 16,
    fontFamily: 'Quicksand-SemiBold',
    color: theme.colors.black,
  },
  selectedEvent: {
    fontSize: 18,
    color: theme.colors.black,
    fontFamily: 'Quicksand-SemiBold',
    paddingVertical: 10,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
