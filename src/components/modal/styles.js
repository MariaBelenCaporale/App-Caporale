import { StyleSheet } from 'react-native';

<<<<<<< HEAD
<<<<<<< HEAD
export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
    paddingVertical: 20,
  },
  title: {
    fontSize: 16,
=======
=======
>>>>>>> f0985db6932a683aeaf005d6ab114dac0aebbd6b
import { theme } from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    height: '100%',
  },
  title: {
    fontSize: 25,
<<<<<<< HEAD
>>>>>>> f0985db6932a683aeaf005d6ab114dac0aebbd6b
=======
>>>>>>> f0985db6932a683aeaf005d6ab114dac0aebbd6b
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailContainer: {
    paddingVertical: 20,
  },
  detailMessage: {
<<<<<<< HEAD
<<<<<<< HEAD
    fontSize: 14,
    color: '#212121',
  },
  selectedEvent: {
    fontSize: 14,
    color: '#212121',
=======
=======
>>>>>>> f0985db6932a683aeaf005d6ab114dac0aebbd6b
    fontSize: 20,
    color: theme.colors.black,
  },
  selectedEvent: {
    fontSize: 18,
    color: theme.colors.primary,
<<<<<<< HEAD
>>>>>>> f0985db6932a683aeaf005d6ab114dac0aebbd6b
=======
>>>>>>> f0985db6932a683aeaf005d6ab114dac0aebbd6b
    fontWeight: 'bold',
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
