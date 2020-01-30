/*
 * @Author: your name
 * @Date: 2019-12-23 09:25:13
 * @LastEditTime : 2019-12-25 16:26:37
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /v2ex/js/action/v2ex/index.js
 */
'use strict';

import types from '../types';
import {request} from '../../expand/request';

export function onLoadV2exData(url) {
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
