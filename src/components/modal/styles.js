import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  title: {
    color: theme.colors.black,
    fontSize: 25,
    fontFamily: 'Quicksand-Bold',
    alignContent: 'center',
  },

  contieneDetalle: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.rosa,
    height: 100,
    flex: 1,
  },
  detailContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  detailDos: {
    width: '90%',
    paddingVertical: 40,
    height: 380,
    position: 'absolute',
    justifyContent: 'space-evenly',
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
  detailSub: {
    fontFamily: 'Quicksand-Regular',
    fontSize: 20,
    textAlign: 'center',
    paddingHorizontal: 40,
  },
  detailMessage: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 22,
    fontFamily: 'Quicksand-SemiBold',
    color: theme.colors.black,
  },
  containerMen: {
    alignItems: 'center',
  },
  selectedEvent: {
    fontSize: 20,
    paddingVertical: 40,
    color: theme.colors.black,
    fontFamily: 'Quicksand-Bold',
    textAlign: 'center',
  },
  buttonContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignContent: 'center',
    marginBottom: 10,
  },
});
