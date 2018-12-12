import React from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableHighlight} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from 'react-navigation';
import CalendarScreen from './CalendarScreen'
import StatusScreen from './StatusScreen'
import DietInput from './DietInput'
import CalendarScreenStack from './CalendarScreenStack';
import CalendarScreenInFo from './CalendarScreenInfo';


export default  createBottomTabNavigator(
  {
    Home: CalendarScreenStack,
    Status: StatusScreen,
    Input: DietInput
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } else if (routeName === 'Status') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }
        else if (routeName === 'Input') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);