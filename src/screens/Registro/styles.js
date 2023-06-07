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
    marginHorizontal: 30,
    backgroundColor: theme.colors.primary,
    minHeight: 340,
  },

  label: {
    fontFamily: 'Quicksand-Regular',
    fontSize: 15,
    paddingBottom: 3,
    paddingTop: 20,
  },

  textoRef: {
    marginTop: 25,
    fontFamily: 'Quicksand-Bold',
    fontSize: 15,
  },

  containerModal: {
    flex: 1,
    backgroundColor: theme.colors.rosa,
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  textoModal: {
    marginHorizontal: 30,
    color: theme.colors.black,
    fontFamily: 'Quicksand-Bold',
    fontSize: 30,
    textAlign: 'center',
  },

  parrafoModal: {
    color: theme.colors.black,
    fontSize: 20,
    textAlign: 'center',
  },

  linkText: {
    color: theme.colors.black,
    fontFamily: 'Quicksand-Regular',
    fontSize: 20,
    textAlign: 'center',
  },

  buttonContainer: {
    width: '80%',
    color: theme.colors.black,
    justifyContent: 'space-around',
    gap: 10,
  },

  contieneAgregar: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },

  textoPregunta: {
    color: theme.colors.black,
    fontFamily: 'Quicksand-Regular',
    fontSize: 25,
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
