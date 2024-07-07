import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Button} from './Button';
import LeftArrowIcon from '../assets/svg/leftArrow';
import {Text} from './Text';
import {useNavigation} from '@react-navigation/native';
import Layout from '../constants/Layout';

const CartHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Button
        preset="primary"
        title={''}
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.backButton}
      >
        <LeftArrowIcon />
      </Button>
      <Text preset="header">My Cart</Text>
      <View />
    </View>
  );
};

export default CartHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: Layout.window.width,
    backgroundColor: '#fff',
    height: Layout.button,
    padding: 10,
  },
  backButton: {borderRadius: 50, height: 32, width: 30},
});
