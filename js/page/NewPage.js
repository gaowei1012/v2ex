/*
 * @Author: your name
 * @Date: 2019-12-24 17:42:23
 * @LastEditTime : 2019-12-26 11:18:40
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /v2ex/js/page/NewPage.js
 */
'use strict';

import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import TopNavigationBar from '../common/TopNavigationBar';
import {BASE_URL, NEW_TIPS} from '../expand/config';
import THEME_DEFAULT from '../common/THEME_DEFAULT';
import {connect} from 'react-redux';
import actions from '../action/index';
import FlatListItem from '../component/FlatList/index';
import {px2dp} from '../utils/px2dp';
import NavigationUtil from '../utils/NavigationUtil';

class NewPage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.loadData();
  }
  loadData() {
    let url = BASE_URL + NEW_TIPS;
    const {onRefreshTips} = this.props;
    onRefreshTips(url);
  }

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

  _renderFlatListItem() {
    const newTips = this.props.tips.item;
    return (
      <FlatListItem
        flat_item={newTips}
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
        title="最新"
        statusBar={statusbar}
        style={{backgroundColor: THEME_DEFAULT.DEFAULT_COLOR}}
      />
    );
  }
  render() {
    return (
      <View style={styles.conatiner}>
        {this._renderTopBar()}
        {this._renderFlatListItem()}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  tips: state.tips,
});

const mapDispatchToProps = dispatch => ({
  onRefreshTips: url => dispatch(actions.onRefreshTips(url)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewPage);

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    marginTop: px2dp(22),
  },
});
