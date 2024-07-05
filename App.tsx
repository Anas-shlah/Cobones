import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <View>
        <Text>App</Text>
      </View>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
