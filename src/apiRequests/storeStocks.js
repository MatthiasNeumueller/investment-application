/* eslint-disable no-alert */
import AsyncStorage from '@react-native-async-storage/async-storage';
import store from '../store';

export const storeStocks = async (stocks) => {
  try {
    const jsonValue = JSON.stringify(stocks);
    await AsyncStorage.setItem('@storage_Stocks', jsonValue);
  } catch (e) {
    console.log(e);
    alert('Couldn`t save stocks in Async Storage');
  }
};

export const getStocks = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@storage_Stocks');
    if (jsonValue != null) {
      store.dispatch({type: 'SET_STOCK_LIST', payload: JSON.parse(jsonValue)});
    }
  } catch (e) {
    console.log(e);
    alert('Couldn`t load stocks of Async Storage');
  }
};
