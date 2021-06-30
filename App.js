import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {View} from 'react-native';

//Component
// import ConTents from './components/conTent/ConTents';
import MyTabs from './components/TabNavigator/MyTabs';
//end component

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
      // <View>
      //   <ConTents />
      // </View>
    );
  }
}

export default App;
