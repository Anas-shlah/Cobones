import {StyleSheet, View, ViewStyle} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Text} from './Text';
import {translation} from '../locales';
import {TextInput} from './TextInput';
import {Button} from './Button';
import Colors from '../constants/Colors';

export type DiscountAndGiftProps = {
  preset?: 'coupon' | 'gift';
  onValueChange?: (value: number) => void;
  style?: ViewStyle;
};

const DiscountAndGift = (props: DiscountAndGiftProps) => {
  const {preset = 'coupon', onValueChange, style} = props;
  const [inputValue, setInputValue] = useState('');
  const label =
    preset === 'coupon'
      ? translation.screens.Cart['discount-code']
      : translation.screens.Cart['gift-card'];
  const placeholder =
    preset === 'coupon'
      ? translation.screens.Cart.placeholder['enter-coupon-code']
      : translation.screens.Cart.placeholder['gift-card-code'];

  useEffect(() => {
    if (onValueChange) {
      onValueChange(inputValue);
    }
  }, []);

  return (
    <View style={style}>
      <Text preset="primary">{label}</Text>
      <View style={styles.body}>
        <TextInput
          containerStyle={{backgroundColor: Colors.white}}
          wrapperStyle={{width: '55%'}}
          placeholder={placeholder}
          value={inputValue}
          onChangeText={v => setInputValue(v)}
        />
        <Button
          style={{width: '45%'}}
          preset="secondary"
          title={translation.general.buttons.Apply}
        />
      </View>
    </View>
  );
};

export default DiscountAndGift;

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 10,
    borderRadius: 15,
  },
});
