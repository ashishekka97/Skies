import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Dimensions
} from 'react-native';
import SearchBar from '../components/SearchBar';
import { connect } from "react-redux";
import { getAutoComplete, resetAutoComplete, getGeocode, saveLocation } from '../redux/actions';
import debounced from '../utils/debounced';
import SuggestionList from '../components/SuggestionList';
import SavedList from '../components/SavedList';

const DEBOUNCE_MS = 500;

class SearchScreen extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = null;
    this.state = {
      label: '',
      latitude: '',
      longitude: '',
    }
  }

  componentDidMount() {
    this.setState({
      latitude: this.props.latitude,
      longitude: this.props.longitude
    })
  }

  componentDidUpdate() {
    if (this.state.latitude !== this.props.latitude || this.state.longitude !== this.props.longitude) {
      this.setState({
        latitude: this.props.latitude,
        longitude: this.props.longitude
      })
      this.props.savePlace({
        label: this.state.label,
        latitude: this.props.latitude,
        longitude: this.props.longitude
      })
    }
  }

  static navigationOptions = {
    title: 'My Places',
    headerStyle: {
      marginTop: 15
    }
  }

  getSuggestions = (query) => {
    if(query.length > 2) {
      console.log(query)
      this.props.autoComplete(query);
    }
  }

  resetSuggestions = () => {
    this.props.reset();
  }

  initiateSave = (label) => {
    this.setState({
      label
    });
    this.props.geocode(label);
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={{
        backgroundColor: navigation.getParam('color', '#56BCC8'),
        flex: 1,
        height: 100,
        alignContent: 'flex-start'
      }}>
        <View style={styles.container}>
          <SearchBar onChangeText={this.getSuggestions}/>
        </View>
        <SuggestionList suggestions={this.props.suggestions} onSelect={this.initiateSave}/>
        <SavedList places={this.props.savedLocations}/>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    margin: 10,
    paddingTop: 60,
  }
})

const mapStateToProps = (state) => {
  console.log(state)
  return {
    suggestions: state.location.suggestions,
    latitude: state.location.geocode.Latitude,
    longitude: state.location.geocode.Longitude,
    savedLocations: state.location.savedLocations
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    autoComplete: (query) => {
      dispatch(getAutoComplete(query))
    },

    reset: () => {
      dispatch(resetAutoComplete())
    },

    geocode: (label) => {
      console.log('Geocoding Triggered');
      dispatch(getGeocode(label))
    },

    savePlace: (location) => {
      dispatch(saveLocation(location))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);