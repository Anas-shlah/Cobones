import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import CardProduct from '../../components/CardProduct';
import DiscountAndGift from '../../components/DiscountAndGift';
import PaymentDetails from './PaymentDetails';

const AddToCartScreen = ({route}) => {
  const data = route.params;
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{paddingBottom: 50}}>
        <CardProduct data={data} />
        <DiscountAndGift style={styles.input} />
        <DiscountAndGift preset="gift" />
        <PaymentDetails value={data.price} />
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
