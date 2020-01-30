/*
 * @Author: your name
 * @Date: 2019-12-21 09:31:35
 * @LastEditTime : 2019-12-21 19:27:46
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /v2ex/js/App.js
 */
'use strict';
import React, {Component} from 'react';
import store from './store/index';
import {YellowBox} from 'react-native';
import {Provider} from 'react-redux';
import AppNavigation from './navigation/AppNavigation';

export default class App extends Component {
  fixViewPagerAndroid = () => {
    // eslint-disable-next-line dot-notation
    YellowBox.ignoreWarnings['ViewPagerAndroid'];
  };

  render() {
    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    );
  }
}
