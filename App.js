import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

//--- trang ---//
import MyTabs from './components/tabsNavigator/MyTabs';
//--- end trang ---//
// const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
