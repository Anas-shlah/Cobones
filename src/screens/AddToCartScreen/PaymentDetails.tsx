import {StyleSheet, View} from 'react-native';
import React from 'react';
import {translation} from '../../locales';
import {Text} from '../../components/Text';
import Colors from '../../constants/Colors';

export type PaymentDetailsProps = {
  value: string;
};

const PaymentDetails = (props: PaymentDetailsProps) => {
  const {value} = props;
  return (
    <View>
      <Text>{translation.screens.Cart['payment-details']}</Text>
      <View style={styles.body}>
        <View style={styles.row}>
          <Text>{translation.screens.Cart.subtotal}</Text>
          <Text>AED {value}</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.row}>
          <Text style={{fontWeight: 'bold'}}>To Pay</Text>
          <Text style={{fontWeight: 'bold'}}>AED {value}</Text>
        </View>
      </View>
    </View>
  );
};

export default PaymentDetails;

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
    padding: 10,
    marginTop: 15,
    borderRadius: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
    marginVertical: 10,
  },
  line: {
    height: 1,
    backgroundColor: '#000',
    marginHorizontal: 10,
  },
});
