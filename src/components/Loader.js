import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

const Loader = props => {
  const {color = 'white', size = 'large'} = props;

  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#375A9C',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default Loader;
