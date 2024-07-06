import {Image, View, ViewStyle} from 'react-native';
import React from 'react';
import SwiperFlatList, {
  SwiperFlatListProps,
} from 'react-native-swiper-flatlist';
import Layout from '../constants/Layout';
import Colors from '../constants/Colors';

const typesSwiper = {
  a: [
    {
      width: Layout.window.width - 20,
      height: Layout.window.width / 2 + 10,
    },
  ] as ViewStyle,
  b: [
    {width: Layout.window.width / 1.5, height: Layout.window.width / 2 + 30},
  ] as ViewStyle,
};

const typesImageSwiper = {
  a: [
    {
      width: Layout.window.width - 20,
      height: Layout.window.width / 2,
      borderRadius: Layout.window.width / 12,
    },
  ] as ViewStyle,
  b: [
    {width: Layout.window.width / 1.5, height: Layout.window.width / 2},
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
};

export type CardItemProps = {
  typeSwiper?: TypesSwiper;
  containerStyle?: ViewStyle;
  data: DataItem;
};

const CardItem = (props: CardItemProps) => {
  const {containerStyle, data, typeSwiper = 'a', ...otherCardItemProps} = props;
  return (
    <View style={[containerStyle, typesSwiper[typeSwiper]]}>
      <Image
        source={{
          uri: data.imgUrl,
        }}
        defaultSource={require('../assets/images/logoApp.webp')}
        resizeMode="center"
        style={typesImageSwiper[typeSwiper]}
      />
    </View>
  );
};

const Swiper = (props: SwiperProps) => {
  const {style, containerStyle, typeSwiper = 'a', ...otherSwiperProps} = props;
  return (
    <SwiperFlatList
      showPagination={typeSwiper === 'a'}
      data={otherSwiperProps.data}
      renderItem={({item}) => (
        <CardItem
          data={item}
          typeSwiper={typeSwiper}
          otherCardItemProps={otherSwiperProps}
        />
      )}
      paginationStyleItem={{width: 30, height: 5}}
      paginationActiveColor={Colors.primary}
      paginationDefaultColor={Colors.unActivePrimary}
    />
  );
};

Swiper.defaultProps = {
  typeSwiper: 'a',
};

export {Swiper};
