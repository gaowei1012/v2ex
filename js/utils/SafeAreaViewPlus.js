/*
 * @Author: your name
 * @Date: 2019-12-23 15:36:39
 * @LastEditTime : 2019-12-23 15:59:04
 * @LastEditors  : Please set LastEditors
 * @Description: iphone 全面屏适配
 * @FilePath: /v2ex/js/utils/SafeAreaViewPlus.js
 */
'use strict';

import React, {Component} from 'react';
import {View, ViewPropTypes, StyleSheet, SafeAreaView} from 'react-native';
import PropTypes from 'prop-types';

export default class SafeAreaViewPlus extends Component {
  static propTypes = {
    ...ViewPropTypes,
    topColor: PropTypes.string,
    bottomColor: PropTypes.string,
    enablePlus: PropTypes.bool,
    topInset: PropTypes.bool,
    bottomInset: PropTypes.bool,
  };
  static defaultProps = {
    topColor: 'transparent',
    bottomColor: '#f8f8f8',
    enablePlus: true,
    topInset: true,
    bottomInset: true,
  };
  genSafeAreaViewPlus() {
    const {children, topColor, bottomColor, topInset, bottomInset} = this.props;
    return (
      <View style={[styles.container, this.props.style]}>
        {this.getTopArea(topColor, topInset)}
        {children}
        {this.getBottomArea(bottomColor, bottomInset)}
      </View>
    );
  }

  genSafeAreaView() {
    return (
      <SafeAreaView style={[styles.container, this.props.style]}>
        {...this.props}
      </SafeAreaView>
    );
  }

  getTopArea(topColor, topInset) {
    return null;
  }

  getBottomArea(bottomColor, bottomInset) {
    return null;
  }

  render() {
    const {enablePlus} = this.props;
    return enablePlus ? this.genSafeAreaViewPlus() : this.genSafeAreaView();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topArea: {
    height: 44,
  },
  bottomArea: {
    height: 34,
  },
});
