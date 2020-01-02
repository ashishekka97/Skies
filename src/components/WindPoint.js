import React from 'react';
import svg from '../utils/svg';
import Svg, {Path, G} from 'react-native-svg';

class WindPoint extends React.Component {
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
          d={this.getIcon('arrow')}
          transform={`rotate(${(180 + datum.bearing) % 360}, 12, 12)`}
        />
      </Svg>
    );
  }
}

export default WindPoint;
