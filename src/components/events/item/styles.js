import { StyleSheet } from 'react-native';

<<<<<<< HEAD
import { theme } from '../../../constants';

export const styles = StyleSheet.create({
  container: {
=======
import { theme } from '../../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
>>>>>>> f0985db6932a683aeaf005d6ab114dac0aebbd6b
    height: 80,
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    marginVertical: 5,
  },
  item: {
    marginHorizontal: 10,
    color: theme.colors.black,
    fontSize: 16,
    fontWeight: 'bold',
  },
});