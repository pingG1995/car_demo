/**
 * Author: yangpeifang
 * Date: 2020-06-19
 */
import { request } from '@/utils/request';

/**
 * 
 * @param {api, data}  /api为接口 data为body参数
 *
 
  // 获取
  export const list = (info = {}) => request.post(`/menu/queries`, info.params || {});
  // 新增
  export const create = (info = {}) => request.post(`/menu`, info.params);
  // 修改
  export const edit = (info = {}) => request.put(`/menu/${info.id}`, info.params);
  // 删除
  export const delete = (info = {}) => request.delete(`/menu/${info.id}`, info.params);
  // 详情
  export const detail = (info = {}) => request.get(`/menu/${info.id}`);
 
 */
