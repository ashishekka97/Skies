import React from 'react';
import {StyleSheet} from 'react-native';
import svg from '../utils/svg';
import Svg, {Path} from 'react-native-svg';

class DataPoint extends React.Component {
  getX = x => {
    let newX = x - 12;
    return newX;
  };

  getY = y => {
    let newY = y - 12;
    return newY;
  };

  getIcon = condition => {
    return svg[condition];
  };

  render() {
    const {x, y, datum} = this.props;
    return (
      <Svg>
        <Path
          x={this.getX(x)}
          y={this.getY(y)}
          fill="white"
          d={this.getIcon(datum.icon)}
        />
      </Svg>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 24,
    width: '20%',
    color: '#fff',
    textAlignVertical: 'center',
    fontWeight: 'normal',
  },
});

export default DataPoint;
