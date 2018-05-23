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

//登入界面
class SignInScreen extends React.Component {
	static navigationOptions = {
	  title: 'Please sign in',
	};
	state = {
		name:'',
		psw:''
	}
	render() {
	  	return (
			<View style={styles.container}>
				<StatusBar 
					barStyle="default"
          			backgroundColor="#ccc"
				/>
				<TextInput
					style={{height: 40}}
					placeholder="write a name!"
					onChangeText={(name) => this.setState({name})}
				/>
				<TextInput
					style={{height: 40}}
					placeholder="write a password!"
					onChangeText={(psw) => this.setState({psw})}
				/>
				<Button title="Sign in!" onPress={this._signInAsync} />
			</View>
	  	);
	}
	_signInAsync = async () => {
		if(this.state.name.toLowerCase() === 'admin' && this.state.psw.toLowerCase() === 'admin'){
			await AsyncStorage.setItem('userToken', 'abc');
	  		this.props.navigation.navigate('App');
		}else{
			alert('用户名或者密码不正确')
		}
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

export default SignInScreen;