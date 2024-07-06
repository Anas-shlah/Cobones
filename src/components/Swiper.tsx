import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import SwiperFlatList, {
  SwiperFlatListProps,
} from 'react-native-swiper-flatlist';
import Layout from '../constants/Layout';
import Colors from '../constants/Colors';
import {Text} from './Text';
import {useNavigation} from '@react-navigation/native';

const typesSwiper = {
  a: [
    {
      width: Layout.window.width - 20,
      height: Layout.window.width / 2,
    },
  ] as ViewStyle,
  b: [
    {
      width: Layout.window.width / 1.2,
    },
  ] as ViewStyle,
};

const typesImageSwiper = {
  a: [
    {
      width: Layout.window.width - 20,
      height: Layout.window.width / 2.5,
      borderRadius: Layout.window.width / 20,
    },
  ] as ViewStyle,
  b: [
    {
      width: Layout.window.width / 1.3,
      height: Layout.window.width / 2.5,
      borderRadius: Layout.window.width / 20,
    },
  ] as ViewStyle,
};

type DataItem = {
  imgUrl?: string;
  containerStyle?: ViewStyle;
};
type TypesSwiper = keyof typeof typesSwiper;

export type SwiperProps = SwiperFlatListProps & {
  typesSwiper?: TypesSwiper;
  data: [DataItem];
  label?: string;
};

export type CardItemProps = {
  typeSwiper?: TypesSwiper;
  containerStyle?: ViewStyle;
  data: DataItem;
};

const CardItem = (props: CardItemProps) => {
  const {
    containerStyle,
    onPress,
    data,
    typeSwiper = 'a',
    ...otherCardItemProps
  } = props;

  return (
    <TouchableOpacity
      style={[containerStyle, typesSwiper[typeSwiper]]}
      onPress={onPress}
    >
      <View style={typeSwiper === 'b' && styles.containerImg}>
        <Image
          source={{
            uri: data.imgUrl,
          }}
          defaultSource={require('../assets/images/logoApp.webp')}
          resizeMode="stretch"
          style={typesImageSwiper[typeSwiper]}
        />
        {typeSwiper !== 'a' && (
          <Text preset="primary" style={styles.title}>
            {data?.title && data?.title}
          </Text>
        )}
        {typeSwiper !== 'a' && (
          <Text preset="header" style={styles.price}>
            AED {data?.price && data?.price}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const Swiper = (props: SwiperProps) => {
  const {
    style,
    label,
    containerStyle,
    typeSwiper = 'a',
    ...otherSwiperProps
  } = props;
  const navigation = useNavigation();

  const onPressProduct = data => {
    navigation.navigate('ProductDetails', {data});
  };

  return (
    <View>
      {label && (
        <Text preset="title" style={styles.label}>
          {label}
        </Text>
      )}
      <SwiperFlatList
        showPagination={typeSwiper === 'a'}
        pagingEnabled={typeSwiper === 'a'}
        data={otherSwiperProps.data}
        renderItem={({item}) => (
          <CardItem
            data={item}
            typeSwiper={typeSwiper}
            otherCardItemProps={otherSwiperProps}
            onPress={() => {
              onPressProduct(item);
            }}
          />
        )}
        paginationStyleItem={{width: 30, height: 5}}
        paginationActiveColor={Colors.primary}
        paginationDefaultColor={Colors.unActivePrimary}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    margin: Layout.spacing.md,
  },
  title: {
    width: '90%',
    marginVertical: 15,
    marginLeft: 10,
    lineHeight: 30,
  },
  price: {
    marginLeft: 10,
  },
  containerImg: {
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 15,
    marginHorizontal: 5,
  },
});

Swiper.defaultProps = {
  typeSwiper: 'a',
};

export {Swiper};
