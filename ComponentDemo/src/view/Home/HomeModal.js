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

//全屏模态框
class ModalScreen extends React.Component {
	render() {
	  	return (
			<View style={{ flex: 1, alignItems: 'center'}}>
				<Text style={{ fontSize: 30 }}>This is a modal!</Text>
				<Button
					onPress={() => this.props.navigation.goBack()}
					title="Dismiss"
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

export default ModalScreen;