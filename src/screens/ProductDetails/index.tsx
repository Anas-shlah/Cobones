import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ProductDetails = ({route, navigation}) => {
  return (
    <View>
      <Text>{route.params.data.body}</Text>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({});
