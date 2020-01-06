import React from 'react';
import {View, StyleSheet} from 'react-native';
import SettingList from '../components/SettingList';
import {setPreference} from '../redux/actions';
import {connect} from 'react-redux';

class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
    headerStyle: {
      marginTop: 15,
    },
  };

  render() {
    const {navigation} = this.props;
    const dynamicBackground = {
      backgroundColor: navigation.getParam('color', '#56BCC8'),
    };
    const settings = [
      {
        icon: 'thermometer-lines',
        id_str: 1,
        setting: 'Temperature',
        options: ['Farenheit', 'Celsius', 'Kelvin'],
        selected: this.props.settings[0],
      },
      {
        icon: 'weather-windy',
        id_str: 2,
        setting: 'Wind',
        options: ['m/s', 'km/h', 'mph'],
        selected: this.props.settings[1],
      },
      {
        icon: 'gauge',
        id_str: 3,
        setting: 'Pressure',
        options: ['bar', 'hPa', 'psi'],
        selected: this.props.settings[2],
      },
      {
        icon: 'clock-outline',
        id_str: 4,
        setting: 'Hours',
        options: ['24h', '12h'],
        selected: this.props.settings[3],
      },
      {
        icon: 'ruler',
        id_str: 5,
        setting: 'Distance',
        options: ['Miles', 'Kilometres', 'Metres'],
        selected: this.props.settings[4],
      },
    ];
    return (
      <View style={[styles.background, dynamicBackground]}>
        <View style={styles.container}>
          <SettingList
            settings={settings}
            onChange={(setting, position) =>
              this.props.changeSettings(setting, position)
            }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    height: 100,
    alignContent: 'flex-start',
  },

  container: {
    margin: 10,
    paddingTop: 60,
  },

  sectionHeader: {
    color: 'white',
    fontSize: 20,
  },
});

const mapStateToProps = state => {
  return {
    settings: state.settings,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeSettings: (setting, position) =>
      dispatch(setPreference(setting, position)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SettingsScreen);
