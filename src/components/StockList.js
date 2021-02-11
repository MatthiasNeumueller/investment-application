/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  FlatList,
  StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { storeStocks } from '../apiRequests/storeStocks';
import { scaleSize } from '../constants/Layout';


function StockList({ stockList, detailedStock, setDetailedStock }) {

  storeStocks(stockList);

  const stockItem = ({ item }) => {
    const backgroundColor = item.name === detailedStock.name ? '#0070A3' : '#003F5C';

    return (
      <TouchableOpacity onPress={() => setDetailedStock(item)}>
        <View style={{ ...styles.stockItem, backgroundColor}}>
          <Text style={styles.stockName}>{item.name}</Text>
          <View style={styles.StockItemRightContainer}>
            <Text style={styles.closingPrice}>{item['05. price']}</Text>
            <View style= {{ ...styles.percentageContainer, backgroundColor: item['10. change percent']  >= 0 ? '#68D866' : '#F23937'}}>
              <Text style= {styles.percentage}>{item['10. change percent']}%</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={stockList}
      renderItem={stockItem}
      keyExtractor={(item) => item['01. symbol']}
    />
  );
}

const styles = StyleSheet.create({
  stockItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: scaleSize(10),
    paddingHorizontal: scaleSize(4),
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },

  StockItemRightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  stockName: {
    color: '#fff',
    fontSize: scaleSize(18),
  },

  closingPrice: {
    color: '#fff',
    fontSize: scaleSize(18),
    marginRight: scaleSize(16),
  },

  percentageContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',

    width: scaleSize(85),
    height: scaleSize(35),
    borderRadius: scaleSize(10),
  },

  percentage: {
    color: '#fff',
    fontSize: scaleSize(18),
    paddingRight: scaleSize(5),
  },

  dividerStyling: {
    backgroundColor: 'grey',
  },
});


const mapStateToProps = (state) => {
  const { stockReducer } = state;
  return {
    stockList: stockReducer.stockList,
    detailedStock: stockReducer.detailedStock,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setDetailedStock: (stock) => dispatch({type: 'SET_DETAILED_STOCK', payload: stock}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StockList);
