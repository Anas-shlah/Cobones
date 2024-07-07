import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import CardProduct from '../../components/CardProduct';
import DiscountAndGift from '../../components/DiscountAndGift';
import PaymentDetails from './PaymentDetails';
import Colors from '../../constants/Colors';
import {Text} from '../../components/Text';
import {Button} from '../../components/Button';
import Layout from '../../constants/Layout';
import {translation} from '../../locales';

const AddToCartScreen = ({route}) => {
  const data = route.params;
  return (
    <View>
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={{paddingBottom: 50}}
          style={{height: Layout.window.height - Layout.window.height / 5}}
        >
          <CardProduct data={data} />
          <DiscountAndGift style={styles.input} />
          <DiscountAndGift preset="gift" />
          <PaymentDetails value={data.price} />
        </ScrollView>
      </View>
      <View style={styles.payButton}>
        <View>
          <Text preset="secondary">
            {translation.screens.Cart['total-price']}
          </Text>
          <Text preset="header">AED {data.price}</Text>
        </View>
        <Button
          preset="secondary"
          title={translation.screens.Cart['proceed-to-pay']}
          style={{width: '60%'}}
        />
      </View>
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
  payButton: {
    backgroundColor: Colors.white,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
