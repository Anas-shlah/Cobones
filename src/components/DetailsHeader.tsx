import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Layout from '../constants/Layout';
import {Button} from './Button';
import CartIcon from '../assets/svg/cart';
import LeftArrowIcon from '../assets/svg/leftArrow';
import LoveIcon from '../assets/svg/love';
import ShareIcon from '../assets/svg/share';
import {useNavigation} from '@react-navigation/native';

const DetailsHeader = () => {
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
      <View style={styles.footer}>
        <TouchableOpacity style={styles.icon}>
          <LoveIcon />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <ShareIcon />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <CartIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailsHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: Layout.window.width,
    backgroundColor: '#fff',
    height: Layout.button,
  },
  header: {
    marginHorizontal: 10,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  icon: {
    padding: 10,
  },
  backButton: {borderRadius: 50, height: 32, width: 30, marginHorizontal: 15},
});
