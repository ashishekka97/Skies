import React from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import Weekly from './Weekly'

const WeeklyForecast = (props) => {
  const { daily } = props;
  return (
    <View>
      <Text style={styles.titleText}>
        Weekly ForeCast
      </Text>
      {
        daily.data ? (daily.data).map(data => {
          return <Weekly data={data} />
        }) : null
      }
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
})

export default WeeklyForecast;