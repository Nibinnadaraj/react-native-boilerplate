import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {store} from './components/redux/store/store';
import {Provider} from 'react-redux';
import {mainStylesDark, mainStylesLight} from './components/ui/styles/main/mainStyle';
import {useDarkMode} from './components/utils/hooks/darkMode/useDarkMode';
import {appColors} from './components/ui/colors/appColors';
import RootNavigation from './components/navigation/rootNavigation';


function App(): JSX.Element {
  const isDarkMode = useDarkMode();
  return (
    <Provider store={store}>
      <SafeAreaView style={isDarkMode ? mainStylesDark.background : mainStylesLight.background}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={
            isDarkMode ? appColors.dark.background : appColors.light.background
          }
        />
        <RootNavigation/>
      </SafeAreaView>
    </Provider>
  );
}

export default App;
