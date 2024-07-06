import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {HorizontalFlatList} from '@idiosync/horizontal-flatlist';
import Layout from '../../constants/Layout';
import Colors from '../../constants/Colors';
import {Text} from '../../components/Text';

const CategoriesSection = () => {
  const num = [
    {
      img: 'https://cdn.cobone.com/onsite-banners/2022/icons/new-in.jpg',
      title: 'New In',
      id: 1,
    },
    {
      img: 'https://cdn.cobone.com/onsite-banners/2022/icons/activities.jpg',
      title: 'Auto',
      id: 2,
    },
    {
      img: 'https://cdn.cobone.com/onsite-banners/2022/icons/auto.jpg',
      title: 'Best sellers',
      id: 3,
    },
    {
      img: 'https://cdn.cobone.com/onsite-banners/2022/icons/beauty.jpg',
      title: 'Beauty',
      id: 4,
    },
    {
      img: 'https://cdn.cobone.com/onsite-banners/2022/icons/best-seller.jpg',
      title: 'Best Sellers',
      id: 5,
    },
    {
      img: 'https://cdn.cobone.com/onsite-banners/2022/icons/food.jpg',
      title: 'Food',
      id: 6,
    },
    {
      img: 'https://cdn.cobone.com/onsite-banners/2022/icons/getaways.jpg',
      title: 'Getaways',
      id: 7,
    },
    {
      img: 'https://cdn.cobone.com/onsite-banners/2022/icons/services.jpg',
      title: 'Services',
      id: 8,
    },
    {
      img: 'https://cdn.cobone.com/onsite-banners/2022/icons/tickets.jpg',
      title: 'Tickets',
      id: 9,
    },
    {
      img: 'https://cdn.cobone.com/onsite-banners/2022/icons/wellness.jpg',
      title: 'Wellness',
      id: 10,
    },
  ];

  const renderItem = ({item}) => (
    <View style={styles.containerItem}>
      <View style={styles.containerIcon}>
        <Image source={{uri: item.img}} style={styles.icon} />
      </View>
      <Text preset="secondary">{item.title}</Text>
    </View>
  );
  const keyExtractor = item => item.id;

  return (
    <View style={styles.container}>
      <HorizontalFlatList
        data={num}
        numRows={2}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default CategoriesSection;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    width: Layout.window.width - 30,
    borderRadius: 10,
    marginVertical: Layout.spacing.md,
  },
  icon: {width: 60, height: 60},
  containerItem: {
    alignItems: 'center',
    margin: 20,
  },
  containerIcon: {
    backgroundColor: Colors.placeholder,
    padding: 5,
    borderRadius: 20,
  },
});
