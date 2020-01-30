/*
 * @Author: your name
 * @Date: 2019-12-25 10:16:15
 * @LastEditTime : 2019-12-26 08:56:11
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /v2ex/js/page/NodePage.js
 */
'use strict';

import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import THEME_DEFAULT from '../common/THEME_DEFAULT';
import TopNavigationBar from '../common/TopNavigationBar';
import {screentW} from '../utils/screenUtil';
import {BASE_URL, ALL_NODE} from '../expand/config';
import {px2dp} from '../utils/px2dp';
import actions from '../action/index';
import {connect} from 'react-redux';

class NodePage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.loadData();
  }

  loadData() {
    const {onAllLoadNodes} = this.props;
    let url = BASE_URL + ALL_NODE;
    onAllLoadNodes(url);
  }

  _renderNodes() {
    let node_arr = this.props.allNode.item;
    if (!node_arr) return;
    return (
      <ScrollView horizontal={false} style={{width: screentW}}>
        <TouchableOpacity onPress={() => null} activeOpacity={1}>
          <View style={styles.nodeBox}>
            {node_arr.map(item => (
              <View style={styles.node}>
                <Text style={styles.nodeText}>{item.name}</Text>
              </View>
            ))}
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  }

  _renderTopBar() {
    let statusbar = {
      backgroundColor: THEME_DEFAULT.DEFAULT_COLOR,
      barStyle: 'light-content',
    };
    return (
      <TopNavigationBar
        title="节点"
        statusBar={statusbar}
        style={{backgroundColor: THEME_DEFAULT.DEFAULT_COLOR}}
      />
    );
  }
  render() {
    return (
      <View style={styles.container}>
        {this._renderTopBar()}
        {this._renderNodes()}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  allNode: state.allNode,
});

const mapDispatchToProps = dispatch => ({
  onAllLoadNodes: url => dispatch(actions.onAllLoadNodes(url)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NodePage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: px2dp(22),
  },
  nodeBox: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    margin: px2dp(10),
    width: screentW,
    justifyContent: 'space-around',
  },
  node: {
    padding: px2dp(10),
    backgroundColor: '#eee',
    borderRadius: px2dp(8),
    margin: px2dp(10),
  },
  nodeText: {
    fontSize: px2dp(32),
    color: '#333',
  },
});
