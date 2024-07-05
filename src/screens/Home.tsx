import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Text} from '../components/Text';
import {Button} from '../components/Button';

const Home = () => {
  return (
    <View>
      <Text preset="description">New In</Text>
      <Button title="Add to cart" />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
