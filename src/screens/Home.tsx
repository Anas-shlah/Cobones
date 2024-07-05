import {StyleSheet, View} from 'react-native';
import React from 'react';
import {TextInput} from '../components/TextInput';
import SearchIcon from '../assets/svg/search';
import {translation} from '../locales';

const Home = () => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={translation.screens.Home['search-cobone']}
        icon={<SearchIcon />}
      />
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
