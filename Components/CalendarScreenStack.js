
import { createStackNavigator, createNavigationContainer } from 'react-navigation';
import CalendarScreen from './CalendarScreen';
import CalendarScreenInFo from './CalendarScreenInfo';



const RootStack = createStackNavigator({
      CalInfo: CalendarScreenInFo,
      Home: CalendarScreen

},
// {   
//   headerMode: 'none' 
// },
  {
    initialRouteName: 'Home',
  }
  );

  const CalendarScreenStack = createNavigationContainer(RootStack);
  
 export default  CalendarScreenStack; 