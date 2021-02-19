import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen'
import JokeScreen from './screens/JokeScreen'
import HoroscopeScreen from './screens/HoroscopeScreen'
import NewsScreen from './screens/NewsScreen'
import WeatherScreen from './screens/WeatherScreen'
import {createSwitchNavigator,createAppContainer} from 'react-navigation'
import {SafeAreaProvider} from 'react-native-safe-area-context'

export default function App() {
  return (
    <SafeAreaProvider>
      <AppContainer/>
    </SafeAreaProvider>
  );
}


var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  JokeScreen: JokeScreen,
  HoroscopeScreen: HoroscopeScreen,
  WeatherScreen: WeatherScreen,
  NewsScreen: NewsScreen
})

const AppContainer = createAppContainer(AppNavigator);