import React from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { getTime } from '../utils/time';

const Weekly = (props) => {
  const { data } = props
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.baseText}>
          { getTime(data.time, "dddd DD") }
        </Text>
      </View>
      <View style={styles.center}>
        <Text>
        <Icon name={'thermometer-half'} style={styles.icons}/>  
        </Text>
      </View>
      <View style={styles.right}>
        <Text style={styles.baseText}>
          {Math.round(data.temperatureMin)}
        </Text>

        <Text style={styles.baseText}>
        {Math.round(data.temperatureMax)}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    alignItems: 'center'
  },

  baseText: {
    fontFamily: 'Cochin',
    color: '#fff'
  },

  titleText: {
    fontSize: 20,
    fontWeight: 'bold', 
    color: '#fff'
  },

  left: {

  },

  center: {

  },

  right: {

  },

  icons: {
    fontSize: 24,
    width: '20%',
    color: '#fff',
    textAlignVertical: 'center'
  },
})

export default Weekly;