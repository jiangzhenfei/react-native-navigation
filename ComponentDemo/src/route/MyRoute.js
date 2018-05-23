import { 
    StackNavigator,
    TabNavigator ,
    createBottomTabNavigator,
    createDrawerNavigator,
    createSwitchNavigator
} from 'react-navigation';

import MyScreen from '../view/My/Myindex'
import MyDetailScreen from '../view/My/Mynotification'

//页面底部tab中My这个tab的路由, 包括了notification这个左侧拉出的导航可以嵌入到任何一个页面
const MyDrawerStack = createDrawerNavigator(
	{   
        My: MyScreen,
		MyDrawerDetails: MyDetailScreen,
	},
);

const MyStack = StackNavigator(
    {
        MySee: MyDrawerStack
    },
    {
		initialRouteName: 'MySee',
		navigationOptions: {
            title:'name',
			headerStyle: {
			  	backgroundColor: '#f4511e',
			},
			headerTintColor: '#fff',
			headerTitleStyle: {
			  	fontWeight: 'bold',
			},
		},
	}
)
export default MyStack;
