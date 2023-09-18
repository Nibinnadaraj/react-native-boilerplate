import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { store } from './components/redux/store/store';
import { Provider } from 'react-redux';
import { styles } from './components/ui/styles/mainStyle';
import { useDarkMode } from './components/utils/hooks/useDarkMode';
import { appColors } from './components/ui/colors/appColors';

type SectionProps = PropsWithChildren<{
  title: string;
}>;
function App(): JSX.Element {
  const isDarkMode = useDarkMode();
  return (
    <Provider store={store}>
    <SafeAreaView style={styles.background}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? appColors.dark.background : appColors.light.background}
      />
    </SafeAreaView>
    </Provider>
  );
}



export default App;
