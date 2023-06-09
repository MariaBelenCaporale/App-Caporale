import React from 'react';
import {
  View,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import { styles } from './styles';

const Home = ({ navigation }) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.containerSafe}>
        <View style={styles.container}>
          <View style={styles.contieneTodoUsuario}>
            <View style={styles.containerDatos}>
              <Image
                source={require('../../../assets/Img/cuentaCreada.png')}
                style={{ width: 60, height: 60, resizeMode: 'contain' }}
              />
            </View>
            <View style={styles.containerTextosUsuario}>
              <Text style={styles.textoBienvenido}>Bienvenid@</Text>
              <Text style={styles.textoDatos}>{}</Text>
            </View>
          </View>

          <View style={styles.containerCajas}>
            <View style={styles.containerTarea}>
              <TouchableOpacity onPress={() => navigation.navigate('Tareas')}>
                <View style={styles.containerTextImgTarea}>
                  <Image
                    source={require('../../../assets/Img/tareas.png')}
                    style={{ width: 60, height: 60, resizeMode: 'contain' }}
                  />
                  <Text style={styles.textoTarea}>Nueva tarea</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.contieneFilaDos}>
              <View style={styles.containerLocaciones}>
                <TouchableOpacity onPress={() => navigation.navigate('Tareas')}>
                  <View style={styles.containerTextImgTarea}>
                    <Image
                      source={require('../../../assets/Img/tareas.png')}
                      style={{ width: 70, height: 70, resizeMode: 'contain' }}
                    />
                    <Text style={styles.textoTarea}>Locaciones</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Home;
