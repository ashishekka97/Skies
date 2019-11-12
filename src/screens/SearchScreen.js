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
import { getAutoComplete, resetAutoComplete } from '../redux/actions';
import debounced from '../utils/debounced';

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

  renderResultList = () => {
    return (
      <FlatList
        data={this.props.suggestions}
        renderItem={(item) => {
          console.log(item);
          return <Text>{item}</Text>
        }}
      />
    )
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
        <FlatList
          data={this.props.suggestions}
          renderItem={item => {
            console.log(item)
            return <Text style={styles.resultText}>{item.item.label}</Text>
          }}
          keyExtractor={item => item.locationId}
          style={styles.resultContainer}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    margin: 10,
    paddingTop: 60,
  },

  resultContainer: {
    position: 'absolute',
    top: 130,
    width: '95%',
    margin: 10,
    marginTop: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 12
  },

  resultText: {
    color: 'white',
    fontSize: 16,
    padding: 10,
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);