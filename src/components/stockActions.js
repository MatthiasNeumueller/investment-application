import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { getChartData } from '../apiRequests/getChartData';
import { refreshStock } from '../apiRequests/refreshStock';
import { deleteSelectedStock } from '../apiRequests/deleteStock';

import { scaleSize } from '../constants/Layout';


const StockActions = (props) => {
  if (!(Object.keys(props.detailedStock).length === 0 && props.detailedStock.constructor === Object)) {
    return (
      <View style={styles.stockActionsContainer}>
        <TouchableOpacity style={styles.stockAction} onPress={() => refreshStock(props.detailedStock)}>
          <Text style={styles.stockActionName}>Refresh</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.stockAction} onPress={() => deleteSelectedStock(props.detailedStock)}>
          <Text style={styles.stockActionName}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.stockAction} onPress={() => getChartData(props.navigation, props.detailedStock)}>
          <Text style={styles.stockActionName}>Details</Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  stockActionsContainer: {
    flexDirection: 'row',
    marginTop: scaleSize(10),
    width: '100%',
  },

  stockAction: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: scaleSize(8),
    marginHorizontal: scaleSize(16),
    backgroundColor: '#fb5b5a',
    borderRadius: 100,
  },

  stockActionName: {
    color: '#fff',
    fontSize: scaleSize(16),
  },
});


const mapStateToProps = (state) => {
  return {
    detailedStock: state.stockReducer.detailedStock,
  };
};

export default connect(mapStateToProps)(StockActions);
