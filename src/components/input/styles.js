import { StyleSheet } from 'react-native';

<<<<<<< HEAD
import { theme } from '../../constants';
=======
import { theme } from '../../constants/theme';
>>>>>>> f0985db6932a683aeaf005d6ab114dac0aebbd6b

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    marginTop: 55,
    alignItems: 'center',
    justifyContent: 'space-around',
<<<<<<< HEAD
=======
    backgroundColor: theme.colors.primary,
>>>>>>> f0985db6932a683aeaf005d6ab114dac0aebbd6b
  },
  input: {
    width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.primary,
    color: theme.colors.black,
  },
});
