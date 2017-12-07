/**
 * Created by zhaofeng on 2017/7/4.
 */
'use strict';

const SUCCESS = 200;    // 请求成功
const CREATED = 201;    // 请求成功，新的资源已创建
const ACCEPTED = 202;   // 请求成功
const NO_CONTENT = 204; // 没有内容
const BAD_REQUEST = 400;    // 请求不正确
const UNAUTHORIZED = 401;   // 需要认证
const FORBIDDEN = 403;    // 禁止访问
const NOT_ACCEPT = 406; // 同Accept相关的首部里含有无法处理的内容
const CONFLICT = 409;   //
const PARAMS_ERROR = 422; // 传入参数出错
const SERVICE_ERROR = 500;  //


module.exports = {
  SUCCESS,
  CREATED,
  ACCEPTED,
  NO_CONTENT,
  BAD_REQUEST,
  UNAUTHORIZED,
  FORBIDDEN,
  SERVICE_ERROR,
  CONFLICT,
  PARAMS_ERROR,
  NOT_ACCEPT,
};
