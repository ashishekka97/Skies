import React from 'react';
import {
  ScrollView,
  ToastAndroid,
  RefreshControl
} from 'react-native';
import WeatherImage from '../components/WeatherImage';
import BottomWrapper from '../components/BottomWrapper';
import { connect } from 'react-redux';
import { getWeatherData, getReverseGeoCode  } from '../redux/actions';
import Loader from '../components/Loader';
import { getCurrentLocation } from '../utils/location';

class HomeScreen extends React.Component {
  // static navigationOptions = ({navigation}) => {
  //   //console.log(navigation)
  //   return {
  //     headerRight: () => <HomeScreenHeaderRight navigation={navigation} accent={this.props.weather.icon}/>
  //   }
  // }

  state = {
    isLocating: true,
    latitude: '',
    longitude: ''
  }

  componentDidMount() {
    getCurrentLocation(this.updateLogic, this.errorLogic)
  }

  updateLogic = (position) => {
    console.log('Yes');
    this.setState({
      isLocating: false,
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    })
    this.props.fetchCity(position.coords.latitude, position.coords.longitude);
    this.props.fetchData(position.coords.latitude, position.coords.longitude);
  }

  showToast = (message, duration = 'SHORT', position = 'BOTTOM') => {
    ToastAndroid.show(
      message,
      ToastAndroid[duration],
      ToastAndroid[position],
    );
  }

  errorLogic = (error) => {
    switch(error.code) {
      case 1:
        break;
      case 2:
        break;
      case 3:
        this.showToast(error.message, 'SHORT', 'BOTTOM');
        break;
      default:
        this.showToast(error.message);
    }
  }

  render() {
    const { weather, isLoading, location } = this.props;
    return (
      <>
        {
          this.state.isLocating ? <Loader /> :
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={isLoading}
                onRefresh={() => this.props.fetchData(this.state.latitude, this.state.longitude)}
                progressViewOffset={30}
              />
            }
          >
            <WeatherImage data={weather} reverseGeocode={location} {...this.props}/>
            <BottomWrapper data={weather}/>
          </ScrollView>
        }
        {
          this.props.weather.error && this.showToast(this.props.weather.error)
        }
      </>
    )
  }
}

const mapStateToProps = (state) => {
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