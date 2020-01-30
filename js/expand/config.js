/*
 * @Author: your name
 * @Date: 2019-12-21 09:50:14
 * @LastEditTime : 2019-12-25 16:52:23
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /v2ex/js/api/config.js
 */
'use strict';

module.exports = {
  // v2ex
  BASE_URL: 'https://www.v2ex.com/api/',
  HOT_TIPS: 'topics/hot.json', // 最热主题
  NEW_TIPS: 'topics/latest.json', // 最新主题
  NODE: 'nodes/show.json', // 节点信息
  ALL_NODE: 'nodes/all.json', // 所有节点
  SITE: 'site/stats.json', // 社区帖子统计
  SITE_INFO: 'site/info.json', // 社区介绍
  // github
  GITHUB: 'https://api.github.com/', // github
  // 个人信息
  // 参数 username 不能有 /
  USER_INFO: 'users/',
  // 个人所有的repos
  USER_REPOS: 'repos',
  // 最热模块
  GITHUB_HOT: 'search/repositories?q=',
  // 查询排序
  QUERY_KEY: '&sort=starts',
};
