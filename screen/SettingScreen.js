import React,{Component} from "react";
import {View , Text} from "react-native";

import { DrawerActions } from 'react-navigation-drawer';
import Theme from "../Theme";
class SettingScreen extends Component{
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <Theme openDrawer={()=>  this.props.navigation.dispatch(DrawerActions.openDrawer())} title="Home">
            <View style={{paddingHorizontal:15}}>
                <Text>Oredr list</Text>
            </View>
        </Theme>
        );
    }
    

}
export default SettingScreen