import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Text} from '../components/Text';
import {Button} from '../components/Button';
import {TextInput} from '../components/TextInput';

const Home = () => {
  return (
    <View>
      <Text preset="description">New In</Text>
      <TextInput placeholder="hi" />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
