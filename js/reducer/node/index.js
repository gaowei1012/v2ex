/*
 * @Author: your name
 * @Date: 2019-12-21 16:55:40
 * @LastEditTime : 2019-12-23 14:03:41
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /v2ex/js/reducer/node/index.js
 */
'use strict';
import types from '../../action/types';

export default function onNodeAction(state = {}, action) {
  switch (action.type) {
    case types.LOAD_NODE_SUCCESS:
      return {
        ...state,
        item: action.items,
      };
    case types.LOAD_NODE_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
}
