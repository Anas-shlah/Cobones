import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CardProduct from '../../components/CardProduct';

const AddToCartScreen = ({route, navigation}) => {
  const data = route.params;
  return (
    <View style={styles.container}>
      <ScrollView>
        <CardProduct data={data} />
      </ScrollView>
    </View>
  );
};

export default AddToCartScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
