import React from 'react';
import {FlatList, View, StyleSheet, Picker} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class Setting extends React.PureComponent {
  constructor(props) {
    super(props);
    this._onPress = this._onPress.bind(this);
  }

  _onPress = (val, index) => {
    this.props.onValueChange(index);
  };

  render() {
    return (
      <View style={styles.settingItem}>
        <Icon name={this.props.setting.icon} style={styles.icons} />
        <View style={styles.settingText}>
          <Picker
            style={styles.setting}
            selectedValue={
              this.props.setting.options[this.props.setting.selected]
            }
            onValueChange={this._onPress}>
            {this.props.setting.options.map(option => (
              <Picker.Item label={option} value={option} key={option} />
            ))}
          </Picker>
          {/* <Text style={styles.settingInfo}>
              {this.props.setting.options[this.props.setting.selected]}
            </Text> */}
        </View>
      </View>
    );
  }
}

class SettingList extends React.Component {
  constructor(props) {
    super(props);
    this._keyExtractor = this._keyExtractor.bind(this);
    this._renderItem = this._renderItem.bind(this);
  }

  _keyExtractor = item => 'item' + item.id_str;

  _renderItem = ({item}) => (
    <Setting
      id={item.id_str}
      setting={item}
      onValueChange={position => this.props.onChange(item.id_str, position)}
    />
  );

  render() {
    console.log(this.props.settings);
    return (
      <FlatList
        data={this.props.settings}
        renderItem={this._renderItem}
        keyExtractor={this._keyExtractor}
        extraData={this.state}
      />
    );
  }
}

const styles = StyleSheet.create({
  settingItem: {
    marginVertical: 5,
    paddingVertical: 5,
    flex: 1,
    flexDirection: 'row',
  },

  settingText: {
    width: '90%',
    paddingLeft: '5%',
  },

  setting: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
  },

  settingInfo: {
    color: 'white',
    fontSize: 14,
  },

  icons: {
    fontSize: 24,
    width: '10%',
    color: '#fff',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'normal',
  },
});

export default SettingList;
