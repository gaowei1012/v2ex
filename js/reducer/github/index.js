/*
 * @Author: your name
 * @Date: 2019-12-23 16:45:59
 * @LastEditTime : 2019-12-23 17:08:40
 * @LastEditors  : Please set LastEditors
 * @Description: github reducers
 * @FilePath: /v2ex/js/reducer/github/index.js
 */
'use strict';
import types from '../../action/types';

export function onGithubRepoAction(state = {}, action) {
  switch (action.type) {
    case types.LOAD_GIUHUB_REPO_SUCCESS:
      return {
        ...state,
        item: action.items,
      };
    case types.LOAD_GIUHUB_REPO_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
}
