/*
 * @Author: your name
 * @Date: 2019-12-21 16:55:30
 * @LastEditTime : 2019-12-25 09:18:10
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /v2ex/js/reducer/newTips/index.js
 */
'use strict';
import types from '../../action/types';

export default function onNewTipsAction(state = {}, action) {
  switch (action.type) {
    case types.LOAD_NEW_SUCCESS:
      return {
        ...state,
        item: action.items,
      };
    case types.LOAD_NEW_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
}
