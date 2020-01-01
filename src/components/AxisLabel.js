import React from 'react';

import {Text} from 'react-native-svg';

const AxisLabel = props => {
  const {x, y} = props;
  console.log(x);
  return (
    <Text x={x} y={y} stroke="white">
      hi
    </Text>
  );
};

export default AxisLabel;
