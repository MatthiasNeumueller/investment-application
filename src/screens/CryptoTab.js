/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text } from 'react-native';
import { connect } from 'react-redux';

import { getCryptoData } from '../apiRequests/getCryptoData';
import CurrencyDetails from '../components/CurrencyDetails';
import CurrencyList from '../components/CurrencyList';

import button from '../styles/button';
import { scaleSize } from '../constants/Layout';


const CryptoTab = () => {

  return (
    <View style={styles.container}>

      <View style={styles.stockView}>
        <CurrencyList />
      </View>

      <View style={styles.refreshButtonView}>
        <TouchableOpacity
          style={button.ButtonStandard}
          onPress={() => getCryptoData()}
        >
          <Text style={{...button.ButtonStandardText, fontSize: 20}}>Refresh Crypto Data</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.stockDetailView}>
        <CurrencyDetails />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
  },

  stockView: {
    flex: 5,
    width: '100%',
  },

  refreshButtonView: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: scaleSize(15),
  },

  stockDetailView: {
    flex: 2,
    width: '100%',
  },
});


const mapStateToProps = (state) => {
  const { currencyReducer } = state;

  return {
    currencyList: currencyReducer.currencyList,
  };
};

export default connect(mapStateToProps)(CryptoTab);
