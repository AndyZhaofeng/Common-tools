/**
 * Created by zhaofeng
 * Date: 2017/8/14
 * Time: 15:44
 *
 */
'use strict';
const OPERATE_TYPE_ALERT = 'alert';
const OPERATE_TYPE_INLINE = 'inline';
const ERROR_CODE_DEFAULT = 'default';
const FIELD_DEFAULT = 'deafult';
function getErrSingle(msg, error_code, field, type) {
  return {
    err_messages: [{ message: msg, field }],
    operation_type: type,
    error_code,
  };
}
function getErrParams(msg, error_code, type) {
  return {
    err_messages: msg,
    operation_type: type,
    error_code,
  };
}
module.exports = {
  getErrSingle,
  getErrParams,
  OPERATE_TYPE_ALERT,
  OPERATE_TYPE_INLINE,
  ERROR_CODE_DEFAULT,
  FIELD_DEFAULT,
};
