import * as React from 'react';
import {Image, StyleSheet} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Ionicons from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/FontAwesome5';
import IonIcons from 'react-native-vector-icons/Ionicons';
import IonIcon from 'react-native-vector-icons/AntDesign';

//Component
import Home from '../services/Home';
import Friends from '../services/Friends';
import Gallery from '../services/Gallery';
import Notification from '../services/Notification';
import Menu from '../services/Menu';
//End Component
import home from '../../assets/home.png';
import friends from '../../assets/friends.png';
import gallery from '../../assets/gallery.png';
import bell from '../../assets/bell.png';
import menu from '../../assets/menu.png';

const Tab = createMaterialBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#f0edf6"
      barStyle={{backgroundColor: '#040405'}}
      labelStyle={{fontSize: 20, fontWeight: 'bold'}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Image style={styles.tinyLogo} source={home} />
          ),
        }}
      />
      <Tab.Screen
        name="OverView"
        component={Friends}
        options={{
          tabBarLabel: 'Friends',
          tabBarIcon: ({color}) => (
            // <Image style={styles.tinyLogo} source={friends} />
            <Icons name={'user-friends'} color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Messenger"
        component={Gallery}
        options={{
          tabBarLabel: 'Gallery',
          tabBarIcon: ({color}) => (
            // <Image style={styles.tinyLogo} source={gallery} />
            <IonIcon name={'message1'} color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarLabel: 'Notification',
          tabBarIcon: ({color}) => (
            // <Image style={styles.tinyLogo} source={bell} />
            <Ionicons name={'bell'} color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarLabel: 'Menu',
          tabBarIcon: ({color}) => (
            // <Image style={styles.tinyLogo} source={menu} />
            <IonIcons name={'md-menu-outline'} color={color} size={25} />
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
    width: 20,
    height: 20,
  },
  logo: {
    width: 45,
    height: 45,
  },
});
