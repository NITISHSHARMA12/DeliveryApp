import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }


    }



    render() {
        const { screenRotate, themeHeader, onClickLeftIcon, openDrawer, title, onlyEdit, onEdit } = this.props
        // console.log("theme",themeHeader)
        const styles = StyleSheet.create({
            mainContainer: {
                flex: 1,
                flexDirection: 'row',
                justifyContent:'center',
                alignItems:'center',
                paddingLeft: 15,
                paddingRight: 15,
                backgroundColor: '#fff',


            },
            leftMainContainer:{
                flex:1, 
                flexDirection:'row',
                
            },
            leftIconContainer: {
                flex: 1,
                
            },
            titleContainer: {
                flex:5,
                alignItems:'flex-start', 
                paddingLeft:10
                // backgroundColor:'red', 
                
                

            },
            rightIconContainer: {
                flex: screenRotate ?1 : 1,
                justifyContent: 'center',
                paddingRight:12,
                alignItems:'flex-end'
            }

        })



        return (
            <View style={styles.mainContainer}>
                {(themeHeader && themeHeader.leftIcon) ?
                    <View style={styles.leftMainContainer}>
                        <View style={styles.leftIconContainer}>
                            <TouchableOpacity activeOpacity={0.40} underlayColor={true} onPress={onClickLeftIcon}> 
                                <Icon name={themeHeader.leftIcon.name}
                                    size={20}
                                    type={themeHeader.leftIcon.type}
                                    color={"red"} />
                            </TouchableOpacity>

                        </View>

                        <View style={styles.titleContainer}>
                            <TouchableOpacity activeOpacity={0.50} underlayColor={true} onPress={onClickLeftIcon}> 
                                <Text style={{ color: '#fff' }}>{title}</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                    :
                    <View style={styles.leftMainContainer}>
                        <View style={styles.leftIconContainer}>
                            <TouchableOpacity activeOpacity={0.50} underlayColor={true} onPress={openDrawer}> 
                                <Icon
                                    size={20}
                                    name='bars'
                                    type='font-awesome'
                                    color={'#2680eb'}
                                />
                            </TouchableOpacity>

                        </View>

                        <View style={styles.titleContainer}>
                            <TouchableOpacity activeOpacity={0.40} underlayColor={true} onPress={openDrawer}> 
                                <Text style={{ color: '#ffff' }}>{title}</Text>
                            </TouchableOpacity>

                        </View>
                    </View>

                }
            
            {(themeHeader && themeHeader.rightButton) ?
                <View style={styles.rightIconContainer}>
                    <TouchableOpacity activeOpacity={0.40} underlayColor={true} onPress={()=>{
                        themeHeader.rightButton.onclickButton();
                            }}>
                        <Text style={{ color: '#fff' }}>{themeHeader.rightButton.title}</Text>
                        {/* <Icon
                            name='edit'
                            type='font-awesome'
                            color={Colors.COLOR_WHITE}
                            
                        /> */}
                    </TouchableOpacity>
                </View>:
                <View style={styles.rightIconContainer}>
                </View>
            }

                
               


            </View>
        );
    }

}

export default Header

