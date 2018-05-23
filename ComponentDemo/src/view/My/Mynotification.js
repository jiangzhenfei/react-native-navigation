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

//My这个tab的Notifications
class MyDetailScreen extends React.Component {
	static navigationOptions = {
		drawerLabel: 'Notifications',
		drawerIcon: ({ tintColor }) => (
		  	<Image
				source={require('../../../info.png')}
				style={[styles.icon, {tintColor: tintColor}]}
		  	/>
		),
	};
	render() {
	  return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
		  	{/* other code from before here */}
		  	<Button
				title="Go to My Screen"
				onPress={() => this.props.navigation.navigate('My')}
		  	/>
			<Button
				title="openDrawer"
				onPress={() => this.props.navigation.openDrawer()}
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

export default MyDetailScreen;