/*
 * @Author: your name
 * @Date: 2019-12-21 16:55:02
 * @LastEditTime : 2019-12-25 15:35:51
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /v2ex/js/action/node/index.js
 */
'use strict';
import types from '../types';
import {request} from '../../expand/request';

export function onRefreshNodes(url) {
  return dispatch => {
    request(url)
      .then(data => {
        handleData(dispatch, data);
      })
      .catch(error => {
        console.log('error', error);
        dispatch({
          type: types.LOAD_NODE_FAIL,
          error,
        });
      });
  };
}

function handleData(dispatch, data) {
  dispatch({
    type: types.LOAD_NODE_SUCCESS,
    items: data,
  });
}
