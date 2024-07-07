import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import {Text} from './Text';
import Counter from './Counter';

const CardProduct = ({data}) => {
  // get data from api and state management
  return (
    <View style={styles.container}>
      <Image
        source={{uri: data.imgUrl}}
        height={Layout.window.height / 5}
        width={'100%'}
        resizeMode="stretch"
        style={styles.image}
      />
      <View style={styles.body}>
        <Text preset="primary">{data.title}</Text>
        <Text preset="primary" style={{fontSize: 16}}>
          {data.options[0].text}
        </Text>
      </View>

      <View style={styles.footer}>
        <Text preset="header">AED {data.price}</Text>
        <Counter initialValue={1} />
      </View>
    </View>
  );
};

export default CardProduct;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    padding: 5,
    borderRadius: 10,
  },
  image: {
    borderRadius: 10,
  },
  body: {
    paddingHorizontal: 5,
    marginVertical: 15,
    marginBottom: 30,
  },
  footer: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
