import React from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {getTime} from '../utils/time';
import iconName from '../utils/icons';
import {localizeTemp} from '../utils/units';

const Weekly = props => {
  const {header, settings} = props;

  const getIcon = condition => {
    return iconName[condition];
  };

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.mainText}>{getTime(header.time, 'dddd')}</Text>
      </View>
      <View style={styles.center}>
        <Text>
          <Icon name={getIcon(header.icon)} style={styles.icons} />
        </Text>
      </View>
      <View style={styles.right}>
        <Text style={styles.baseText}>
          {localizeTemp(header.temperatureMin, settings[0]) +
            ' - ' +
            localizeTemp(header.temperatureMax, settings[0])}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    alignItems: 'center',
    height: 40,
  },

  baseText: {
    fontFamily: 'Cochin',
    color: '#fff',
  },

  mainText: {
    fontSize: 16,
    color: '#fff',
  },

  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },

  left: {
    width: Dimensions.get('window').width / 3,
  },

  center: {
    textAlign: 'right',
  },

  right: {},

  icons: {
    fontSize: 24,
    color: '#fff',
    textAlignVertical: 'center',
  },
});

export default Weekly;
