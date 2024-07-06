import {Platform, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {Swiper} from '../../components/Swiper';
import {Text} from '../../components/Text';
import Colors from '../../constants/Colors';
import OptionSection from '../../components/OptionSection';
import WebView from 'react-native-webview';
import Layout from '../../constants/Layout';
import DirectionsButton from '../../components/DirectionsButton';

const ProductDetails = ({route, navigation}) => {
  const {data} = route.params;
  console.log(data);

  return (
    <View>
      <ScrollView contentContainerStyle={{paddingBottom: 30}}>
        <View>
          <Swiper data={data.images} typeSwiper={'c'} />
        </View>
        <View style={styles.containerTitles}>
          <Text preset="primary">{data.title}</Text>
          <Text preset="secondary">{data.body}</Text>
        </View>
        {data?.options?.length && <OptionSection data={data.options} />}
        <WebView
          source={{uri: data.video}}
          style={styles.videoContainer}
          contentMode="desktop"
        />
        <DirectionsButton data={data.directions} />
      </ScrollView>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  containerTitles: {
    padding: 10,
    backgroundColor: Colors.white,
    marginBottom: 10,
  },
  videoContainer: {
    height: Layout.window.height / 3,
    width: Layout.window.width,
    marginVertical: Layout.spacing.lg,
  },
});
