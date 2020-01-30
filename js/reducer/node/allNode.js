/*
 * @Author: your name
 * @Date: 2019-12-25 11:36:48
 * @LastEditTime : 2019-12-25 11:58:27
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /v2ex/js/reducer/node/allNode.js
 */
'use strict';
import types from '../../action/types';

export default function onAllNodeAction(state = {}, action) {
  switch (action.type) {
    case types.LOAD_ALL_NODE_SUCCESS:
      return {
        ...state,
        item: action.items,
      };
    case types.LOAD_ALL_NODE_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
}
