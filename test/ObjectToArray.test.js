/**
 * Created by zhaofeng
 * Date: 2017/11/15
 * Time: 14:06
 *
 */
'use strict';
const assert = require('assert');

describe('ObjectToArray', () => {
    it('正常', () => {
        const object = { id: 101711010137523,
            amount: '0.02',
            preFee: '0.00',
            buyerName: 'null',
            preference: '网银',
            ordernum: '201711011539343981',
            ordersts: '待支付',
            createdate: '2017-11-01 15:39:46',
            subject: 'sales',
            bodys: 'sales',
            buyerRealname: 'null',
            trade_way: 'CMB' };
        let objectArray = [];
        for(let i in object){
            objectArray.push(object[i]);
        }
            console.log(objectArray.toString());

        const alias = { '创建时间': 'createdate',
            '商户订单号': 'ordernum',
            '商品名称': 'subject',
            '支付方式': 'preference',
            '金额(元)': 'amount',
            '手续费(元)': 'preFee',
            '状态': 'ordersts' };
        let aliasArray = []
        for(let i in alias){
            aliasArray.push(alias[i]);
            console.log(object[alias[i]]);
        }

        console.log(aliasArray.toString());
    });
});

