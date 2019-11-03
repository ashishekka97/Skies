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
    console.log(this.props);
    this.props.fetchData('Tokyo')
  }

  render() {
    console.log(this.props);
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
    fetchData: (city) => {
      return dispatch(getWeatherData(city))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);