/**
 * Created by zhaofeng
 * Date: 2017/11/9
 * Time: 10:19
 *
 */

'use strict';
const assert = require('assert');
const amountUtils = require('../app/AmountUtils');

describe('AmountUtils', () => {
    describe('yuanToFen', () => {
        it('正常', () => {
            const value = amountUtils.yuanToFen('4181.4');
            const value1 = amountUtils.yuanToFen('4181');
            const value2 = amountUtils.yuanToFen('4181.01');
            const value3 = amountUtils.yuanToFen('');
            const value4 = amountUtils.yuanToFen('0');
            const value5 = amountUtils.yuanToFen('a');
            const value6 = amountUtils.yuanToFen('0.3');
            const value7 = amountUtils.yuanToFen('0.01');
            const value8 = amountUtils.yuanToFen('aaaaaa');
            const value9 = amountUtils.yuanToFen('4181.111');
            const value10 = amountUtils.yuanToFen('4181.119');
            assert(value === 418140);
            assert(value1 === 418100);
            assert(value2 === 418101);
            assert(value3 === 0);
            assert(value4 === 0);
            assert(value5 === 0);
            assert(value6 === 30);
            assert(value7 === 1);
            assert(value8 === 0);
            assert(value9 === 418111);
            assert(value10 === 418112);
        });
    });

    describe('fenToYuan', () => {
        it('正常', () => {
            const value = amountUtils.fenToYuanChar('41814');
            const value1 = amountUtils.fenToYuanChar(41814);
            assert(value === '418.14');
            assert(value1 === '418.14');
        });
    });
});

