import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';

import { Icon, Avatar } from 'react-native-elements';


class CustomDrawerItem extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    navigateToScreen = (route) => () => {
        console.log("route", route)
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }




    render() {
        const { patinet } = this.props;
        return (
            <View style={styles.mainContainerFluid}>
                <View style={styles.mainContainer}>
                    <ScrollView>
                        <ImageBackground source={require('../assets/bg.png')}
                            style={{ width: '100%', borderBottomWidth: 3, }}>
                            <View style={styles.profileContainer}>

                                <View style={styles.profileIconContainer}>

                                    <Avatar
                                        rounded
                                        size="large"
                                        source={{
                                            uri:
                                                'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
                                        }}
                                    />

                                </View>

                                <View style={styles.profileContent}>
                                    <Text style={styles.textStyle}>Pankaj</Text>
                                </View>


                            </View>
                            {/* <Text style={styles.textPractice}>Practice Name</Text> */}
                        </ImageBackground>
                        <View style={styles.menuBar}>
                            <DrawerItem
                                key={Math.random()}
                                OnPress={this.navigateToScreen('Dashboard')}
                                Screen='Dashboard'
                                IconName="home"
                                IconType='font-awesome'
                                Title="Dashboard"
                                activeScreen={this.props.activeItemKey}
                            />

                            <DrawerItem
                                key={Math.random()}
                                OnPress={this.navigateToScreen('SettingScreen')}
                                Screen='SettingScreen'
                                IconName="calendar"
                                IconType='font-awesome'
                                Title="order"
                                activeScreen={this.props.activeItemKey}
                            />








                        </View>
                    </ScrollView>
                </View >


            </View >
        );
    }
}

export default CustomDrawerItem

const styles = StyleSheet.create({
    mainContainerFluid: {
        flex: 1,
        flexDirection: "column"
    },
    mainContainer: {
        flex: 9,
        flexDirection: "column",
        backgroundColor:'#060a19'
    },

    profileContainer: {
        flex: 1,
        height: 150,
        flexDirection: 'row',
        // borderBottomWidth: 2,
        backgroundColor: '#062d868c',

    },
    profileIcon: {
        width: 75,
        height: 75,
        resizeMode: 'center'

    },
    textStyle: {
        color: '#fff'
    },
    textPractice: {
        color: '#fff',
        textAlign: "right",
        paddingHorizontal: 15,
    },
    profileIconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',


    },
    profileContent: {
        flex: 2,
        justifyContent: 'center'
    },

    navSectionStyle: {
        flexDirection: 'row',
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 15,
        alignItems: 'center'

    },
    menuBar: {
        flex: 8,
    },
    menuIcon: {
        flex: 1,
        alignItems: 'center',
    
        // backgroundColor:'red'
    },
    menuContainer: {
        flex: 6,
    },
    menuLabelText: {
        color:'#fff',
        fontSize:25
        
    },

    sectionHeadingStyle: {
        paddingVertical: 10,
        paddingHorizontal: 5
    },
    footerContainer: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center'
    },

    footerMainContainer: {
        flex: 0.7,
        flexDirection: 'row',
        paddingHorizontal: 15,
        borderColor: 'red',
        borderTopWidth: 2,

    },
    activeBackgroundColor: {
        // backgroundColor: 'red',

    },
    activeColor: {
        color: '#ffff'

    },

})

function DrawerItem(props) {
    const { OnPress, Screen, IconName, IconType, Title, activeScreen } = props;
    return (<View key={Math.random()}>
        <TouchableOpacity onPress={OnPress} >
            <View style={[styles.navSectionStyle, (activeScreen == Screen) ? styles.activeBackgroundColor : null]}>

                <View style={styles.menuIcon}>
                    <Icon name={IconName}
                        type={IconType}
                        iconStyle={{ fontSize: 14, marginTop: 2 }}
                        color={activeScreen == Screen ? '#ffff' : '#ffff'}
                    />
                </View>
                <View style={styles.menuContainer}>
                    <Text style={[styles.menuLabelText, (activeScreen == Screen) ? styles.activeColor : '#fff']}>{Title}</Text>
                </View>


            </View>
        </TouchableOpacity>
    </View>
    )
}