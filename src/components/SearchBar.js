import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const SearchBar = props => {
  const {onChangeText, onEndEditing} = props;
  return (
    <TextInput
      style={styles.input}
      placeholder="Find Places"
      placeholderTextColor="white"
      onChangeText={onChangeText}
      onEndEditing={onEndEditing}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    fontFamily: 'Dosis-Regular',
    borderRadius: 10,
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    paddingLeft: 15,
    paddingRight: 15,
  },
});

export default SearchBar;
