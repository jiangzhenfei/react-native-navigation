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

//自定义的title 
class LogoTitle extends React.Component {
	render() {
	  	return (
			<Image
		  		source={require('../../.../../../info.png')}
		  		style={{ width: 30, height: 30 }}
			/>
	  	);
	}
}
class HomeScreen extends React.Component {
	static navigationOptions = {
		headerTitle: <LogoTitle />,
		title:'demo',//该页面不会出现，只出现自定义的，下一页的返回按钮变会出现这个demo文字
		headerRight: (
			<Button
			  	onPress={() => alert('This is a button!')}
			  	title="Info"
			  	color="#fff"
			/>
		),
		headerLeft: (
			<Button
			  	onPress={() => alert('This is a button!')}
			  	title="welcom"
			  	color="#fff"
			/>
		),
	};
  	render() {
    	return (
			<ScrollView>
				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
					<Text>Home Screen</Text>
					<Button
					title="Go to Details"
					onPress={() => this.props.navigation.navigate('Details',{
						itemId: 86,
						otherParam: 'anything you want here',
						name:''
					})}
					/> 
					<Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
				</View>
				<Text style={{fontSize:96}}>Scroll me plz</Text>
				<Image source={require('../../../info.png')} />
				<Image source={require('../../../info.png')} />
				<Image source={require('../../../info.png')} />
				<Image source={require('../../../info.png')} />
				<Image source={require('../../../info.png')} />
				<Text style={{fontSize:96}}>If you like</Text>
				<Image source={require('../../../info.png')} />
				<Image source={require('../../../info.png')} />
				<Image source={require('../../../info.png')} />
				<Image source={require('../../../info.png')} />
				<Image source={require('../../../info.png')} />
				<Text style={{fontSize:96}}>Scrolling down</Text>
				<Image source={require('../../../info.png')} />
				<Image source={require('../../../info.png')} />
				<Image source={require('../../../info.png')} />
				<Image source={require('../../../info.png')} />
				<Image source={require('../../../info.png')} />
				<Text style={{fontSize:96}}>What's the best</Text>
				<Image source={require('../../../info.png')} />
				<Image source={require('../../../info.png')} />
				<Image source={require('../../../info.png')} />
				<Image source={require('../../../info.png')} />
				<Image source={require('../../../info.png')} />
				<Text style={{fontSize:96}}>Framework around?</Text>
				<Image source={require('../../../info.png')} />
				<Image source={require('../../../info.png')} />
				<Image source={require('../../../info.png')} />
				<Image source={require('../../../info.png')} />
				<Image source={require('../../../info.png')} />
				<Text style={{fontSize:80}}>React Native</Text>
			</ScrollView>
		)
	}
	_signOutAsync = async () => {
		await AsyncStorage.clear();
		this.props.navigation.navigate('Auth');
	};
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

export default HomeScreen;