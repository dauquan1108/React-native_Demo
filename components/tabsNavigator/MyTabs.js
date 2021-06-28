import * as React from 'react';

// Thu vien trong tabs navigator

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons';
// end Thu vien trong tabs navigator

// Component

import NewFeed from '../services/NewFeed';
import Messenger from '../services/Messger';
import OverView from '../services/OverView';
import Groups from '../services/Groups';
// end Component

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="NewFeed"
        component={NewFeed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Messenger"
        component={Messenger}
        options={{
          tabBarLabel: 'Messenger',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="messenger" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="OverView"
        component={OverView}
        options={{
          tabBarLabel: 'OverView',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="overView" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Groups"
        component={Groups}
        options={{
          tabBarLabel: 'Groups',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="groups" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
