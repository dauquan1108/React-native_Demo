import * as React from 'react';
import {Image, StyleSheet} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

//Component
import Groups from '../services/Groups';
import Messenger from '../services/Messenger';
import NewFeed from '../services/NewFeed';
//End Component

const Tab = createMaterialBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="NewFeed"
      activeColor="#e91e63"
      labelStyle={{fontSize: 12}}
      style={{backgroundColor: 'tomato'}}>
      <Tab.Screen
        name="NewFeed"
        component={NewFeed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Image
              style={styles.tinyLogo}
              source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Messenger"
        component={Messenger}
        options={{
          tabBarLabel: 'Messenger',
          tabBarIcon: ({color}) => (
            <Image
              style={styles.tinyLogo}
              source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Groups"
        component={Groups}
        options={{
          tabBarLabel: 'Groups',
          tabBarIcon: ({color}) => (
            <Image
              style={styles.tinyLogo}
              source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 10,
    height: 10,
  },
  logo: {
    width: 10,
    height: 10,
  },
});
