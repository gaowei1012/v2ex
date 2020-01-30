/*
 * @Author: your name
 * @Date: 2019-12-21 18:42:21
 * @LastEditTime: 2019-12-21 19:07:45
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /v2ex/js/page/WelcomePage.js
 */
'use strict';
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import NavigationUtil from '../utils/NavigationUtil';

export default class WelcomPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.init();
  }

  // 加载首页初始化
  init() {
    this.timer = setTimeout(() => {
      NavigationUtil.restToHomePage({
        navigation: this.props.navigation,
      });
    }, 3000);
  }

  componentWillMount() {
    this.timer && clearTimeout(this.timer);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerBox}>
          <Text>欢迎页</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
});
