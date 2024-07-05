import {StatusBar} from 'react-native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import MainNavigator from './src/MainNavigator';
import Colors from './src/constants/Colors';

const App = () => {
  const AppTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: Colors.background,
    },
  };
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={AppTheme}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <MainNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
