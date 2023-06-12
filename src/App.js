import { useFonts } from 'expo-font';
import { View, ActivityIndicator, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';

import { theme } from './constants';
import Navigator from './navigation';
import redux from './redux';
import { styles } from './styles';

export default function App() {
  const [loaded] = useFonts({
    'Quicksand-Regular': require('../assets/Fonts/Quicksand-Regular.ttf'),
    'Quicksand-Light': require('../assets/Fonts/Quicksand-Light.ttf'),
    'Quicksand-Medium': require('../assets/Fonts/Quicksand-Medium.ttf'),
    'Quicksand-Bold': require('../assets/Fonts/Quicksand-Bold.ttf'),
    'Quicksand-SemiBold': require('../assets/Fonts/Quicksand-SemiBold.ttf'),
  });

  //Si no cargan las fuentes se muestra el Activity Indicator
  if (!loaded) {
    return <ActivityIndicator size="large" color={theme.colors.black} />;
  }

  return (
    <SafeAreaView style={styles.containerSafe}>
      <Provider store={redux}>
        <View style={styles.container}>
          <Navigator />
        </View>
      </Provider>
    </SafeAreaView>
  );
}
