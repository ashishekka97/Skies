import React, {useCallback, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native';

const SuggestionList = props => {
  const {suggestions, onSelect} = props;

  const renderItem = item => {
    return (
      <TouchableOpacity
        underlayColor="rgba(255, 255, 255, 0.3)"
        onPress={() => {
          console.log('Pressed');
          onSelect(item.item.label);
        }}>
        <Text style={styles.resultText}>{item.item.label}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      style={styles.resultContainer}
      data={suggestions}
      renderItem={renderItem}
      keyExtractor={item => item.locationId}
    />
  );
};

const styles = StyleSheet.create({
  resultContainer: {
    position: 'absolute',
    top: 110,
    width: '100%',
    marginTop: 0,
    backgroundColor: 'rgba(0, 0, 0, 1)',
    borderRadius: 12,
    zIndex: 10,
  },

  resultItem: {
    padding: 16,
  },

  resultText: {
    fontFamily: 'Dosis-Regular',
    color: 'white',
    fontSize: 16,
    padding: 10,
  },
});

export default SuggestionList;
