/*
 * @Author: your name
 * @Date: 2019-12-21 09:58:16
 * @LastEditTime: 2019-12-21 16:49:16
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /v2ex/js/page/TipsPage.js
 */
'use strict';

import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import THEME_DEFAULT from '../common/THEME_DEFAULT';
import TopNavigationBar from '../common/TopNavigationBar';

export default class TipsPage extends Component {
  _renderTopBar() {
    let statusbar = {
      backgroundColor: THEME_DEFAULT.DEFAULT_COLOR,
      barStyle: 'light-content',
    };
    return (
      <TopNavigationBar
        title="Tips"
        statusBar={statusbar}
        style={{backgroundColor: THEME_DEFAULT.DEFAULT_COLOR}}
      />
    );
  }
  render() {
    return (
      <View style={styles.container}>
        {this._renderTopBar()}
        <Text>tips</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
