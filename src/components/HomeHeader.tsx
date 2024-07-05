import {Pressable, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Layout from '../constants/Layout';
import {Text} from './Text';
import MapIcon from '../assets/svg/map';
import {translation} from '../locales';
import DownArrowIcon from '../assets/svg/downArrow';
import {Button} from './Button';
import CartIcon from '../assets/svg/cart';
import NotificationIcon from '../assets/svg/notification';

const HomeHeader = () => {
  const locationName = translation.general.locations['dubai']; // This value is imported from State Management
  return (
    <View style={styles.container}>
      <Button preset="link" title={''}>
        <MapIcon />
        <Text preset="header" style={styles.header}>
          {locationName}
        </Text>
        <DownArrowIcon />
      </Button>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.icon}>
          <NotificationIcon />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <CartIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeHeader;

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
});
