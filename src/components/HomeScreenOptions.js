import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight, Alert} from 'react-native';
import accent from '../utils/accent';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';

const HomeScreenOptions = props => {
  const {navigation, condition} = props;
  const launchSearch = () => {
    navigation.navigate('Search', {
      color: getAccent(),
    });
  };

  const launchSettings = () => {
    navigation.navigate('Settings', {
      color: getAccent(),
    });
  };

  const getAccent = () => {
    return accent[condition];
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={launchSearch}>
        <Text style={styles.item}>
          <Icon name={'magnify'} style={styles.icons} />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={launchSettings}>
        <Text style={styles.item}>
          <Icon name={'settings'} style={styles.icons} />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icons: {
    fontSize: 24,
    width: '20%',
    color: '#fff',
    textAlignVertical: 'center',
    fontWeight: 'normal',
  },
  item: {
    margin: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    padding: 5,
    borderRadius: 10,
  },
});

export default HomeScreenOptions;
