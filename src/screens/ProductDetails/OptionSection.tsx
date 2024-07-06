import {StyleSheet, View} from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';
import {Text} from '../../components/Text';
import {translation} from '../../locales';
import Counter from '../../components/Counter';

export type OptionSection = {
  data: [text: string, price: string | number];
};

const OptionSection = (props: OptionSection) => {
  const {data} = props;

  return (
    <View style={styles.container}>
      <Text preset="secondary" style={styles.title}>
        {translation.screens['product-details']['choose-your-option']}
      </Text>

      {data.map(value => {
        return (
          <View>
            <Text preset="secondary" style={styles.optionText}>
              {value.text}
            </Text>
            <View style={styles.footer}>
              <Text preset="primary">AED {value.price}</Text>
              <Counter />
            </View>
            {data.length > 1 && <View style={styles.line} />}
          </View>
        );
      })}
    </View>
  );
};

export default OptionSection;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
  },
  optionText: {
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 25,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  line: {
    width: '100%',
    backgroundColor: Colors.textSecondary,
    height: 1,
    marginVertical: 10,
  },
});
