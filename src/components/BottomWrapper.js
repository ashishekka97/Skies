import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import Details from './Details';

const BottomWrapper = (props) => {
  return (
    <View style={styles.bgStyle}>
      <View style={styles.content}>
        <Details/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  bgStyle: {
    backgroundColor: '#220000',
    height: '100%'
  },
  content: {
    margin: 10
  }
});

export default BottomWrapper;