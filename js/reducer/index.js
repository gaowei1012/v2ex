/*
 * @Author: your name
 * @Date: 2019-12-21 09:36:22
 * @LastEditTime : 2019-12-25 11:44:25
 * @LastEditors  : Please set LastEditors
 * @Description: reducer store
 * @FilePath: /v2ex/js/reducer/index.js
 */
'use strict';

import {combineReducers} from 'redux';
import {rootCom, RootNavigation} from '../navigation/AppNavigation';
import theme from './theme/index';
import hotTips from './hotTips/index';
import newTips from './newTips/index';
import node from './node/index';
// import githubRepo from './github/index';
import allNode from './node/allNode';

const navState = RootNavigation.router.getStateForAction(
  RootNavigation.router.getActionForPathAndParams(rootCom),
);

const navReducer = (state = navState, action) => {
  const nextState = RootNavigation.router.getStateForAction(action, state);
  return nextState || state;
};

const root = combineReducers({
  nav: navReducer,
  theme: theme,
  vtoex: hotTips,
  tips: newTips,
  node: node,
  // repo: githubRepo,
  allNode: allNode,
});

export default root;
