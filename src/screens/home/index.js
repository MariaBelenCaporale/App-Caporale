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
              <Text style={styles.textoDatos}>Usuario</Text>
            </View>
          </View>

          <View style={styles.containerRanking}>
            <TouchableOpacity onPress={() => navigation.navigate('Rankign')}>
              <View style={styles.containerTextImg}>
                <Text style={styles.textoRanking}>Ver ranking de quehaceres</Text>
                <Image
                  source={require('../../../assets/Img/ranking.png')}
                  style={{ width: 70, height: 70, resizeMode: 'contain' }}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.containerCajas}>
            <View style={styles.contieneFilaUno}>
              <View style={styles.containerTarea}>
                <TouchableOpacity onPress={() => navigation.navigate('Tareas')}>
                  <View style={styles.containerTextImgTarea}>
                    <Image
                      source={require('../../../assets/Img/tareas.png')}
                      style={{ width: 70, height: 70, resizeMode: 'contain' }}
                    />
                    <Text style={styles.textoTarea}>Nueva tarea</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.containerChat}>
                <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
                  <View style={styles.containerTextImgTarea}>
                    <Image
                      source={require('../../../assets/Img/tareas.png')}
                      style={{ width: 70, height: 70, resizeMode: 'contain' }}
                    />
                    <Text style={styles.textoTarea}>Chat</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.contieneFilaDos}>
              <View style={styles.containerLocaciones}>
                <TouchableOpacity>
                  <View style={styles.containerTextImgTarea}>
                    <Image
                      source={require('../../../assets/Img/tareas.png')}
                      style={{ width: 70, height: 70, resizeMode: 'contain' }}
                    />
                    <Text style={styles.textoTarea}>Locaciones</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.containerMas}>
                <View style={styles.containerTextImgTarea}>
                  <Image
                    source={require('../../../assets/Img/tareas.png')}
                    style={{ width: 70, height: 70, resizeMode: 'contain' }}
                  />
                  <Text style={styles.textoTarea}>Algo más</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Home;
