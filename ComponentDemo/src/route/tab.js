import React, { Component } from 'react';
import { 
    StackNavigator,
    TabNavigator ,
    createBottomTabNavigator,
    createDrawerNavigator,
    createSwitchNavigator
} from 'react-navigation';

import RootStack from './homeRoute'
import SettingsStack from './SettingsRoute'
import MyStack from './MyRoute'

//创建tab总路由
//也就是的登入后的app路由
const MyApp =  createBottomTabNavigator(
	{
	  	Home: RootStack,
		Settings: SettingsStack,
		My:MyStack
	},
	{
	  /* Other configuration remains unchanged */
	}
);

export default MyApp;