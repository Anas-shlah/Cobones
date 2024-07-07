import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import CardProduct from '../../components/CardProduct';
import DiscountAndGift from '../../components/DiscountAndGift';

const AddToCartScreen = ({route}) => {
  const data = route.params;
  return (
    <View style={styles.container}>
      <ScrollView>
        <CardProduct data={data} />
        <DiscountAndGift style={styles.input} />
        <DiscountAndGift preset="gift" />
      </ScrollView>
    </View>
  );
};

export default AddToCartScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    marginVertical: 30,
  },
});
