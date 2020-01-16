import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ToastAndroid,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {getCurrentLocation} from '../utils/location';

const SavedList = props => {
  const {places, current, onSelect, onDelete} = props;

  const onDeletePress = item => {
    onDelete(item.index);
    if (item.item.label === current.label) {
      getCurrentLocation(updateLogic, errorLogic);
    }
  };

  const updateLogic = position => {
    console.log('Here');
    onSelect({
      label: 'Current Location',
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      usingGPS: true,
    });
  };

  const showToast = (message, duration = 'SHORT', position = 'BOTTOM') => {
    ToastAndroid.show(message, ToastAndroid[duration], ToastAndroid[position]);
  };

  const errorLogic = error => {
    switch (error.code) {
      case 1:
        break;
      case 2:
        break;
      case 3:
        showToast(error.message, 'SHORT', 'BOTTOM');
        break;
      default:
        showToast(error.message);
    }
  };

  const renderItem = item => {
    return (
      <TouchableOpacity
        onPress={() => {
          onSelect({
            label: item.item.label,
            latitude: item.item.latitude,
            longitude: item.item.longitude,
            usingGPS: false,
          });
        }}>
        <View style={styles.city}>
          <Text style={styles.resultText}>{item.item.label}</Text>
          <TouchableOpacity onPress={() => onDeletePress(item)}>
            <Text style={styles.iconHolder}>
              <Icon name="close" style={styles.icon} />
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      style={styles.list}
      data={places}
      renderItem={renderItem}
      keyExtractor={(item, index) => 'location_' + index}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    height: Dimensions.get('screen').height / 1.33,
  },

  city: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    marginVertical: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
  },

  resultText: {
    fontFamily: 'Dosis-Regular',
    color: 'white',
    fontSize: 16,
    padding: 10,
    width: '90%',
  },

  iconHolder: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 15,
    padding: 5,
  },

  icon: {
    fontSize: 16,
    color: '#fff',
    textAlignVertical: 'center',
    fontWeight: 'normal',
  },
});

export default SavedList;
