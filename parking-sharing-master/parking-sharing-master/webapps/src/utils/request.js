/**
 * Author: JianlinPeng
 * Date: 2020-03-24
 */
import axios, { CancelToken } from 'axios';
import Vue from 'vue';

const instance = axios.create();
const pending = {};
const vue = new Vue();
const authorization = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImNyZWF0ZWQiOjE1OTA1NjkxNDIyMTAsImV4cCI6MTU5MjM2OTE0Mn0.4YfLwfM5Kf4dfIZvdE20wSlcZKbPTTFYSP-zaNw5YJDPYegbrpAVpOq1LGizGOGKGdnhypRlH5tYMGGDuD3U5A';
// const authorization = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtZW5nbWluZ3FpYW5nMzIxMjEiLCJjcmVhdGVkIjoxNTg5NzkxODk1NzA4LCJleHAiOjE1OTE1OTE4OTV9.c-TXc937HCXNP-IYdArpJ99ivuifVvIAtLYTxrAKCY7-jneH3-XN0BGZ3fUhOCJGnRI-g0txhHf-SgPLgypwqg';

const statusMap = {
  400: '错误请求',
  401: '未授权，请重新登录',
  403: '拒绝访问',
  404: '请求错误,未找到该资源',
  405: '请求方法未允许',
  408: '请求超时',
  500: '服务器端出错',
  501: '网络未实现',
  502: '网络错误',
  503: '服务不可用',
  504: '网络超时',
  505: 'http版本不支持该请求'
};

/**
 * 根据config中的method、url参数生成唯一ID
 * @param {String} config, request/response config
//  * @returns {string}, return ID
 */
function getRequestIdentify (config) {
  const { method, url } = config;
  return `${method}&${url}`;
}

/**
 * 删除pending队列中的数据
 * @param {String} identity, 请求ID
 * @returns {null}, null
 */
function removePendingIdentify (identity) {
  if (pending[identity]) {
    pending[identity]('取消过期请求!');
  }
  delete pending[identity];
}

/**
 * 根据config删除pending队列数据
 * @param {Object} config, response config
 * @returns {null}, null
 */
function removePendingAfterRequest (config) {
  const identity = getRequestIdentify(config);
  removePendingIdentify(identity);
}

/**
 * interceptors, to intercept request & response for normalized process
 * @returns {null}, null
 */
function interceptors () {
  instance.interceptors.request.use(config => {
    const env = process.env.NODE_ENV;
    if (env === 'development') {
      config.headers['Authorization'] = authorization;
      const obj = { userId: 'admin' };
      localStorage.setItem('Admin-Token', JSON.stringify(obj));
    } else {
      config.headers['Authorization'] = JSON.parse(localStorage.getItem('Admin-Token')).token;
    }
    // 取消正在执行的请求，然后再次发送
    const identity = getRequestIdentify(config);
    removePendingIdentify(identity);
    config.cancelToken = new CancelToken(c => {
      // 必须在config中设置cancelToken，才可取消请求
      pending[identity] = c;
    });
    if (instance.setReqConfig) {
      return instance.setReqConfig(config);
    }
    return config;
  }, error => Promise.reject(error));
  // 异常处理
  instance.interceptors.response.use(response => {
    removePendingAfterRequest(response.config);
    if (response.data.meta.code.toString().substr(0, 1) !== '2') {
      vue.Alert({
        type: 'error',
        message: `${response.data.meta.code}:${response.data.meta.message}`
      });
      return Promise.reject(err);
    } else {
      return response.data;
    }
  }, err => {
    if (err && err.response) {
      removePendingAfterRequest(err.response.config);
      const { status } = err.response;
      const errData = {
        code: status,
        message: statusMap[status] || `连接错误${status}`
      };
      // 统一错误处理可以放这，例如页面提示错误...
      console.warn('统一错误处理: ', errData);
      vue.Alert({
        type: 'error',
        message: `${errData.code}:${errData.message}`
      });
      if (instance.handlerResErr) {
        instance.handlerResErr(errData);
      }
    }
    return Promise.reject(err);
  });
}

interceptors();

const methods = {
  get: 'get',
  post: 'post',
  put: 'put',
  delete: 'delete'
};

/**
 * handle ajax request
 * @param {String} method, request method
 * @param {String} url, request url
 * @param {String} params, request params, when post&put is data
 * @param {Object} config, config
 * @param {Boolean} abort, if true to keep the first request
 * @returns {Promise<never>|Promise<any>}, return a promise
 */
function handleRequest (method, url, params, config = {}, abort = false) {
  if (abort && pending[`${method}&${url}`]) {
    return Promise.reject(new Error('太忙了, 同一时间只允许一个请求'));
  }
  const requestObj = {
    method,
    url,
    ...config
  };
  if (method === methods.get) {
    requestObj.params = params;
  } else {
    requestObj.data = params;
  }
  return new Promise((resolve, reject) => {
    instance(requestObj)
      .then(response => {
        resolve(response);
      }).catch(error => {
        reject(error);
      });
  });
}

export const request = {
  get (url, params, config, abort) {
    return handleRequest(methods.get, url, params, config, abort);
  },
  post (url, params, config, abort) {
    return handleRequest(methods.post, url, params, config, abort);
  },
  put (url, params, config, abort) {
    return handleRequest(methods.put, url, params, config, abort);
  },
  delete (url, params, config, abort) {
    return handleRequest(methods.delete, url, params, config, abort);
  }
};
export const token = authorization;
