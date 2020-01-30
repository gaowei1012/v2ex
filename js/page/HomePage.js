/*
 * @Author: your name
 * @Date: 2019-12-21 09:58:03
 * @LastEditTime : 2019-12-21 19:39:05
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /v2ex/js/page/IndexPage.js
 */
'use strict';

import React, {Component} from 'react';
import {BackHandler, ToastAndroid} from 'react-native';
import NavigationUtil from '../utils/NavigationUtil';
import DynamicTabNavigator from '../navigation/DynamicTabNavigator';

export default class HomePage extends Component {
  componentDidMount() {
    BackHandler.addEventListener(
      'hardwareBackPress',
      this.onBackButtonPressAndroid,
    );
  }

  // 安卓物理返回键
  onBackButtonPressAndroid = () => {
    if (this.props.navigation.isFocused()) {
      if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
        return false;
      }
      this.lastBackPressed = Date.now();
      ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
      return true;
    }
  };

  componentWillMount() {
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this.onBackButtonPressAndroid,
    );
  }

  render() {
    NavigationUtil.navigation = this.props.navigation;
    return <DynamicTabNavigator />;
  }
}
