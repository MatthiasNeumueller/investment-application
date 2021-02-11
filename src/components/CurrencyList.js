/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  FlatList,
  StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements';
import { connect } from 'react-redux';
import { scaleSize } from '../constants/Layout';


function CurrencyList({ currencyList, detailedCurrency, setDetailedCurrency }) {

  // Object properties have to be changed
  const currencyItem = ({ item }) => {
    const backgroundColor = item.name === detailedCurrency.name ? '#0070A3' : '#003F5C';

    return (
      <TouchableOpacity onPress={() => setDetailedCurrency(item)}>
        <View style={{ ...styles.stockItem, backgroundColor}}>
          <Text style={styles.stockName}>{item.name}</Text>
          <View style={styles.StockItemRightContainer}>
            <Text style={styles.closingPrice}>${ item.price > 100 ? item.price.toFixed(1) : item.price.toFixed(3) }</Text>
            <View style= {{ ...styles.percentageContainer, backgroundColor: item.change  >= 0 ? '#68D866' : '#F23937'}}>
              <Text style= {styles.percentage}>{item.change.toFixed(2)}%</Text>
            </View>
          </View>
        </View>
        <Divider style={styles.dividerStyling} />
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={currencyList}
      renderItem={currencyItem}
      keyExtractor={(item) => item._id}
    />
  );
}

const styles = StyleSheet.create({
  stockItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: scaleSize(5),
    alignItems: 'center',
  },

  StockItemRightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  stockName: {
    color: '#fff',
    fontSize: scaleSize(20),
  },

  closingPrice: {
    color: '#fff',
    fontSize: scaleSize(20),
    marginRight: scaleSize(20),
  },

  percentageContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',

    width: scaleSize(95),
    height: scaleSize(35),
    borderRadius: scaleSize(10),
  },

  percentage: {
    color: '#fff',
    fontSize: scaleSize(20),
    paddingRight: scaleSize(5),
  },
});


const mapStateToProps = (state) => {
  const { currencyReducer } = state;
  return {
    currencyList: currencyReducer.currencyList,
    detailedCurrency: currencyReducer.detailedCurrency,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setDetailedCurrency: (currency) => dispatch({type: 'SET_DETAILED_CURRENCY', payload: currency}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyList);
