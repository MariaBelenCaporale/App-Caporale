import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.black,
  },

  title: {
    fontSize: 20,
    color: theme.colors.primary,
    textAlign: 'center',
    paddingVertical: 20,
  },

  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },

  input: {
    width: '100%',
    borderBottomColor: theme.colors.primary,
    borderBottomWidth: 1,
    minWidth: 70,
    fontSize: 20,
    textAlign: 'center',
    paddingVertical: 10,
    color: theme.colors.primary,
  },

  buttonContainer: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-around',
    marginTop: 20,
  },

  confirmedContainer: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 40,
    marginHorizontal: 20,
  },

  confirmedTitle: {
    fontSize: 20,
    color: theme.colors.primary,
    fontWeight: 'bold',
  },
});
