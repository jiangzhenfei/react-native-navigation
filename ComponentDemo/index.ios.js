/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  	AppRegistry,
  	StyleSheet,
  	Text,
	View,
	Button,
	Image,
	TextInput,
	ActivityIndicator,
  	AsyncStorage,
	StatusBar,
	Platform,
	ScrollView,
	FlatList
} from 'react-native';
import { StackNavigator,TabNavigator ,createBottomTabNavigator,createDrawerNavigator,createSwitchNavigator} from 'react-navigation';

import App from './src/route/index'
//判断是否是安卓平台
const isAndroid = Platform.OS === 'android';



AppRegistry.registerComponent('ComponentDemo', () => App);

