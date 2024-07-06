import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Home from './screens/Home';
import HomeHeader from './components/HomeHeader';
import ProductDetails from './screens/ProductDetails';
import DetailsHeader from './components/DetailsHeader';
import AddToCartScreen from './screens/AddToCartScreen';
import CartHeader from './components/CartHeader';

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
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{
            headerShown: true,
            header: () => <DetailsHeader />,
          }}
        />
        <Stack.Screen
          name="AddToCartScreen"
          component={AddToCartScreen}
          options={{
            headerShown: true,
            header: () => <CartHeader />,
          }}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default MainNavigator;
