/*
 * @Author: your name
 * @Date: 2019-12-21 18:41:27
 * @LastEditTime : 2019-12-25 10:37:15
 * @LastEditors  : Please set LastEditors
 * @Description: github page
 * @FilePath: /v2ex/js/page/GitHubPage.js
 */
'use strict';

import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import THEME_DEFAULT from '../common/THEME_DEFAULT';
import TopNavigationBar from '../common/TopNavigationBar';
import actions from '../action/index';
import {connect} from 'react-redux';
import {GITHUB, USER_INFO} from '../expand/config';
import {px2dp} from '../utils/px2dp';

class GitHubPage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // this.loadData();
  }
  // loadData() {
  //   const {onLoadGithubRepo} = this.props;
  //   let url = GITHUB + USER_INFO + 'gmw-zjw';
  //   const result = onLoadGithubRepo(url);
  //   console.log('result', result);
  // }
  _renderTopBar() {
    let statusbar = {
      backgroundColor: THEME_DEFAULT.DEFAULT_COLOR,
      barStyle: 'light-content',
    };
    return (
      <TopNavigationBar
        title="GitHub"
        statusBar={statusbar}
        style={{backgroundColor: THEME_DEFAULT.DEFAULT_COLOR}}
      />
    );
  }
  render() {
    return (
      <View style={styles.container}>
        {this._renderTopBar()}
        <View style={styles.contentBox}>
          <Text>github</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  // repo: state.repo,
});

const mapDispatchToProps = dispatch => ({
  // onLoadGithubRepo: url => dispatch(actions.onLoadGithubRepo(url)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GitHubPage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: px2dp(22),
  },
  contentBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
