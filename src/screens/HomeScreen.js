import React from 'react';
import {
  ScrollView
} from 'react-native';
import WeatherImage from '../components/WeatherImage';
import BottomWrapper from '../components/BottomWrapper';
import { connect } from 'react-redux';
import { getWeatherData, getReverseGeoCode  } from '../redux/actions';
import Loader from '../components/Loader';
import { requestLocationPermission } from '../utils/location';

class HomeScreen extends React.Component {

  componentDidMount() {
    requestLocationPermission(this.updateLogic, this.errorLogic)
  }

  updateLogic = (position) => {
    console.log('Yes');
    this.props.fetchCity(position.coords.latitude, position.coords.longitude);
    this.props.fetchData(position.coords.latitude, position.coords.longitude);
  }

  errorLogic = (error) => {
    console.log(error)
  }

  render() {
    const { weather, isLoading, location } = this.props;
    return (
      <>
        {
          isLoading ? <Loader /> :
          <ScrollView>
            <WeatherImage data={weather} reverseGeocode={location} />
            <BottomWrapper data={weather}/>
          </ScrollView>
        }
      </>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    weather: state.weather.data,
    isLoading: state.weather.isLoading,
    location: state.location.reverseGeocode
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (lat, lon) => {
      return dispatch(getWeatherData(lat, lon))
    },

    fetchCity: (lat, lon) => {
      return dispatch(getReverseGeoCode(lat, lon))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);