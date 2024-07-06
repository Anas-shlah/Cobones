import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TextInput} from '../../components/TextInput';
import SearchIcon from '../../assets/svg/search';
import {translation} from '../../locales';
import {Swiper} from '../../components/Swiper';
import api from '../../api';
import Colors from '../../constants/Colors';
import CategoriesSection from './Categories';

const Home = () => {
  const [data, setData] = useState([]);

  function getFirstData() {
    api.getFirstItemHome().then(res => setData(res));
  }
  useEffect(() => {
    getFirstData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={{backgroundColor: Colors.white, height: '12%', padding: 10}}>
        <TextInput
          placeholder={translation.screens.Home['search-cobone']}
          icon={<SearchIcon />}
        />
      </View>
      <ScrollView
        style={styles.body}
        contentContainerStyle={{paddingBottom: 30}}
      >
        <View>
          <Swiper data={data} typeSwiper={'a'} />
        </View>
        <View>
          <Swiper
            data={data}
            typeSwiper={'b'}
            label={translation.screens.Home['unmissable-offers']}
          />
        </View>
        <View>
          <CategoriesSection />
        </View>
        <View>
          <Swiper
            data={data}
            typeSwiper={'b'}
            label={translation.screens.Home['unmissable-offers']}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    padding: 10,
  },
});
