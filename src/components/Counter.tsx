import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Text} from './Text';

export type CounterProps = {
  initialValue?: number;
  onValueChange?: (value: number) => void;
};

const Counter = (props: CounterProps) => {
  const {initialValue = 0, onValueChange} = props;
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    if (onValueChange) {
      onValueChange(value);
    }
  }, []);

  const increment = () => {
    const newValue = value + 1;
    setValue(newValue);
    if (onValueChange) {
      onValueChange(newValue);
    }
  };

  const decrement = () => {
    const newValue = value - 1;
    setValue(newValue);
    if (onValueChange) {
      onValueChange(newValue);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={decrement}
        disabled={value <= 0}
      >
        <Text style={styles.textButton}>-</Text>
      </TouchableOpacity>

      <Text>{value}</Text>

      <TouchableOpacity style={styles.button} onPress={increment}>
        <Text style={styles.textButton}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#C0C0C0',
    borderRadius: 5,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
    borderColor: '#000',
    borderWidth: 1,
  },
  textButton: {
    color: '#000',
    fontSize: 15,
    fontWeight: '800',
  },
});
