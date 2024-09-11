import React from 'react';
import * as echarts from "echarts/core";
import "echarts-liquidfill";
import ReactECharts from 'echarts-for-react';

function LiquidFill({ layout }) {
  let value = 0;
  let formattedValue = '0';
  if (layout.qHyperCube.qDataPages[0] && layout.qHyperCube.qDataPages[0].qMatrix[0]) {
    value = layout.qHyperCube.qDataPages[0].qMatrix[0][0].qNum;
    formattedValue = layout.qHyperCube.qDataPages[0].qMatrix[0][0].qText;
  }

  const minValue = parseFloat(layout.bag.minValue);
  const maxValue = parseFloat(layout.bag.maxValue);
  // calculate the percentage between 0 and 100 based on layout.bag.minValue and layout.bag.maxValue
  function percentual(min, max, value) {
    return ((value - min) / (max - min));
  }

  const percentage = percentual(minValue, maxValue, value);

  const options = {
    title: [{
      text: '',
      x: 'center',
      y: '58%',
      textStyle: {
        fontSize: '100%',
        color: '#000',
      },
    }, {
      text: '',
      x: 'center',
      y: '75%',
      textStyle: {
        fontSize: '100%',
        color: 'black',
      },
    }],
    series: [
      {
        type: 'liquidFill',
        radius: '67%',
        center: ['50%', '48%'],
        amplitude: '1%',
        waveLength: '90%',
        period: 1000,
        color: [
          {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0.7,
                color: layout.bag.color,
              },
              {
                offset: 1,
                color: layout.bag.offsetColor,
              }
            ],
            globalCoord: false,
          },
        ],
        data: [percentage],
        backgroundStyle: {
          borderWidth: 1,
          color: 'rgba(117, 205, 255, 0.25)',
        },
        label: {
          show: true,
          normal: {
            formatter: function () {
              return formattedValue;
            },
            textStyle: {
              fontSize: layout.bag.fontSize,
              fontWeight: 'bold',
              color: '#000',
            }
          },
        },
        outline: {
          borderDistance: 0,
          itemStyle: {
            borderWidth: 4,
            borderColor: 'transparent',
          },
        },
      }],
  };

  return <ReactECharts option={options} style={{ height: '100%', width: '100%' }} />;

}

export default LiquidFill;