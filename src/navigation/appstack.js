import 'react-native-gesture-handler';
import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import Drawerdesign from '../screens/drawer';

import Home from './Home';
import LikeddVideos from '../screens/Likedvideos';
import SavedVideos from '../screens/Savedvideos';
const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <Drawerdesign {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: 'grey',
        drawerActiveTintColor: 'blue',
        drawerInactiveTintColor: 'black',
      }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="LikedVideos" component={LikeddVideos} />
      <Drawer.Screen name="SavedVideos" component={SavedVideos} />

      {/* <Drawer.Screen name="" component={Manageusers} /> */}

      {/* <Drawer.Screen name="" */}
    </Drawer.Navigator>
  );
};

export default AppStack;
