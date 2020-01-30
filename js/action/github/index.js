/*
 * @Author: your name
 * @Date: 2019-12-23 15:08:17
 * @LastEditTime : 2019-12-25 15:35:26
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /v2ex/js/action/github/index.js
 */
'use strict';

import types from '../types';
import {request} from '../../expand/request';

export function onLoadGithubRepo(url) {
  dispatch => {
    request(url)
      .then(data => {
        handleData(dispatch, data);
      })
      .catch(error => {
        console.log('error', error);
        dispatch({
          type: types.LOAD_GIUHUB_REPO_SUCCESS,
          error,
        });
      });
  };
}

function handleData(dispatch, data) {
  dispatch({
    type: types.LOAD_GIUHUB_REPO_FAIL,
    items: data,
  });
}
