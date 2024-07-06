import {
  Linking,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Colors from '../constants/Colors';
import {Text} from './Text';
import SendIcon from '../assets/svg/send';
import MapIcon from '../assets/svg/map';

export type DirectionsButtonProps = {
  data: [title: string, nameLocation: string, value: string];
};

const DirectionsButton = (props: DirectionsButtonProps) => {
  const {title, nameLocation, value} = props.data;

  const url = Platform.select({
    ios: `maps:0,0?q=${value}`,
    android: `geo:0,0?q=${value}`,
  });

  const onPress = () => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Text preset="header">Directions</Text>
      <TouchableOpacity style={styles.content} onPress={onPress}>
        <View style={styles.header}>
          <Text preset="header">{title}</Text>
          <SendIcon />
        </View>

        <View style={styles.footer}>
          <MapIcon color={Colors.textSecondary} />
          <Text preset="primary" style={styles.nameLocation}>
            {nameLocation}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default DirectionsButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    padding: 10,
  },
  content: {
    backgroundColor: Colors.placeholder,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameLocation: {
    marginVertical: 10,
    color: Colors.textSecondary,
  },
});
