/*
 * @Author: your name
 * @Date: 2019-12-21 09:36:18
 * @LastEditTime : 2019-12-21 19:21:39
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /v2ex/js/store/index.js
 */
'use strict';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducer/index';
import {middleware} from '../navigation/AppNavigation';
import logger from 'redux-logger';

const middlewares = [middleware, thunk, logger];

export default createStore(reducers, applyMiddleware(...middlewares));
