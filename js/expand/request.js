/*
 * @Author: your name
 * @Date: 2019-12-21 09:47:39
 * @LastEditTime : 2020-01-03 17:03:46
 * @LastEditors  : Please set LastEditors
 * @Description: request utils
 * @FilePath: /v2ex/js/api/request.js
 */
'use strict';

import axios from 'axios';

// http://192.168.1.115:8000/api/user/send_vcode

export function request(url, method, data = {}) {
  return new Promise((resolve, reject) => {
    axios({
      url: url,
      method: method,
      data: data,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then(result => {
        resolve(result.data);
      })
      .catch(error => {
        reject(error);
      });
  });
}

// function request() {
//   // let data = {
//   //   mobile: 15316678351,
//   // };
//   //let url = 'http://192.168.1.115:8000/api/user/send_vcode';
//   return new Promise((resolve, reject) => {
//     //console.log('data', data, 'url', url);
//     axios({
//       url: url,
//       method: 'POST',
//       data: data,
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//       },
//     })
//       .then(result => {
//         console.log('res-------res', result);
//         resolve(result.data);
//       })
//       .catch(err => {
//         console.log(err);
//         reject(err);
//       });
//   });
// }
//
// request();
