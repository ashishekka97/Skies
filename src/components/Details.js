import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Details = (props) => {
  return (
    <View>
      <Text style={styles.titleText}>
        Details
      </Text>

      <View style={styles.properties}>

        <View style={styles.property}>
          <View style={styles.inProp}>
            <Icon name={'thermometer-half'} style={styles.icons} />
            <View style={styles.propertyText}>
              <Text style={styles.propertyTitle}>Temperature</Text>
              <Text style={styles.propertyDetail}>12</Text>
            </View>
          </View>
        </View>

        <View style={styles.property}>
          <View style={styles.inProp}>
            <Icon name={'thermometer-half'} style={styles.icons} />
            <View style={styles.propertyText}>
              <Text style={styles.propertyTitle}>Temperature</Text>
              <Text style={styles.propertyDetail}>12</Text>
            </View>
          </View>
        </View>

        <View style={styles.property}>
          <View style={styles.inProp}>
            <Icon name={'thermometer-half'} style={styles.icons} />
            <View style={styles.propertyText}>
              <Text style={styles.propertyTitle}>Temperature</Text>
              <Text style={styles.propertyDetail}>12</Text>
            </View>
          </View>
        </View>

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
    marginTop: 15
  },
  inProp: {
    padding: 5,
    flex: 1,
    flexDirection: 'row'
  },
  icons: {
    fontSize: 24,
    width: '20%',
    color: '#fff',
    textAlignVertical: 'center'
  },
  propertyText: {
    width: '80%'
  },
  propertyTitle: {
    color: '#fff',
    fontWeight: 'bold'
  },
  propertyDetail: {
    color: '#fff'
  }
})

export default Details;