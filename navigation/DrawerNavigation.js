import React from "react";
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import CustomDrawerItem from './CustomDrawerItem';
import Dashboard from "../screen/Dashboard";
import SettingScreen from "../screen/SettingScreen";


const AppointmentStack = createStackNavigator({
  SettingScreen: {
    screen: SettingScreen
  },
}, {
  headerMode: "none"
})


const DrawerNavigator = createDrawerNavigator({
  Dashboard: {
    screen: Dashboard
  },
  SettingScreen: {
    screen: SettingScreen
  },



}, {
  initialRouteName: "Dashboard",
  headerMode: "none",
  contentComponent: (props) => <CustomDrawerItem {...props} />,
  drawerWidth: 290
})



export default DrawerNavigator

