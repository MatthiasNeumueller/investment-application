import React from 'react';
import {
  TouchableWithoutFeedback,
  Keyboard } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import StocksTab from './StocksTab';
import CryptoTab from './CryptoTab';


const Tab = createBottomTabNavigator();

export default function InvestmentScreen() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Stocks') {
              iconName = 'chart-line';
            } else if (route.name === 'Crypto') {
              iconName = 'bitcoin';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#fb5b5a',
          inactiveTintColor: '#003f5c',
        }}
      >
        <Tab.Screen name="Stocks" component={StocksTab}/>
        <Tab.Screen name="Crypto" component={CryptoTab}/>
      </Tab.Navigator>
    </TouchableWithoutFeedback>
  );
}
