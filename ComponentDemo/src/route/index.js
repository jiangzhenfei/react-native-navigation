//总路由出口
import React, { Component } from 'react';
import { 
    StackNavigator,
    TabNavigator ,
    createBottomTabNavigator,
    createDrawerNavigator,
    createSwitchNavigator
} from 'react-navigation';

import SignInScreen from '../view/login/Login'
import AuthLoadingScreen from '../view/LoadingPage/AuthLoadingScreen'
import MyApp from './tab'

const AuthStack = StackNavigator({ SignIn: SignInScreen });

//验证，登入，主界面的切换，根据是否存在token
const AllApp =  createSwitchNavigator(
	{
	  	AuthLoading: AuthLoadingScreen,//判断是否登入的界面
	  	App: MyApp,//登入后的app路由
	  	Auth: AuthStack,//用户登入的界面
	},
	{
	  initialRouteName: 'AuthLoading',
	}
);
export default class App extends React.Component {
	render() {
	  	return <AllApp />;
	}
}