import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  containerSafe: {
    flex: 1,
    paddingVertical: 20,
    backgroundColor: theme.colors.primary,
  },

  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },

  containerCajas: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  contieneFilaUno: {
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },

  contieneFilaDos: {
    width: '100%',
    justifyContent: 'space-around',
    flexDirection: 'row',
    height: 200,
    alignItems: 'center',
  },

  containerTextosUsuario: {
    alignItems: 'flex-start',
    paddingLeft: 20,
  },

  contieneTodoUsuario: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '90%',
  },

  textoBienvenido: {
    fontFamily: 'Quicksand-Medium',
    fontSize: 24,
  },

  textoDatos: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 20,
  },

  containerRanking: {
    width: '95%',
    height: 120,
    paddingHorizontal: 20,
    marginVertical: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,

    shadowColor: theme.colors.black,

    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
    backgroundColor: theme.colors.primary,
  },

  containerTextImg: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textoRanking: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 21,
    textAlign: 'left',
    width: '70%',
  },

  containerTarea: {
    width: '45%',
    height: 180,
    marginVertical: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,

    shadowColor: theme.colors.black,

    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
    backgroundColor: theme.colors.rosa,
  },

  containerMas: {
    width: '45%',
    height: 180,
    marginVertical: 30,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 20,

    shadowColor: theme.colors.black,

    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
    backgroundColor: theme.colors.verde,
  },

  containerTextImgTarea: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerChat: {
    width: '45%',
    height: 180,
    marginVertical: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,

    shadowColor: theme.colors.black,

    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
    backgroundColor: theme.colors.amarillo,
  },

  containerLocaciones: {
    width: '45%',
    height: 180,
    marginVertical: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,

    shadowColor: theme.colors.black,

    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
    backgroundColor: theme.colors.celeste,
  },

  textoTarea: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 18,
    textAlign: 'center',
    width: '100%',
    paddingTop: 20,
  },
});
