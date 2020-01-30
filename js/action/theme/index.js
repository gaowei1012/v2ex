/*
 * @Author: your name
 * @Date: 2019-12-21 16:53:50
 * @LastEditTime: 2019-12-21 19:15:10
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /v2ex/js/action/theme/index.js
 */
'use strict';

import types from '../types';

export function onThemeChange(theme) {
  return {type: types.THEME_CHANGE, theme: theme};
}
