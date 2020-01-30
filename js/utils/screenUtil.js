/*
 * @Author: your name
 * @Date: 2019-12-20 13:25:46
 * @LastEditTime : 2019-12-20 14:46:27
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hehechaojidaxue/js/utils/screenUtil.js
 */
'use strict';

import {Dimensions, PixelRatio, Platform} from 'react-native';

const defaultWidth = 375;
const defaultHeight = 667;

// 像素密度
export const DEFAULT_DENSITY = 2;

// 宽高
export let screentW = Dimensions.get('window').width;
export let screentH = Dimensions.get('window').height;

// 字体
const fontScale = PixelRatio.getFontScale();
export let pixelRatio = PixelRatio.get();

// 将px转为dp
// 参考 https://zhuanlan.zhihu.com/p/19565895
const w2 = defaultWidth / DEFAULT_DENSITY;
const h2 = defaultHeight / DEFAULT_DENSITY;

// 缩放比例
const _screentWidth = screentW / defaultWidth;
const _screentHeight = screentH / defaultHeight;

// IhpneX
const X_WIDTH = 375;
const X_HEIGHT = 812;

/**
 * 屏幕缩放比例
 */
export function scaleSize(size) {
  return size * _screentWidth;
}

/**
 * 根据屏幕高度适配
 */
export function scalHeight(size) {
  return size * _screentHeight;
}

// 设置字体大小
export function setText(size, allowFontScaling = false) {
  const scale = Math.min(_screentWidth, scalHeight);
  const fontSize = allowFontScaling ? 1 : fontScale;
  return (size * scale) / fontSize;
}

// 判断是否是iPhoneX
export function isIPhoneX() {
  return (
    Platform.OS === 'ios' &&
    ((screentH === X_HEIGHT && screentH === X_HEIGHT) ||
      (screentH === X_WIDTH && screentW === X_HEIGHT))
  );
}

// 根据 iPhoneX 返回不同的样式
export function ifIphoneX(iphoneStyle, iosStyle = {}, androidStyle) {
  if (isIPhoneX) {
    return iphoneStyle;
  } else if (Platform.OS === 'ios') {
    return iosStyle;
  } else {
    if (androidStyle) {
      return androidStyle;
    }
    return iosStyle;
  }
}
