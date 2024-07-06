import {Linking, Platform, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {Button} from '../../components/Button';
import {Swiper} from '../../components/Swiper';
import {Text} from '../../components/Text';
import Colors from '../../constants/Colors';
import OptionSection from './OptionSection';

const ProductDetails = ({route, navigation}) => {
  const {data} = route.params;
  console.log(data);
  const fullAddress = '25.1398260, 55.1896910';
  const url = Platform.select({
    ios: `maps:0,0?q=${fullAddress}`,
    android: `geo:0,0?q=${fullAddress}`,
  });

  return (
    <View>
      <ScrollView
        style={styles.body}
        contentContainerStyle={{paddingBottom: 30}}
      >
        <View>
          <Swiper data={data.images} typeSwiper={'c'} />
        </View>
        <View style={styles.containerTitles}>
          <Text preset="primary">{data.title}</Text>
          <Text preset="secondary">{data.body}</Text>
        </View>
        {data?.options?.length && <OptionSection data={data.options} />}
      </ScrollView>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  body: {
    padding: 10,
  },
  containerTitles: {
    padding: 10,
    backgroundColor: Colors.white,
    marginBottom: 10,
  },
});
