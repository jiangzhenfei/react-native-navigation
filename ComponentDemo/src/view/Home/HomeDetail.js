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

class DetailsScreen extends React.Component {
	//参数navigation 就是传递给您的屏幕道具的相同对象 this.props.navigation
	static navigationOptions = ({ navigation ,navigationOptions}) => {
		const { params } = navigation.state;
		console.log(navigationOptions)
		return {
		  	title: params ? params.otherParam : 'A Nested Details Screen',
		  	headerStyle: {
				backgroundColor: '#666',
			},
			headerRight: (
				<Button
					onPress={() => navigation.navigate('MyModal')}
					title="Info"
					color="#fff"
				/>
			),
		}
	};
	render() {
		// 您也可以直接访问params对象this.props.navigation.state.params。
		// 这可能是null因为没有提供参数，所以使用它通常更容易，getParam所以你不必处理这种情况。
		const { navigation } = this.props;
    	const itemId = navigation.getParam('itemId', 'NO-ID');
    	const otherParam = navigation.getParam('otherParam', 'some default value');
	  	return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>Details Screen</Text>
				<Text>itemId: {itemId}</Text>
        		<Text>otherParam: {otherParam}</Text>
				<Button
					title="Go to Home"
					onPress={() => this.props.navigation.navigate('Home')}
				/>
				<Button
					title="Go back"
					onPress={() => this.props.navigation.goBack()}
				/>
				<Button
					title="Update the title"
					onPress={() => this.props.navigation.setParams({otherParam: 'Updated!'})}
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

export default DetailsScreen;