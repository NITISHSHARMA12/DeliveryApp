import React, { Component } from "react";
import { View, Text, Image } from "react-native";


class RootScreen extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let that = this;
        this.timeoutHandle = setTimeout(() => {
            that.props.navigation.navigate('Dashboard');
        }, 6000);
    }

    componentWillUnmount() {

        clearTimeout(this.timeoutHandle);


        // This is just necessary in the case that the screen is closed before the timeout fires, otherwise it would cause a memory leak that would trigger the transition regardless, breaking the user experience.
    }



    render() {
        return (
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Image
                    
                    source={require('../assets/splash.png')}
                />


            </View>
        )
    }
}



export default RootScreen