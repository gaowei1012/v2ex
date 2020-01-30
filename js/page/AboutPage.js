/*
 * @Author: your name
 * @Date: 2019-12-21 09:58:30
 * @LastEditTime : 2019-12-25 10:37:43
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /v2ex/js/page/AboutPage.js
 */
'use strict';

import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import THEME_DEFAULT from '../common/THEME_DEFAULT';
import TopNavigationBar from '../common/TopNavigationBar';
import {px2dp} from '../utils/px2dp';

export default class AboutPage extends Component {
  _renderTopBar() {
    let statusbar = {
      backgroundColor: THEME_DEFAULT.DEFAULT_COLOR,
      barStyle: 'light-content',
    };
    return (
      <TopNavigationBar
        title="关于我"
        statusBar={statusbar}
        style={{backgroundColor: THEME_DEFAULT.DEFAULT_COLOR}}
      />
    );
  }
  render() {
    return (
      <View style={styles.container}>
        {this._renderTopBar()}
        <Text>关于</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: px2dp(22),
  },
});
