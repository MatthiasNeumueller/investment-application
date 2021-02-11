import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput } from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';
import { Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { connect } from 'react-redux';

import { useNavigation } from '@react-navigation/native';

import StockDetails from '../components/stockDetails';
import StockActions from '../components/stockActions';
import { searchStock } from '../apiRequests/searchStock';
import { selectStock } from '../apiRequests/selectStock';
import StockList from '../components/StockList';

import { scaleSize } from '../constants/Layout';


const StocksTab = ({ searchResults, Keyword, stockList }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.autocompleteContainer}>
        <Autocomplete
          data={searchResults}
          defaultValue={Keyword}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => selectStock(item, stockList)}>
              <Text>{item['1. symbol']}</Text>
              <Text>{item['2. name']}</Text>
              <Divider style={styles.dividerStyling} />
            </TouchableOpacity>
          )}
          renderTextInput={() => (
            <View style={styles.searchContainer}>
              <Icon style={styles.searchIcon} name={'search'}/>
              <TextInput
                stlye={styles.searchInput}
                placeholder="Search for a Stock Symbol"
                placeholderTextColor="#000"
                defaultValue={Keyword}
                onChangeText={(text) => searchStock(text)}
              />
            </View>
          )}
          style={styles.searchBox}
          keyExtractor={(item) => item['1. symbol']}
        />
      </View>

      <View style={styles.stockView}>
        <StockList />
      </View>

      <View style={styles.stockActionView}>
        <StockActions navigation={navigation}/>
      </View>

      <View style={styles.stockDetailView}>
        <StockDetails />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
  },

  autocompleteContainer: {
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1,
  },

  dividerStyling: {
    backgroundColor: 'grey',
  },

  searchBox: {
    width: '100%',
    height: scaleSize(45),
    borderWidth: 0,
    color: '#000',
    backgroundColor: '#fff',
    paddingLeft: 15,
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    height: scaleSize(40),
  },

  searchIcon: {
    paddingHorizontal: scaleSize(10),
    color: '#000',
    fontSize: scaleSize(16),
  },

  searchInput: {
    color:'#000',
  },

  stockView: {
    flex: 8,
    marginTop: scaleSize(45),
    width: '100%',
  },

  stockActionView: {
    flex: 1,
    marginBottom: scaleSize(16),
  },

  stockDetailView: {
    flex: 3,
    width: '100%',
  },
});


const mapStateToProps = (state) => {
  const { searchReducer, stockReducer } = state;

  return {
    stockList: stockReducer.stockList,
    searchResults: searchReducer.searchResults,
    Keyword: searchReducer.Keyword,
  };
};

export default connect(mapStateToProps)(StocksTab);
