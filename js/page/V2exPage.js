/*
 * @Author: your name
 * @Date: 2019-12-21 09:57:57
 * @LastEditTime : 2020-01-17 13:11:34
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /v2ex/js/page/HomePage.js
 */
'use strict';

import React, {Component} from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import THEME_DEFAULT from '../common/THEME_DEFAULT';
import TopNavigationBar from '../common/TopNavigationBar';
import {BASE_URL, HOT_TIPS} from '../expand/config';
import FlatListItem from '../component/FlatList/index';
import NavigationUtil from '../utils/NavigationUtil';
import actions from '../action/index';
import {connect} from 'react-redux';
import {px2dp} from '../utils/px2dp';

class V2exPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    const {onLoadV2exData} = this.props;
    let url = BASE_URL + HOT_TIPS;
    onLoadV2exData(url);
  };

  handlerNavigator(url, content, node, member, last_touched) {
    NavigationUtil.goPage(
      {
        url,
        content,
        node,
        member,
        last_touched,
      },
      'ViewPagePlus',
    );
  }

  _renderFlatList() {
    const hot_vtoes = this.props.vtoex.item;
    console.log('hot_vtoes', hot_vtoes);
    return (
      <FlatListItem
        flat_item={hot_vtoes}
        onSelect={(url, content, node, member, last_touched) =>
          this.handlerNavigator(url, content, node, member, last_touched)
        }
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
        title="最热"
        statusBar={statusbar}
        style={{backgroundColor: THEME_DEFAULT.DEFAULT_COLOR}}
      />
    );
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this._renderTopBar()}
        {this._renderFlatList()}
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  vtoex: state.vtoex,
});

const mapDispatchToProps = dispatch => ({
  onLoadV2exData: url => dispatch(actions.onLoadV2exData(url)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(V2exPage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hotBox: {
    height: '100%',
  },
});
