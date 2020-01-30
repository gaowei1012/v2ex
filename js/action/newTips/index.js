/*
 * @Author: your name
 * @Date: 2019-12-21 16:54:57
 * @LastEditTime : 2019-12-25 15:35:39
 * @LastEditors  : Please set LastEditors
 * @Description: new tips
 * @FilePath: /v2ex/js/action/newTips/index.js
 */
'use strict';
import {request} from '../../expand/request';
import types from '../types';

export function onRefreshTips(url) {
  return dispatch => {
    request(url)
      .then(data => {
        handleData(dispatch, data);
      })
      .catch(error => {
        console.log('error', error);
        dispatch({
          type: types.LOAD_NEW_FAIL,
          error,
        });
      });
  };
}

function handleData(dispatch, data) {
  dispatch({
    type: types.LOAD_NEW_SUCCESS,
    items: data,
  });
}
