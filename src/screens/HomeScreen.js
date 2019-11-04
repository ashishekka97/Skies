import React from 'react';
import {
  ScrollView
} from 'react-native';
import WeatherImage from '../components/WeatherImage';
import BottomWrapper from '../components/BottomWrapper';
import { connect } from 'react-redux';
import { getWeatherData } from '../redux/actions';
import Loader from '../components/Loader';

class HomeScreen extends React.Component {
  componentDidMount() {
    this.props.fetchData(37.8267, -122.4233)
  }

  render() {
    const { weather } = this.props;
    return (
      <>
        {
          weather.isLoading ? <Loader /> :
          <ScrollView>
            <WeatherImage data={weather}/>
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
    weather: state.weather.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (lat, lon) => {
      return dispatch(getWeatherData(lat, lon))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);