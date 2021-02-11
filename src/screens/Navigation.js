import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import HomeScreen from './HomeScreen';
import InvestmentScreen from './InvestmentScreen';
import ChartScreen from './ChartScreen';


const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#fb5b5a',
          },
          headerTintColor: '#003f5c',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="InvestmentScreen"
          component={InvestmentScreen}
          options={{ title: 'Investments' }}
        />
        <Stack.Screen
          name="ChartScreen"
          component={ChartScreen}
          options={{ title: 'Chart' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
