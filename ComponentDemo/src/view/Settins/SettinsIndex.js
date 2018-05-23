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
import { 
    StackNavigator,
    TabNavigator ,
    createBottomTabNavigator,
    createDrawerNavigator,
    createSwitchNavigator
} from 'react-navigation';

//setting这个tab的主页面
class SettingsScreen extends React.Component {
	static navigationOptions = {
		title:'settings',//该页面不会出现，只出现自定义的，下一页的返回按钮变会出现这个demo文字
		headerRight: (
			<Button
			  	onPress={() => alert('This is a button!')}
			  	title="settings"
			  	color="#fff"
			/>
		),
		headerLeft: (
			<Button
			  	onPress={() => alert('This is a button!')}
			  	title="settins"
			  	color="#fff"
			/>
		),
	}
	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				{/* other code from before here */}
				<Button
					title="Go to Details"
					onPress={() => this.props.navigation.navigate('Details')}
				/>
			</View>
		);
	}
}
const styles = StyleSheet.create({
  	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
  	},
  	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
  	},
  	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
	icon: {
		width: 24,
		height: 24,
	},
	FlatList: {
		backgroundColor:'#F5FCFF'
	},
	item: {
		padding: 10,
		fontSize: 18,
		height: 44,
	},
});
export default SettingsScreen;