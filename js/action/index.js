/*
 * @Author: your name
 * @Date: 2019-12-21 16:54:00
 * @LastEditTime : 2019-12-25 11:34:16
 * @LastEditors  : Please set LastEditors
 * @Description: actions
 * @FilePath: /v2ex/js/action/index.js
 */
'use strict';

import {onLoadV2exData} from './v2ex/index';
import {onRefreshTips} from './newTips/index';
import {onRefreshNodes} from './node/index';
import {onLoadHotTipsData} from './hotTips/index';
import {onLoadGithubRepo} from './github/index';
import {onAllLoadNodes} from './node/allNode';

export default {
  onLoadV2exData,
  onRefreshTips,
  onRefreshNodes,
  onLoadHotTipsData,
  onLoadGithubRepo,
  onAllLoadNodes,
};
