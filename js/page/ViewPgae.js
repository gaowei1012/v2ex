/*
 * @Author: your name
 * @Date: 2019-12-25 09:46:29
 * @LastEditTime : 2019-12-26 11:11:44
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /v2ex/js/page/ViewPgae.js
 */
'use strict';

import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import THEME_DEFAULT from '../common/THEME_DEFAULT';
import TopNavigationBar from '../common/TopNavigationBar';
import ViewContent from '../common/ViewContet';
import {screentW} from '../utils/screenUtil';
import {WebView} from 'react-native-webview';
import {GoBack} from '../utils/GoBack';
import {px2dp} from '../utils/px2dp';

export default class ViewPage extends Component {
  constructor(props) {
    super(props);
  }
  _renderContent() {
    const {
      content,
      node,
      member,
      last_touched,
    } = this.props.navigation.state.params;
    let title = node.title;
    let username = member.username;
    let url = member.avatar_normal;
    return (
      <ViewContent
        content={content}
        node={node}
        title={title}
        member={member}
        username={username}
        last_touched={last_touched}
        url={url}
      />
    );
  }
  _renderTopBar() {
    let statusbar = {
      backgroundColor: THEME_DEFAULT.DEFAULT_COLOR,
      barStyle: 'light-content',
    };
    return (
      <TopNavigationBar
        title="帖子详情"
        statusBar={statusbar}
        leftButton={GoBack(this.props)}
        style={{backgroundColor: THEME_DEFAULT.DEFAULT_COLOR}}
      />
    );
  }
  render() {
    const {url} = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        {this._renderTopBar()}
        {/* <WebView source={{uri: url}} /> */}
        {this._renderContent()}
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
