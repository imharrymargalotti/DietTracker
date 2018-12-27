
import { createStackNavigator, createNavigationContainer } from 'react-navigation';
import LogInScreen from './Components/LogInScreen';
import MainScreen from './Components/MainScreen';


const RootStack = createStackNavigator({
      LogIn: {
        screen: LogInScreen,
        navigationOptions: {
          header: null,

        }},
      Home:{ 
        screen: MainScreen, 
        navigationOptions: {
          header: null
        }
      }

},

  {
    initialRouteName: 'LogIn',
  }
  );

  const App = createNavigationContainer(RootStack);
  
 export default  App; 
