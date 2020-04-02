import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import RootScreen from '../screen/RootScreen';
import DrawerNavigator from "./DrawerNavigation";



const DashBoardManagementStack = createStackNavigator(
    {
        AppDrawer: DrawerNavigator,



    }, {
    headerMode: "none"
}
);





const MainNavigator = createSwitchNavigator(
    {
        Root: RootScreen,
        DashBoardManagementStack

    },
    {
        initialRouteName: "Root",
        headerMode: "none",
    }
)


export default createAppContainer(MainNavigator);