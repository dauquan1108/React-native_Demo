import React, {Component} from 'react';
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
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={ConTents}
            options={{
              title: 'Home',
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                textAlign: 'center',
              },
            }}
          />
          <Tab.Screen name="Service" component={Services} />
          <Tab.Screen name="Setting" component={Setting} />
        </Tab.Navigator>
        {/*<Stack.Navigator*/}
        {/*  screenOptions={{*/}
        {/*    headerStyle: {*/}
        {/*      backgroundColor: '#f4511e',*/}
        {/*    },*/}
        {/*    headerTintColor: '#fff',*/}
        {/*  }}>*/}
        {/*  <Stack.Screen*/}
        {/*    name="ConTentsItems"*/}
        {/*    component={ConTentsItem}*/}
        {/*    // options={{title: 'My home'}}*/}
        {/*  />*/}
        {/*</Stack.Navigator>*/}
      </NavigationContainer>
    );
  }
}

export default App;
