/*
 * @Author: your name
 * @Date: 2019-12-26 10:02:15
 * @LastEditTime : 2019-12-26 11:14:58
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /v2ex/js/common/ViewContet.js
 */
'use strict';

import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {screentW} from '../utils/screenUtil';
import {px2dp} from '../utils/px2dp';

export default class ViewContent extends Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    content: PropTypes.string,
    avatar: PropTypes.string,
    title: PropTypes.string,
    tips: PropTypes.string,
    url: PropTypes.string,
    node: PropTypes.object,
    member: PropTypes.object,
    last_touched: PropTypes.string,
    username: PropTypes.string,
  };

  render() {
    const {content, title, username, url} = this.props;
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.avatarBox}>
            <View style={styles.leftAvatarIcon}>
              <Image
                resizeMode="contain"
                style={{width: px2dp(80), height: px2dp(80)}}
                source={{
                  uri: `https:${url}`,
                }}
              />
              <View style={styles.descBox}>
                <Text style={styles.name}>{username}</Text>
                <View style={styles.timeDescBox}>
                  <Text style={styles.laetDate}>at 1小时14分钟前 </Text>
                  <Text style={styles.dianJi}>1234 次点击</Text>
                </View>
              </View>
            </View>
            <View style={styles.tipsBox}>
              <Text style={styles.tips}>{title}</Text>
            </View>
          </View>
          {/* content */}
          <View style={styles.contentBox}>
            <Text style={styles.content}>{content}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatarBox: {
    width: screentW,
    padding: px2dp(20),
    height: px2dp(120),
    // backgroundColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftAvatarIcon: {
    flexDirection: 'row',
  },
  descBox: {
    marginTop: px2dp(4),
    flexDirection: 'column',
    marginLeft: px2dp(14),
  },
  name: {
    fontSize: px2dp(28),
    color: '#333',
  },
  timeDescBox: {
    marginTop: px2dp(10),
    flexDirection: 'row',
  },
  laetDate: {
    fontSize: px2dp(24),
    color: '#ccc',
    marginRight: px2dp(10),
  },
  dianJi: {
    fontSize: px2dp(24),
    color: '#ccc',
  },
  tipsBox: {
    padding: px2dp(6),
    height: px2dp(36),
    backgroundColor: '#eee',
    borderRadius: px2dp(6),
  },
  tips: {
    fontSize: px2dp(24),
    color: '#333',
  },
  contentBox: {
    padding: px2dp(20),
  },
  content: {
    fontSize: px2dp(26),
    color: '#333',
    padding: px2dp(10),
  },
});
