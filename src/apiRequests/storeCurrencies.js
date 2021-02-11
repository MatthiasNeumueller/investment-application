/* eslint-disable no-alert */
import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeCurrencies = async (currencies) => {
  try {
    const jsonValue = JSON.stringify(currencies);
    await AsyncStorage.setItem('@storage_Currencies', jsonValue);
  } catch (e) {
    console.log(e);
    alert('Couldn`t save currencies in Async Storage');
  }
};

export const getCurrencies = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@storage_Currencies');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
    alert('Couldn`t load currencies of Async Storage');
  }
};
