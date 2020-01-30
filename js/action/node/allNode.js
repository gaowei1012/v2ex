/*
 * @Author: your name
 * @Date: 2019-12-25 11:31:23
 * @LastEditTime : 2019-12-25 11:59:25
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /v2ex/js/action/node/allNode.js
 */
'sue strict';
import types from '../types';
import {request} from '../../expand/request';

export function onAllLoadNodes(url) {
  return dispatch => {
    request(url)
      .then(data => {
        handleData(dispatch, data);
      })
      .catch(error => {
        console.log('error', error);
        dispatch({
          type: types.LOAD_ALL_NODE_FAIL,
          error,
        });
      });
  };
}

function handleData(dispatch, data) {
  dispatch({
    type: types.LOAD_ALL_NODE_SUCCESS,
    items: data,
  });
}
