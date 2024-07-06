import {Platform, ScrollView, StyleSheet, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {Swiper} from '../../components/Swiper';
import {Text} from '../../components/Text';
import Colors from '../../constants/Colors';
import OptionSection from '../../components/OptionSection';
import WebView from 'react-native-webview';
import Layout from '../../constants/Layout';
import DirectionsButton from '../../components/DirectionsButton';
import {Button} from '../../components/Button';
import CartIcon from '../../assets/svg/cart';
import {translation} from '../../locales';

const ProductDetails = ({route, navigation}) => {
  const {data} = route.params;
  const scrollViewRef = useRef(null);
  const optionSectionRef = useRef(null);
  const [counter, setCounter] = useState(0);
  const handlePress = () => {
    // Scroll to the target OptionSection element
    optionSectionRef.current.measureLayout(scrollViewRef.current, (x, y) => {
      scrollViewRef.current.scrollTo({x: 0, y: y, animated: true});
    });
  };

  const onAddToCart = () => {
    if (!counter) {
      handlePress();
      return;
    }
    navigation.navigate('AddToCartScreen');
  };

  return (
    <View>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={{paddingBottom: 30}}
        style={{height: Layout.window.height - Layout.window.height / 6}}
      >
        <View>
          <Swiper data={data.images} typeSwiper={'c'} />
        </View>
        <View style={styles.containerTitles}>
          <Text preset="primary">{data.title}</Text>
          <Text preset="secondary">{data.body}</Text>
        </View>
        <View ref={optionSectionRef}>
          <OptionSection data={data.options} setCounter={setCounter} />
        </View>
        <WebView
          source={{uri: data.video}}
          style={styles.videoContainer}
          contentMode="desktop"
        />
        <DirectionsButton data={data.directions} />
      </ScrollView>
      <View style={{backgroundColor: Colors.white, padding: 20}}>
        <Button
          preset="secondary"
          title={translation.general.buttons['add-to-cart']}
          onPress={onAddToCart}
        >
          <CartIcon
            color={Colors.white}
            style={{marginHorizontal: Layout.spacing.md}}
          />
        </Button>
      </View>
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
