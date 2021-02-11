import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions } from 'react-native';
import { Container } from 'native-base';
import { LineChart } from 'react-native-chart-kit';
import StockDetails from '../components/stockDetails';


function ChartScreen({ route }) {

  return (
    <Container style={styles.container}>
      <View style={styles.chartView}>
        <LineChart
          data={{
            labels: route.params.timestamps,
            datasets: [
              {
                data: route.params.values,
              },
            ],
          }}
          width={Dimensions.get('window').width}
          height={465}
          chartConfig={{
            backgroundColor: '#fff',
            backgroundGradientFrom: '#fff',
            backgroundGradientTo: '#fff',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(17, 17, 17, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(17, 17, 17, ${opacity})`,
            propsForDots: {
              r: 6,
              strokeWidth: 2,
              stroke: '#fb5b5a',
            },
          }}
          verticalLabelRotation="-45"
        />
      </View>
      <View style={styles.stockDetailView}>
        <StockDetails />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },

  chartView: {
    flex: 10,
  },

  stockDetailView: {
    flex: 3,
    width: '100%',
  },
});

export default ChartScreen;
