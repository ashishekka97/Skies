import React, {useCallback, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SavedList = props => {
  const {places, onSelect, onDelete} = props;

  const renderItem = (item) => {
    return (
      <TouchableOpacity
        underlayColor="rgba(255, 255, 255, 0.3)"
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
          <TouchableOpacity onPress={() => onDelete(item.index)}>
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
      style={styles.resultContainer}
      data={places}
      renderItem={renderItem}
      keyExtractor={(item, index) => 'location_' + index}
    />
  );
};

const styles = StyleSheet.create({
  resultContainer: {
    width: '95%',
    margin: 10,
    marginTop: 0,
  },

  resultItem: {
    padding: 16,
  },

  resultText: {
    fontFamily: 'Dosis-Regular',
    color: 'white',
    fontSize: 16,
    padding: 10,
    width: '90%',
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

  iconHolder: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 15,
    padding: 5,
  },

  icon: {
    fontSize: 24,
    color: '#fff',
    textAlignVertical: 'center',
    fontWeight: 'normal',
  },
});

export default SavedList;
