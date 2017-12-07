/**
 * Created by zhaofeng
 * Date: 2017/12/7
 * Time: 11:39
 *
 */
'use strict';
const ErrorObject = require('./utils/ErrorObject');
const HttpStatus = require('./utils/HttpStatus');
module.exports = {
    formatSuccessResponse(context, status = HttpStatus.SUCCESS, body = {}) {
        context.status = status;
        context.body = body;
    },
    formatCatchErr(context, err) {
        if (err.code === 'invalid_param') {
            context.body = { err_msg: err.errors, err_code: 'invalid_param' };
            context.status = HttpStatus.PARAMS_ERROR;
            return;
        }
        context.logger.error(err);
        context.body = { err_msg: err };
        context.status = HttpStatus.SERVICE_ERROR;
    },
    formatCatchErrObject(context, err) {
        if (err.code === 'invalid_param') {
            context.logger.error(err.errors);
            context.body = ErrorObject.getErrSingle(err.errors, ErrorObject.ERROR_DEFAULT,
                'validation_code', ErrorObject.OPERATE_TYPE_ALERT);
            context.status = HttpStatus.PARAMS_ERROR;
            return;
        }
        context.logger.error(err);
        context.body = { err_msg: err };
        context.status = HttpStatus.SERVICE_ERROR;
    },
};

