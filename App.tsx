import {StatusBar} from 'react-native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './src/MainNavigator';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <MainNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
