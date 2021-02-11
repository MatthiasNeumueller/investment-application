import React from 'react';
import {
  StyleSheet,
  TouchableOpacity } from 'react-native';
import {
  Container,
  Text } from 'native-base';
import { connect } from 'react-redux';
import { getCryptoData } from '../apiRequests/getCryptoData';
import { getStocks } from '../apiRequests/storeStocks';
import { scaleSize } from '../constants/Layout';


function HomeScreen({ navigation }) {
  return (
    <Container style={styles.container}>
      <TouchableOpacity
        style={styles.touchableContainer}
        onPress={() => {
          getCryptoData();
          getStocks();
          navigation.navigate('InvestmentScreen');
        }}
      >
        <Text style={styles.logo}>InveStruction</Text>
        <Text style={styles.copyright}>Designed by Matthias Neumüller</Text>
      </TouchableOpacity>
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

  touchableContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  logo: {
    fontWeight: 'bold',
    fontSize: scaleSize(50),
    color: '#fb5b5a',
    marginBottom: scaleSize(10),
  },

  copyright: {
    fontSize: scaleSize(14),
    color: '#fff',
  },

});


const mapDispatchToProps = (dispatch) => {
  return {
    setStockList: (stockList) => dispatch({type: 'ADD_STOCK', payload: stockList}),
  };
};

export default connect(null, mapDispatchToProps)(HomeScreen);
