import { 
    StackNavigator,
    TabNavigator ,
    createBottomTabNavigator,
    createDrawerNavigator,
    createSwitchNavigator
} from 'react-navigation';

import HomeScreen from '../view/Home/HomeIndex'
import DetailsScreen from '../view/Home/HomeDetail'
import ModalScreen from '../view/Home/HomeModal'

const MainStack = StackNavigator(
	{
		Home: { screen: HomeScreen },
		Details: { screen: DetailsScreen },	
	},
	{
		initialRouteName: 'Home',
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

//页面底部tab中Home这个tab的路由，包括了全屏模态框，详情界面
const RootStack = StackNavigator(
	//main和mymodal,两个不同的分支，在main任何操作，早模态框弹出和消失的时候都会保留之前的状态
	{
	  	Main: {
			screen: MainStack,
	  	},
	  	MyModal: {
			screen: ModalScreen,
	  	},
	},
	{
	  	mode: 'modal',
	  	headerMode: 'none',
	}
);

export default RootStack;