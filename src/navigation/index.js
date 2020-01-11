import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import SettingsScreen from '../screens/SettingsScreen';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Search: {
      screen: SearchScreen,
    },
    Settings: {
      screen: SettingsScreen,
    },
  },
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerTransparent: true,
      headerStyle: {
        backgroundColor: 'transparent',
        height: 100,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontFamily: 'Dosis-Bold',
      },
    },
  },
);

export default createAppContainer(AppNavigator);
