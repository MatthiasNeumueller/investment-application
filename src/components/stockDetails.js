import React from 'react';
import { View,
  Text,
  StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements';
import { connect } from 'react-redux';

import { scaleSize } from '../constants/Layout';


const StockDetails = ({ detailedStock }) => {
  if (!(Object.keys(detailedStock).length === 0 && detailedStock.constructor === Object)) {
    return (
      <View style={styles.stockDetail}>
        <Text style={styles.stockDetailName}>{ detailedStock.name }</Text>
        <Divider style={styles.dividerStyling} />

        <View style={styles.stockDetailRow}>
          <View style={styles.stockDetailProperty}>
            <Text style={styles.stockDetailPropertyName}>Open</Text>
            <Text style={styles.stockDetailPropertyValue}>{ detailedStock['02. open'] }</Text>
          </View>

          <View style={styles.stockDetailProperty}>
            <Text style={styles.stockDetailPropertyName}>Low</Text>
            <Text style={styles.stockDetailPropertyValue}>{ detailedStock['04. low'] }</Text>
          </View>
        </View>

        <Divider style={styles.dividerStyling} />

        <View style={styles.stockDetailRow}>
          <View style={styles.stockDetailProperty}>
            <Text style={styles.stockDetailPropertyName}>Current</Text>
            <Text style={styles.stockDetailPropertyValue}>{ detailedStock['05. price'] }</Text>
          </View>

          <View style={styles.stockDetailProperty}>
            <Text style={styles.stockDetailPropertyName}>High</Text>
            <Text style={styles.stockDetailPropertyValue}>{ detailedStock['03. high'] }</Text>
          </View>
        </View>

        <Divider style={styles.dividerStyling} />

        <View style={styles.stockDetailRow}>
          <View style={styles.stockDetailProperty}>
            <Text style={styles.stockDetailPropertyName}>Volume</Text>
            <Text style={styles.stockDetailPropertyValue}>{ detailedStock['06. volume'] }</Text>
          </View>
        </View>
      </View>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  stockDetail: {
    flex: 2,
    backgroundColor: '#fb5b5a',
    width: '100%',
  },

  stockDetailName: {
    color: '#fff',
    fontSize: scaleSize(20),
    textAlign: 'center',
    marginVertical: scaleSize(4),
  },

  stockDetailRow: {
    flexDirection: 'row',
  },

  stockDetailProperty: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: scaleSize(3),
  },

  stockDetailPropertyName: {
    color: '#003f5c',
    textTransform: 'uppercase',
  },

  stockDetailPropertyValue: {
    color: '#fff',
    fontSize: scaleSize(14),
  },
});


const mapStateToProps = (state) => {
  return {
    detailedStock: state.stockReducer.detailedStock,
  };
};

export default connect(mapStateToProps)(StockDetails);
