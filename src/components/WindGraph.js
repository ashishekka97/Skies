import React from 'react';
import {} from 'react-native';
import {
  VictoryArea,
  VictoryChart,
  VictoryScatter,
  VictoryAxis,
} from 'victory-native';
import WindPoint from './WindPoint';

const WindGraph = props => {
  const {data, yDomain} = props;
  return (
    <>
      {data.length < 2 ? null : (
        <VictoryChart
          height={200}
          width={1600}
          padding={{top: 50, bottom: 50, left: 12, right: 12}}
          //domain={ yDomain ? { 'y': yDomain } : null }
        >
          <VictoryAxis
            crossAxis
            style={{
              axis: {stroke: 'none'},
              tickLabels: {fill: 'white', fontFamily: 'Dosis-Regular'},
            }}
            // tickFormat={(t) => getTime(t, 'h')}
          />

          <VictoryArea
            animate
            interpolation="catmullRom"
            style={{
              data: {
                fill: 'black',
                stroke: 'rgb(256, 256, 256)',
                strokeWidth: '3',
                strokeOpacity: '.3',
                fillOpacity: '0.0',
              },
            }}
            data={data}
          />

          <VictoryScatter
            data={data}
            labels={({datum}) => String(Math.round(datum.y))}
            size={5}
            style={{
              parent: {
                border: '1px solid #fff',
              },
              data: {fill: 'white'},
              labels: {
                fontSize: 15,
                fill: '#fff',
                padding: 15,
                fontFamily: 'Dosis-Regular',
              },
            }}
            dataComponent={<WindPoint />}
          />
        </VictoryChart>
      )}
    </>
  );
};

export default WindGraph;
