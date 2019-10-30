import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome5';

const Details = (props) => {
  return (
    <View>
      <Text style={styles.titleText}>
        Details
      </Text>
      <View style={styles.properties}>
        <View style={styles.property}>
          <Icons name={'thermometer-half'} style={styles.icons} solid/>
        </View>
        <Text style={styles.property}>
          1
        </Text>
        <Text style={styles.property}>
          1
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
    color: '#fff'
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  properties: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  property: {
    width: '50%',
    height: 50,
    color: '#fff'
  },
  icons: {
    color: '#fff'
  }
})

export default Details;