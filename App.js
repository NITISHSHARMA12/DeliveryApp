/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';

import MainNavigator from './navigation/index'

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <MainNavigator/>
      
    );
  }



}

export default App

