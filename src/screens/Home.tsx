import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {TextInput} from '../components/TextInput';
import SearchIcon from '../assets/svg/search';
import {translation} from '../locales';
import Layout from '../constants/Layout';
import {Text} from '../components/Text';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {Swiper} from '../components/Swiper';

const data = [
  {
    title: 'Aenean leo',
    body: 'Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
    imgUrl:
      'https://s3.eu-west-1.amazonaws.com/cdn.cobone.com/marketing/website/Mobile-Banner_Western-Hotels-Summer-Getaways.jpg?v=65',
  },
  {
    title: 'In turpis',
    body: 'Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ',
    imgUrl:
      'https://s3.eu-west-1.amazonaws.com/cdn.cobone.com/marketing/website/Mobile-Banner_Western-Hotels-Summer-Getaways.jpg?v=65',
  },
  {
    title: 'Lorem Ipsum',
    body: 'Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.',
    imgUrl:
      'https://s3.eu-west-1.amazonaws.com/cdn.cobone.com/marketing/website/Mobile-Banner_Western-Hotels-Summer-Getaways.jpg?v=65',
  },
];

const Home = () => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={translation.screens.Home['search-cobone']}
        icon={<SearchIcon />}
      />
      <View
        style={{
          paddingHorizontal: -10,
        }}
      >
        <Swiper data={data} typeSwiper={'a'} />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
