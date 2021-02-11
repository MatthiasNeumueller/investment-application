import axios from 'axios';

import { formatDate } from '../constants/Formatting';
import { YAHOO_KEY } from '../constants';


export const getChartData = async (navigation, detailedStock) => {
  const timestamps = [];
  let values = [];
  const options = {
    method: 'GET',
    url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-chart',
    params: {
      interval: '1d',
      symbol: detailedStock['01. symbol'],
      range: '1mo',
      region: 'US',
    },
    headers: {
      'x-rapidapi-key': YAHOO_KEY,
      'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
    },
  };

  await axios.request(options).then((response) => {
    const chartData = response.data.chart.result[0];

    for (const i in chartData.timestamp) {
      if (i % 2 === 0) {
        timestamps.push(formatDate(chartData.timestamp[i]));
        values.push(chartData.indicators.quote[0].close[i]);
      }
    }
  }).catch((e) => {
    console.log(e);
  });

  navigation.navigate('ChartScreen', { values, timestamps });
};
