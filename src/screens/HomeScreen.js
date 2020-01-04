import React from 'react';
import {ScrollView, ToastAndroid, RefreshControl} from 'react-native';
import WeatherImage from '../components/WeatherImage';
import BottomWrapper from '../components/BottomWrapper';
import {connect} from 'react-redux';
import {getWeatherData, getReverseGeoCode} from '../redux/actions';
import Loader from '../components/Loader';
import {getCurrentLocation} from '../utils/location';

class HomeScreen extends React.Component {
  state = {
    isLocating: true,
    latitude: '',
    longitude: '',
  };

  componentDidMount() {
    if (
      this.props.currentLocation &&
      this.props.currentLocation.label !== 'Current Location'
    ) {
      this.setState({
        isLocating: false,
        latitude: this.props.currentLocation.latitude,
        longitude: this.props.currentLocation.longitude,
      });
      this.props.fetchCity(
        this.props.currentLocation.latitude,
        this.props.currentLocation.longitude,
      );
      this.props.fetchData(
        this.props.currentLocation.latitude,
        this.props.currentLocation.longitude,
      );
    } else {
      getCurrentLocation(this.updateLogic, this.errorLogic);
    }
  }

  componentDidUpdate() {
    if (
      this.props.currentLocation &&
      (this.props.currentLocation.latitude !== this.state.latitude ||
        this.props.currentLocation.longitude !== this.state.longitude)
    ) {
      this.setState({
        isLocating: false,
        latitude: this.props.currentLocation.latitude,
        longitude: this.props.currentLocation.longitude,
      });
      this.props.fetchCity(
        this.props.currentLocation.latitude,
        this.props.currentLocation.longitude,
      );
      this.props.fetchData(
        this.props.currentLocation.latitude,
        this.props.currentLocation.longitude,
      );
    }
  }

  updateLogic = position => {
    this.setState({
      isLocating: false,
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
    this.props.fetchCity(position.coords.latitude, position.coords.longitude);
    this.props.fetchData(position.coords.latitude, position.coords.longitude);
  };

  showToast = (message, duration = 'SHORT', position = 'BOTTOM') => {
    ToastAndroid.show(message, ToastAndroid[duration], ToastAndroid[position]);
  };

  errorLogic = error => {
    switch (error.code) {
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
  };

  render() {
    const {weather, isLoading, location, settings} = this.props;
    return (
      <>
        {this.state.isLocating ? (
          <Loader />
        ) : (
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={isLoading}
                onRefresh={() =>
                  this.props.fetchData(
                    this.state.latitude,
                    this.state.longitude,
                  )
                }
                progressViewOffset={30}
              />
            }>
            <WeatherImage
              data={weather}
              reverseGeocode={location}
              {...this.props}
            />
            <BottomWrapper data={weather} settings={settings} />
          </ScrollView>
        )}
        {this.props.weather.error && this.showToast(this.props.weather.error)}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    weather: state.weather.data,
    isLoading: state.weather.isLoading,
    location: state.location.reverseGeocode,
    currentLocation: state.location.currentLocation,
    settings: state.settings,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: (lat, lon) => {
      return dispatch(getWeatherData(lat, lon));
    },

    fetchCity: (lat, lon) => {
      return dispatch(getReverseGeoCode(lat, lon));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
