/*
 * @Author: your name
 * @Date: 2019-12-21 16:54:52
 * @LastEditTime : 2019-12-25 15:58:39
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /v2ex/js/action/hotTips/index.js
 */
'use strict';

import types from '../types';
import {request} from '../../expand/request';

export function onLoadHotTipsData(url) {
  return dispatch => {
    request(url)
      .then(data => {
        handledata(dispatch, data);
      })
      .catch(error => {
        console.log('error', error);
        dispatch({
          type: types.LOAD_V2EX_FAIL,
          error,
        });
      });
  };
}

export function handledata(dispatch, data) {
  dispatch({
    type: types.LOAD_V2EX_SUCCESS,
    items: data,
  });
}
