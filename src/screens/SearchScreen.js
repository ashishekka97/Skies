import React from 'react';
import {View, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import {connect} from 'react-redux';
import {
  getAutoComplete,
  resetAutoComplete,
  getGeocode,
  saveLocation,
  deleteLocation,
  setCurrentLocation,
} from '../redux/actions';
import SuggestionList from '../components/SuggestionList';
import SavedList from '../components/SavedList';
import CurrentLocation from '../components/CurrentLocation';

class SearchScreen extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = null;
    this.state = {
      label: '',
      latitude: '',
      longitude: '',
    };
  }

  componentDidMount() {
    this.setState({
      latitude: this.props.latitude,
      longitude: this.props.longitude,
    });
  }

  componentDidUpdate() {
    if (
      this.state.latitude !== this.props.latitude ||
      this.state.longitude !== this.props.longitude
    ) {
      this.setState({
        latitude: this.props.latitude,
        longitude: this.props.longitude,
      });
      this.props.savePlace({
        label: this.state.label,
        latitude: this.props.latitude,
        longitude: this.props.longitude,
      });
      this.onSetLocation({
        label: this.state.label,
        latitude: this.props.latitude,
        longitude: this.props.longitude,
      });
    }
  }

  static navigationOptions = {
    headerStatusBarHeight: 20,
    title: 'My Places',
    headerStyle: {
      marginTop: 15,
    },
  };

  getSuggestions = query => {
    if (query.length > 2) {
      console.log(query);
      this.props.autoComplete(query);
    } else {
      this.resetSuggestions();
    }
  };

  resetSuggestions = () => {
    this.props.reset();
  };

  initiateSave = label => {
    this.setState({
      label,
    });
    this.props.geocode(label);
  };

  onSetLocation = location => {
    this.props.navigation.goBack();
    this.props.setLocation(location);
  };

  render() {
    const {navigation} = this.props;
    const dynamicBackground = {
      backgroundColor: navigation.getParam('color', '#56BCC8'),
    };
    return (
      <View style={[styles.background, dynamicBackground]}>
        <View style={styles.container}>
          <SearchBar onChangeText={this.getSuggestions} />
          <SuggestionList
            suggestions={this.props.suggestions}
            onSelect={this.initiateSave}
          />
          <CurrentLocation onSelect={this.onSetLocation} />
          <SavedList
            places={this.props.savedLocations}
            current={this.props.currentLocation}
            onSelect={this.onSetLocation}
            onDelete={this.props.deleteLocation}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  container: {
    margin: 10,
    paddingTop: 60,
  },
});

const mapStateToProps = state => {
  // console.log(state);
  return {
    suggestions: state.location.suggestions,
    latitude: state.location.geocode.Latitude,
    longitude: state.location.geocode.Longitude,
    savedLocations: state.location.savedLocations,
    currentLocation: state.location.currentLocation,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    autoComplete: query => {
      dispatch(getAutoComplete(query));
    },

    reset: () => {
      dispatch(resetAutoComplete());
    },

    geocode: label => {
      console.log('Geocoding Triggered');
      dispatch(getGeocode(label));
    },

    savePlace: location => {
      dispatch(saveLocation(location));
    },

    setLocation: location => {
      dispatch(setCurrentLocation(location));
    },

    deleteLocation: index => {
      dispatch(deleteLocation(index));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchScreen);
