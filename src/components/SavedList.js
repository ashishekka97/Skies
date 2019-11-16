import React, {useCallback, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

const SavedList = (props) => {
  const { places, onSelect } = props;

  const renderItem = (item) => {
    console.log(item)
    return (
      <TouchableOpacity
        underlayColor='rgba(255, 255, 255, 0.3)'
      >
        <Text style={styles.resultText}>{item.item.label}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <FlatList
      style={styles.resultContainer}
      data={places}
      renderItem={renderItem}
      keyExtractor={(item, index) => index}
    />
  )
}

const styles = StyleSheet.create({
  resultContainer: {
    width: '95%',
    margin: 10,
    marginTop: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 12
  },

  resultItem: {
    padding: 16,
  },

  resultText: {
    color: 'white',
    fontSize: 16,
    padding: 10,
  }
})

export default SavedList;