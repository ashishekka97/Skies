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
import { getAutoComplete, resetAutoComplete, getGeocode } from '../redux/actions';
import debounced from '../utils/debounced';
import SuggestionList from '../components/SuggestionList';

const DEBOUNCE_MS = 500;

class SearchScreen extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = null;

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
          <SearchBar onChangeText={this.getSuggestions} onEndEditing={this.resetSuggestions}/>
        </View>
        <SuggestionList suggestions={this.props.suggestions} onSelect={this.props.geocode}/>
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
  console.log(state);
  return {
    suggestions: state.location.suggestions
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
      dispatch(getGeocode(label))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);