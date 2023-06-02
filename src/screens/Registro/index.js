import { useState } from 'react';
import {
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useDispatch } from 'react-redux';

import { styles } from './styles';
import { Header } from '../../components/index';
import { theme } from '../../constants';
import { signIn, signUp } from '../../redux/actions';

const Registro = () => {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const title = isLogin ? 'Ingresar' : 'Registrarme';
  const buttonTitle = isLogin ? 'Login' : 'Register';
  const messageText = isLogin ? '¿Aún no tinenes una cuenta?' : 'Ya tengo una cuenta';

  const onHandleChangeRegister = () => {
    setIsLogin(!isLogin);
  };

  const onHandleRegister = () => {
    dispatch(isLogin ? signIn({ email, password }) : signUp({ email, password }));
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header
          title={title}
          text="Completá los datos
y comenzá a crear tareas"
        />
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder="email@gmail.com"
            placeholderTextColor={theme.colors.grey}
            autoCapitalize="none"
            style={styles.input}
            autoCorrect={false}
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="******"
            placeholderTextColor={theme.colors.grey}
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
        </View>
        <TouchableOpacity style={styles.link} onPress={onHandleChangeRegister}>
          <Text style={styles.linkText}>{messageText}</Text>
        </TouchableOpacity>

        <View style={styles.submitContiner}>
          <Button color="#1E1E1E" title={buttonTitle} onPress={onHandleRegister} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Registro;
