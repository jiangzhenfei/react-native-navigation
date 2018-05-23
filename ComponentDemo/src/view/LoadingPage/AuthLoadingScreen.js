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

//判断是否登入界面，要是登入直接进入home，否则来到登入界面
class AuthLoadingScreen extends React.Component {
	constructor(props) {
	  	super(props);
	  	this._bootstrapAsync();
	}
  
	// Fetch the token from storage then navigate to our appropriate place
	_bootstrapAsync = async () => {
	  	const userToken = await AsyncStorage.getItem('userToken');
  
	  	// This will switch to the App screen or Auth screen and this loading
	  	// screen will be unmounted and thrown away.
	  	this.props.navigation.navigate(userToken ? 'App' : 'Auth');
	};
  
	// Render any loading content that you like here
	render() {
	  	return (
			<View style={styles.container}>
				<ActivityIndicator />
				<StatusBar 
					barStyle="light-content"
          			backgroundColor="#6a51ae"
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
export default AuthLoadingScreen;