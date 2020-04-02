import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import Header from "./Header";

class Theme extends Component {
    constructor(props) {
        super(props);
        this.state = {
            screenRotate: true
        }
        this.onLayout = this.onLayout.bind(this);
    }

    onLayout = () => {
        let { screenRotate } = this.state
        this.setState({
            screenRotate: !screenRotate
        })
    }

    render() {
        const { screenRotate } = this.state;
        const { children, themeHeader, onClickLeftIcon, onRightClickIcon, openDrawer, onlyEdit, onEdit } = this.props;


        const styles = StyleSheet.create({
            mainContainer: {
                flex: 1,
                flexDirection: 'column',

            },
            page: {
                flex: 1,
            },

            header: {
                flex: screenRotate ? 1.5 : 0.8,

            },
            body: {
                flex: 9,
                backgroundColor: '#fff'
            }

        })

        return (
            <View style={styles.mainContainer}>
                <View style={styles.page} onLayout={this.onLayout}>

                    <View style={styles.header}>
                        <Header
                            screenRotate={screenRotate}
                            themeHeader={themeHeader}
                            onClickLeftIcon={onClickLeftIcon}
                            onRightClickIcon={onRightClickIcon}

                            onlyEdit={onlyEdit}
                            openDrawer={openDrawer}
                            onEdit={onEdit}
                            {...this.props} />
                    </View>


                    <View style={styles.body}>
                        {/* <ErrorBoundary FallbackComponent={ErrorBaoundaryHandle}> */}
                            {children}
                        {/* </ErrorBoundary> */}
                    </View>


                </View>
            </View>
        );
    }

}


export default Theme


