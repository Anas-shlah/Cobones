import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Home from './screens/Home';
import HomeHeader from './components/HomeHeader';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Navigator initialRouteName={'Home'}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: true,
            header: () => <HomeHeader />,
          }}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default MainNavigator;
