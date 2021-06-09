import React, {Component} from 'react';
import {Ionicons} from '@expo/vector-icons';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createStackNavigator} from '@react-navigation/stack';

//--- trang ---//
import ConTents from './components/conTent/ConTents';
import Services from './components/services/Services';
import Setting from './components/settings/Setting';
// import ConTentsItem from './components/conTent/ConTentsItem';
//--- end trang ---//
const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
        // screenOptions={({route}) => ({
        //   tabBarIcon: ({focused, color, size}) => {
        //     if (route.name === 'Home') {
        //       return (
        //         <Ionicons
        //           name={
        //             focused
        //               ? 'ios-information-circle'
        //               : 'ios-information-circle-outline'
        //           }
        //           size={size}
        //           color={color}
        //         />
        //       );
        //     } else if (route.name === 'Setting') {
        //       return (
        //         <Ionicons
        //           name={focused ? 'ios-list-box' : 'ios-list'}
        //           size={size}
        //           color={color}
        //         />
        //       );
        //     }
        //   },
        // })}
        // tabBarOptions={{
        //   activeTintColor: 'tomato',
        //   inactiveTintColor: 'gray',
        // }}
        >
          <Tab.Screen
            name="Home"
            component={ConTents}
            options={{tabBarBadge: 3}}
          />
          <Tab.Screen name="Service" component={Services} />
          <Tab.Screen name="Setting" component={Setting} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
