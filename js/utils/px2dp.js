/*
 * @Author: your name
 * @Date: 2019-12-21 09:36:06
 * @LastEditTime : 2019-12-23 16:26:44
 * @LastEditors  : Please set LastEditors
 * @Description: px2dp 适配
 * @FilePath: /v2ex/js/utils/px2dp.js
 */
'use strict';
import {Dimensions} from 'react-native';

// 获取屏幕的宽度
const deviceWidthDp = Dimensions.get('window').width;
// 设计稿的尺寸
let defaultWidth = 750;

export const px2dp = uiEleWidth => {
  return (uiEleWidth * deviceWidthDp) / defaultWidth;
};
