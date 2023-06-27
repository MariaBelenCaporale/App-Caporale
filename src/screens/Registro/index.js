import { useReducer, useState } from 'react';
import {
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import { useDispatch } from 'react-redux';

import { styles } from './styles';
import { HeaderImagen, InputForm } from '../../components/index';
import { theme } from '../../constants';
import { signIn, signUp } from '../../redux/actions';
import { onInputChange, UPDATED_FORM } from '../../utils/form';

const initialState = {
  email: { value: '', error: '', touched: false, hasError: true },
  password: { value: '', error: '', touched: false, hasError: true },
  isFormValid: false,
};
const formReducer = (state, action) => {
  switch (action.type) {
    case UPDATED_FORM:
      const { name, value, hasError, error, touched, isFormValid } = action.data;
      return {
        ...state,
        [name]: {
          ...state[name],
          value,
          hasError,
          error,
          touched,
        },
        isFormValid,
      };
    default:
      return state;
  }
};

const Registro = ({ navigation }) => {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const [formState, dispatchFormState] = useReducer(formReducer, initialState);
  const title = isLogin ? 'Ingresar' : 'Registro';
  const buttonTitle = isLogin ? 'Ingresar' : 'Registrarme';
  const messageText = isLogin ? '¿An no tinenes una cuenta?' : 'Ya tengo una cuenta';

  const onHandleChangeRegister = () => {
    setIsLogin(!isLogin);
  };

  const onHandleRegister = () => {
    dispatch(
      isLogin
        ? signIn({ email: formState.email.value, password: formState.password.value })
        : signUp({ email: formState.email.value, password: formState.password.value })
    );
  };

  const onHandlerInputChange = ({ value, name }) => {
    onInputChange({ name, value, dispatch: dispatchFormState, formState });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <HeaderImagen title={title} text="Completá los datos" />
        <View style={styles.inputContainer}>
          <InputForm
            placeholder="email@gmail.com"
            placeholderTextColor={theme.colors.grey}
            autoCapitalize="none"
            // style={styles.input}
            autoCorrect={false}
            onChangeText={(text) => onHandlerInputChange({ value: text, name: 'email' })}
            value={formState.email.value}
            label="Email"
            error={formState.email.error}
            touched={formState.email.touched}
            hasError={formState.email.hasError}
          />
          {/* <Text style={styles.label}>Password</Text> */}
          <InputForm
            // style={styles.input}
            placeholder="******"
            placeholderTextColor={theme.colors.grey}
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(text) => onHandlerInputChange({ value: text, name: 'password' })}
            value={formState.password.value}
            label="Password"
            error={formState.password.error}
            touched={formState.password.touched}
            hasError={formState.password.hasError}
          />

          {/* <Text style={styles.label}>Usuario</Text> */}
          {/* <InputForm

            placeholder="Delfi"
            placeholderTextColor={theme.colors.grey}
            autoCorrect={false}
            onChangeText={(text) => setUsuario(text)}

            value={usuario}
            label="Usuario"
            error="usuario invalido"
            touched
            hasError
          /> */}
        </View>
        <TouchableOpacity style={styles.link} onPress={onHandleChangeRegister}>
          <Text style={styles.linkText}>{messageText}</Text>
        </TouchableOpacity>

        <View style={styles.submitContiner}>
          <Button
            disabled={!formState.isFormValid}
            color="#1E1E1E"
            title={buttonTitle}
            onPress={onHandleRegister}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Registro;
