import React from 'react';
import { View,
  Text,
  StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements';
import { connect } from 'react-redux';

import { scaleSize } from '../constants/Layout';


const CurrencyDetails = ({ detailedCurrency }) => {
  if (!(Object.keys(detailedCurrency).length === 0 && detailedCurrency.constructor === Object)) {
    return (
      <View style={styles.stockDetail}>
        <Text style={styles.stockDetailName}>{ detailedCurrency.name }</Text>
        <Divider style={styles.dividerStyling} />

        <View style={styles.stockDetailRow}>
          <View style={styles.stockDetailProperty}>
            <Text style={styles.stockDetailPropertyName}>Price</Text>
            <Text style={styles.stockDetailPropertyValue}>${ detailedCurrency.price > 100 ? detailedCurrency.price.toFixed(2) : detailedCurrency.price.toFixed(3) }</Text>
          </View>

          <View style={styles.stockDetailProperty}>
            <Text style={styles.stockDetailPropertyName}>Change</Text>
            <Text style={styles.stockDetailPropertyValue}>{ detailedCurrency.change.toFixed(2) }%</Text>
          </View>
        </View>

        <Divider style={styles.dividerStyling} />

        <View style={styles.stockDetailRow}>
          <View style={styles.stockDetailProperty}>
            <Text style={styles.stockDetailPropertyName}>Volume</Text>
            <Text style={styles.stockDetailPropertyValue}>${ detailedCurrency.volume.toFixed(2) }</Text>
          </View>
        </View>

        <Divider style={styles.dividerStyling} />

        <View style={styles.stockDetailRow}>
          <View style={styles.stockDetailProperty}>
            <Text style={styles.stockDetailPropertyName}>Market Cap</Text>
            <Text style={styles.stockDetailPropertyValue}>${ detailedCurrency.marketCap.toFixed(2) }</Text>
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
    fontSize: scaleSize(24),
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
    padding: scaleSize(5),
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
    detailedCurrency: state.currencyReducer.detailedCurrency,
  };
};

export default connect(mapStateToProps)(CurrencyDetails);
