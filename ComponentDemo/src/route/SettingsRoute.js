import { 
    StackNavigator,
    TabNavigator ,
    createBottomTabNavigator,
    createDrawerNavigator,
    createSwitchNavigator
} from 'react-navigation';

import SettingsScreen from '../view/Settins/SettinsIndex'
import SettingsDetailScreen from '../view/Settins/SettinsDetail'

//页面底部tab中settings这个tab的路由
const SettingsStack = StackNavigator(
	{
		Settings: SettingsScreen,
		Details: SettingsDetailScreen,
	},
	{
		navigationOptions: {
			headerStyle: {
			  	backgroundColor: '#f4511e',
			},
			headerTintColor: '#fff',
			headerTitleStyle: {
			  	fontWeight: 'bold',
			},
		},
	}
);
export default SettingsStack;