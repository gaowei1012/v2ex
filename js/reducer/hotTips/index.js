/*
 * @Author: your name
 * @Date: 2019-12-21 16:55:18
 * @LastEditTime : 2019-12-25 15:58:58
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /v2ex/js/reducer/hotTips/index.js
 */
'use strict';
import types from '../../action/types';

export default function onHotTipsAction(state = {}, action) {
  switch (action.type) {
    case types.LOAD_V2EX_SUCCESS:
      return {
        ...state,
        item: action.items,
      };
    case types.LOAD_V2EX_FINAL:
      return {
        ...state,
      };
    default:
      return state;
  }
}
