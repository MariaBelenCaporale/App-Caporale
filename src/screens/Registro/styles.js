import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    justifyContent: 'space-around',
    height: 130,
    paddingHorizontal: 20,
  },

  inputContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginHorizontal: 20,
    backgroundColor: theme.colors.primary,
  },
  input: {
    width: '100%',
    borderBottomColor: theme.colors.black,
    borderBottomWidth: 1,
    paddingVertical: 15,
    minWidth: 70,
    fontSize: 20,
    color: theme.colors.black,
  },

  textoRef: {
    marginTop: 25,
    fontFamily: 'Quicksand-Bold',
    fontSize: 15,
  },

  containerModal: {
    flex: 1,
    backgroundColor: theme.colors.black,
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  textoModal: {
    marginHorizontal: 30,
    color: theme.colors.primary,
    fontFamily: 'Quicksand-Bold',
    fontSize: 30,
    textAlign: 'center',
  },

  buttonContainer: {
    width: '80%',
    flexDirection: 'row',
    color: theme.colors.black,
    justifyContent: 'space-around',
  },

  contieneAgregar: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },

  textoPregunta: {
    color: theme.colors.primary,
    fontFamily: 'Quicksand-Regular',
    fontSize: 20,
    textAlign: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  contieneImg: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});
